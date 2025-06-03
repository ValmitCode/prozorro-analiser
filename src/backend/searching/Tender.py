import pymongo
from openai import Openai

LIMIT = 1.25 #Maximum multiplier of price before it gets suspicious

# initialising DB client

client = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = client["testik"]
mycol = mydb["tenders"]

# initialising OpenAI client

class Tender:
    def __init__(self, id):
        self.id = id
        # ALL OTHER ATTRIBUTS MUST GET BY USING REQUESTS FROM PROZORRO API
        self.content = "need to get it later automaticaly"
        self.price = 1234
    
    def add_tender_to_db(self):
        mydict = {"id": 1,"tender_id": self.id, "description": self.content}
        x = mycol.insert_one(mydict)
        if (x==None):
            print("Can't add new tender to the database")

    def analise_price_with_ai(self):
        verdict = int("1234") # response to get ChatGpt verdict or any other ai tool
        if (self.price>verdict*LIMIT):
            add_tender_to_db()
    
    def basic_analysis_comapany_with_youscore(self):
        pass
    
    def deep_analysis_company_with_youscore(self):
        pass        
    
    def tender_processing(self):
        if (mycol.findOne({ "tender_id" : self.id})!=None):
            analise_content()

