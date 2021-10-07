from flask import Flask, render_template, request
from flask_cors import CORS, cross_origin
import pickle
from sklearn.feature_extraction.text import CountVectorizer
cv = CountVectorizer(max_features=2000)

with open("model_pickle", "rb") as f:
  mp = pickle.load(f)

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route("/", methods=["GET"])
def index_get():
    return render_template("base.html")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    payload = [data['data']]
    data_f = cv.fit_transform(payload).toarray()
    data_f.resize(2000)
    output = mp.predict([data_f])
    
    if output[0][0] == 1:
        return("Computer Science")

    if output[0][1] == 1:
        return("Physics")

    if output[0][2] == 1:
        return("Mathematics")

    if output[0][3] == 1:
        return("Statistics")

    if output[0][4] == 1:
        return("Biology")

    if output[0][5] == 1:
        return("Finance")

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=7000)