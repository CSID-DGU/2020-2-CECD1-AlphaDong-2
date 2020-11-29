from flask import Flask, jsonify, request

app = Flask(__name__)

test_output = {
    "key":1,
    "img_url" : "http://placekitten.com/400/400",
    "vin_num" : "WDDLJ6FB3HA203319a"
}

@app.route("/")
def hello():
    return jsonify(test_output)

@app.route("/detect", methods=['POST'])
def detect():
    if request.method == 'POST':
        # file = request.files['file']
        # img_bytes = file.read()
        return jsonify(test_output)
    else:
        return jsonify({'method':request.method})


# /data?page=1
@app.route("/data", methods=['GET'])
def getData():
    page = int(request.args.get('page', default=1))
    per_page = int(request.args.get('per_page', default=20))
    sort_by = request.args.get('sort', default="recent")


    return jsonify({'page':page, 'data': [test_output]*per_page})
    

if __name__=='__main__':
    app.run(debug=True, port=5001,host='0.0.0.0')