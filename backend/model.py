#Loading NLTK
import nltk
nltk.download ('stopwords')
nltk.download ('punkt')
#  tokenize sentence
from nltk.tokenize import sent_tokenize
text="""Hello Mr. Smith, how are you doing today? The weather is great, and city is awesome.
The sky is pinkish-blue. You shouldn't eat cardboard"""
tokenized_text=sent_tokenize(text)
# Word tokenization
from nltk.tokenize import word_tokenize
tokenized_word=word_tokenize(text)
tokenized_sent = tokenized_word
# stopwords
from nltk.corpus import stopwords
stop_words=set(stopwords.words("english"))
# Remove stopwords
filtered_sent=[]
for w in tokenized_sent:
    if w not in stop_words:
        filtered_sent.append(w)

# Stemming and Lemmanization
# Stemming
from nltk.stem import PorterStemmer
from nltk.tokenize import sent_tokenize, word_tokenize

ps = PorterStemmer()

stemmed_words=[]
for w in filtered_sent:
    stemmed_words.append(ps.stem(w))

# Classify 

# Feature Generation using Bag of Words
from sklearn.feature_extraction.text import CountVectorizer
from nltk.tokenize import RegexpTokenizer
#tokenizer to remove unwanted elements from out data like symbols and numbers
token = RegexpTokenizer(r'[a-zA-Z0-9]+')
cv = CountVectorizer(lowercase=True,stop_words='english',ngram_range = (1,1),tokenizer = token.tokenize)
text_counts= cv.fit_transform(stemmed_words)