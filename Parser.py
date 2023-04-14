from pdfminer.high_level import extract_text
import nltk
import re
import re
import subprocess
from tika import parser
from nltk.util import ngrams
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
nltk.download('maxent_ne_chunker')
nltk.download('words')

PHONE_REG = re.compile(r'[\+\(]?[1-9][0-9 .\-\(\)]{8,}[0-9]')
EMAIL_REG = re.compile(r'[a-z0-9\.\-+_]+@[a-z0-9\.\-+_]+\.[a-z]+')
SKILLS_DB = [
    'machine learning',
    'data science',
    'python',
    'word',
    'excel',
    'ML'
    'English',
    'c','ros',
    'c++','cpp','leadership','dsa','python','java','management'
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


def extract_text_from_docx(docx_path):
    txt = docx2txt.process(docx_path)
    if txt:
        return txt.replace('\t', ' ')
    return None


def extract_education(input_text):
    organizations = []

    # first get all the organization names using nltk
    for sent in nltk.sent_tokenize(input_text):
        for chunk in nltk.ne_chunk(nltk.pos_tag(nltk.word_tokenize(sent))):
            if hasattr(chunk, 'label') and chunk.label() == 'ORGANIZATION':
                organizations.append(' '.join(c[0] for c in chunk.leaves()))
    tokens = nltk.word_tokenize(text)
    trigrams = ngrams(tokens, 5)
    for trigram in trigrams:
        print(trigram)

    education=[]
    for org in trigrams:
        for word in RESERVED_WORDS:
            # if org.lower().find(word) >= 0:
            education.append(org)

    return education


if __name__ == '__main__':
    file_data = parser.from_file('./AbhayShanbhag_Resume.pdf')
    text2 = file_data['content']
    print(text2)
    text=extract_text_from_pdf('./AbhayShanbhag_Resume.pdf')
    phone_number = re.search(PHONE_REG, text).group(0)
    name=extract_names(text)
    email=re.findall(EMAIL_REG, text)[0]
    # education=extract_education(text2)
    links=extract_Links(text2)
    skills=extract_skills(text2)

    print('Name:', name)
    print('Phone number:', phone_number)
    print('Email:', email)
    # print('Education:', education)
    print("Skills :",skills)
    print("Links :",links)



