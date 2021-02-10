from flask import Flask, jsonify, request
import random

app = Flask(__name__)

test_output = {
    "key":1,
    "img_url" : "http://placekitten.com/400/400",
    "vin_num" : "WDDLJ6FB3HA203319a"
}
def generateTestData(num):
    result = []
    for i in range(0, num):
        result.append({
            "key": i,    
            "img_url" : f'http://placekitten.com/{random.randrange(400,401+i*10)}/{random.randrange(400,401+i*10)}',
            "vin_num" : f'WDDLJ6FB3HA20{random.randrange(1000,9999)}a'
        })
    print(result)
    return result;

# 테스트
@app.route("/")
def hello():
    return jsonify(test_output)

@app.route("/detect", methods=['POST'])
def detect():
    if request.method == 'POST':
        file = request.files['file']
        img_bytes = file.read()
        return jsonify(img_bytes)
    else:
        return jsonify({'method':request.method})


# /data?page=1
@app.route("/data", methods=['GET'])
def getData():
    page = int(request.args.get('page', default=1))
    per_page = int(request.args.get('per_page', default=20))
    sort_by = request.args.get('sort', default="recent")

    test_result = generateTestData(page*per_page)

    return jsonify({'page':page, 'data': test_result})
    

if __name__=='__main__':
    app.run(debug=True, port=5001,host='0.0.0.0')