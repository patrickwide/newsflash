from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
NEWS_API_KEY = "23a6c79d9ca442389e89e3b4d13270d0"

# Route to display API documentation
@app.route('/')
def index():
    return """
        <h1>News API</h1>
        <p>Welcome to the News API! This API allows you to retrieve news articles from various sources.</p>
        <h2>API Endpoints:</h2>
        <ul>
            <li><a href="/api/top-headlines">/api/top-headlines</a>: Retrieves the top headlines for the US in the general category.</li>
            <li><a href="/api/search?q=SEARCH_QUERY">/api/search?q=SEARCH_QUERY</a>: Searches for news articles containing the provided search query.</li>
        </ul>
    """

# Route to retrieve top headlines
@app.route('/api/top-headlines')
def top_headlines():
    try:
        response = requests.get(f'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey={NEWS_API_KEY}')
        return jsonify(response.json())
    except:
        return 'Error', 500

# Route to search for news articles
@app.route('/api/search')
def search_articles():
    search_query = request.args.get('q')
    if not search_query:
        return 'Error: No search query provided', 400

    try:
        response = requests.get(f'https://newsapi.org/v2/everything?q={search_query}&pageSize=15&apiKey={NEWS_API_KEY}')
        return jsonify(response.json())
    except:
        return 'Error', 500

# Start the server on port 5000 (or any other available port)
if __name__ == '__main__':
    app.run(port=5000)
