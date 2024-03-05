from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/uploadFile', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'status': 'error', 'message': 'No file part'}), 400
    
    file = request.files['file']
    
    if request.files['file'].filename=='':
        return jsonify({'status': 'error', 'message': 'No selected file'}), 400
    
    if file:
        # Testing to make sure that flask has read the file
        file.save('FileLoaded/' + file.filename)
    return jsonify({'message': 'File uploaded successfully', 'filename': file.filename}),200

    # return jsonify({'status': 'error', 'message': 'Failed to upload file'}),500

if __name__ == '__main__':
    app.run(debug=True)
