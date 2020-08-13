from flask import Flask, redirect, send_from_directory, send_file, make_response, request
from pymongo import MongoClient
from bson.json_util import loads, dumps
import functools, os

client = MongoClient() # localhost:<default port>
comments = client.test.comments # TODO: Error handling

app = Flask(__name__, static_url_path='', static_folder='frontend/build')

def enable_cors(func):
  @functools.wraps(func)
  def wrapper(*args, **kwargs):
    res = make_response(func(*args, **kwargs))
    res.headers['Access-Control-Allow-Origin'] = '*' # Enable CORS
    res.headers['Access-Control-Allow-Headers'] = 'range' # Allow range header
    return res
  return wrapper

@app.route('/comments')
@enable_cors
def test():
  return dumps(comments.find({}))

@app.route('/')
@app.route('/home')
def index():
  return redirect('/index.html')

@app.route('/<path:filename>', methods=['OPTIONS', 'GET'])
@enable_cors
def video_stream(filename):
  print(filename)
  if request.method == 'OPTIONS':
    return '', 204
  else:
    if not os.path.isfile('public/' + filename):
      return 'File Not Found', 404
    return send_file('public/' + filename, conditional=True)
