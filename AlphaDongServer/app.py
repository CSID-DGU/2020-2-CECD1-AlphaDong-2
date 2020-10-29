from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/")
def hello():
    return jsonify({'method':request.method})

@app.route("/detect", methods=['POST'])
def detect():
    if request.method == 'POST':
        # file = request.files['file']
        # img_bytes = file.read()
        return jsonify({'method':request.method})
    else:
        return jsonify({'method':request.method})

if __name__=='__main__':
    app.run(debug=True,host='0.0.0.0')