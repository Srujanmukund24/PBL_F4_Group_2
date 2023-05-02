
from pdfminer.high_level import extract_text
import nltk
import re

from tika import parser
from nltk.util import ngrams
from flask import Flask, render_template,request
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
nltk.download('maxent_ne_chunker')
nltk.download('words')
# Libraries needed for NLP

# nltk.download('punkt')
from nltk.stem.lancaster import LancasterStemmer
stemmer = LancasterStemmer()
import pickle
# Libraries needed for Tensorflow processing
import tensorflow
import numpy as np

import tflearn
import random
import json
from tensorflow.python.framework import ops

PHONE_REG = re.compile(r'[\+\(]?[1-9][0-9 .\-\(\)]{8,}[0-9]')
EMAIL_REG = re.compile(r'[a-z0-9\.\-+_]+@[a-z0-9\.\-+_]+\.[a-z]+')
SKILLS_DB = [
    'machine learning',
    'data science',
    'python',
    'word',
    'excel','ML''English','c','ros','c++','cpp','leadership','dsa','kaggle','java','management','ruby','keras',
]
RESERVED_WORDS = [
    'school',
    'college',
    'univers',
    'academy',
    'faculty',
    'institute',
    'faculdades',
    'Schola',
    'schule',
    'lise',
    'lyceum',
    'lycee',
    'polytechnic',
    'kolej',
    'ünivers',
    'okul',
]


# resetting underlying graph data
from tensorflow.python.framework import ops
ops.reset_default_graph()
# tf.reset_default_graph()

# Building neural network
net = tflearn.input_data(shape=[None, 57])
net = tflearn.fully_connected(net, 10)
net = tflearn.fully_connected(net, 10)
net = tflearn.fully_connected(net, 8, activation='softmax')
net = tflearn.regression(net)

# Defining model and setting up tensorboard
model = tflearn.DNN(net, tensorboard_dir='tflearn_logs')
# restoring all the data structures
# restoring all the data structures
data = pickle.load( open( "training_data", "rb" ) )
words = data['words']
classes = data['classes']
train_x = data['train_x']
train_y = data['train_y']

with open('intents.json') as json_data:
    intents = json.load(json_data)

# load the saved model
model.load('model.tflearn')



def clean_up_sentence(sentence):
    # tokenizing the pattern
    sentence_words = nltk.word_tokenize(sentence)
    # stemming each word
    sentence_words = [stemmer.stem(word.lower()) for word in sentence_words]
    return sentence_words

# returning bag of words array: 0 or 1 for each word in the bag that exists in the sentence
def bow(sentence, words, show_details=False):
    # tokenizing the pattern
    sentence_words = clean_up_sentence(sentence)
    # generating bag of words
    bag = [0]*len(words)
    for s in sentence_words:
        for i,w in enumerate(words):
            if w == s:
                bag[i] = 1
                if show_details:
                    print ("found in bag: %s" % w)

    return(np.array(bag))




#Adding some context to the conversation i.e. Contexualization for altering question and intents etc.
# create a data structure to hold user context
context = {}

ERROR_THRESHOLD = 0.25
def classify(sentence):
    # generate probabilities from the model
    results = model.predict([bow(sentence, words)])[0]
    # filter out predictions below a threshold
    results = [[i,r] for i,r in enumerate(results) if r>ERROR_THRESHOLD]
    # sort by strength of probability
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append((classes[r[0]], r[1]))
    # return tuple of intent and probability
    return return_list

def response(sentence, userID='123', show_details=False):
    results = classify(sentence)
    print("SENTENCE :",sentence)
    # if we have a classification then find the matching intent tag
    if results:
        # loop as long as there are matches to process
        while results:
            for i in intents['intents']:
                # find a tag matching the first result
                if i['tag'] == results[0][0]:
                    # set context for this intent if necessary
                    if 'context_set' in i:
                        if show_details: print ('context:', i['context_set'])
                        context[userID] = i['context_set']
                        print("RESULT :", )
                        print("")

                    # check if this intent is contextual and applies to this user's conversation
                    if not 'context_filter' in i or \
                        (userID in context and 'context_filter' in i and i['context_filter'] == context[userID]):
                        if show_details: print ('tag:', i['tag'])
                        # a random response from the intent
                        return random.choice(i['responses'])

            return results.pop(0)


def extract_text_from_pdf(pdf_path):
    return extract_text(pdf_path)


def extract_names(text):
    return re.search('([A-Z][a-z]+ ?){1,3}', text).group(0)


def extract_phone_number(resume_text):
    phone = re.findall(PHONE_REG, resume_text)
    number = ''.join(phone[0])
    return number


def extract_Links(text):
    majorLinks={}
    GIT_REG = re.compile(r'(?i)\b((?:https?://)?(?:www\.)?gitub\.com/\S+)')
    LINKEDIN_REG = re.compile(r'(?i)\b((?:https?://)?(?:www\.)?linkedin\.com/\S+)')
    CODECHEF_REG = re.compile(r'(?i)\b((?:https?://)?(?:www\.)?codechef\.com/\S+)')
    LEETCODE_REG = re.compile(r'(?i)\b((?:https?://)?(?:www\.)?leetcode\.com/\S+)')

    linkedin_urls = re.findall(LINKEDIN_REG, text)
    majorLinks.update({"LinkedIn": linkedin_urls})

    github_urls = re.findall(GIT_REG, text)
    majorLinks.update({"GitHub": github_urls})

    codechef_urls = re.findall(CODECHEF_REG, text)
    majorLinks.update({"Codechef": codechef_urls})

    leetcode_urls = re.findall(LEETCODE_REG, text)
    majorLinks.update({"Leetcode": leetcode_urls})

    return majorLinks


def extract_skills(input_text):
    stop_words = set(nltk.corpus.stopwords.words('english'))
    word_tokens = nltk.tokenize.word_tokenize(input_text)

    # remove the stop words
    filtered_tokens = [w for w in word_tokens if w not in stop_words]

    # remove the punctuation
    filtered_tokens = [w for w in word_tokens if w.isalpha()]

    # generate bigrams and trigrams (such as artificial intelligence)
    bigrams_trigrams = list(map(' '.join, nltk.everygrams(filtered_tokens, 2, 3)))

    # we create a set to keep the results in.
    found_skills = set()

    # we search for each token in our skills database
    for token in filtered_tokens:
        if token.lower() in SKILLS_DB:
            found_skills.add(token)

    # we search for each bigram and trigram in our skills database
    for ngram in bigrams_trigrams:
        if ngram.lower() in SKILLS_DB:
            found_skills.add(ngram)

    return found_skills


# def extract_text_from_docx(docx_path):
#     txt = docx2txt.process(docx_path)
#     if txt:
#         return txt.replace('\t', ' ')
#     return None
#



app = Flask(__name__)

@app.route('/')
def index():
    return render_template('web.html')

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    file_data = file.read()
    text2 = parser.from_buffer(file_data)['content']
    # text = extract_text_from_pdf(file)
    phone_number = re.search(PHONE_REG, text2).group(0)
    name = extract_names(text2)
    email = re.findall(EMAIL_REG, text2)[0]
    # education=extract_education(text2)
    links = extract_Links(text2)
    skills = extract_skills(text2)
    return render_template('result.html', name=name, number=phone_number, email=email, skills=skills, links=links)

@app.route('/give_answer', methods=["POST"])
def give_answer():
    if request.method == "POST":
        text = request.form.get('text')
        responseANS = response(text)  # Call the give_response function
        # return render_template('web.html', Response=responseANS)   # Return the response to the client
        return responseANS
if __name__ == '__main__':
    app.run(debug=False)
