```
App (top-level component)
├── Header: includes the logo and navigation links
├── SearchBar: allows users to search for specific topics, keywords, or authors
├── NewsList: displays a list of news stories based on the user's search/filter options
│   ├── NewsItem: displays a summary of a single news story, including its title, author, date, and content preview
│   └── NewsPage: displays the full text of a selected news story, including its title, author, date, and image
│       ├── Comments: displays the comments for a news story and allows users to add new comments
│       ├── BookmarkButton: allows users to bookmark/save a news story
│       └── ShareButtons: allows users to share a news story on social media or via email
└── FilterPanel: allows users to further customize their news feed by specifying which topics, sources, or types of content they want to see or exclude
```
