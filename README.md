# 📝 Intro Node Notes CLI

A simple Node.js command-line and web app for managing notes with tags.

## 🚀 Features

- ✍️ Add new notes with tags
- 📋 List all notes
- 🔍 Search notes by content
- 🗑️ Remove notes by ID
- 🧹 Remove all notes
- 🌐 View notes in a web browser

## ⚡ Installation

1. **Clone the repo:**
   ```sh
   git clone https://github.com/your-username/intro-node.git
   cd intro-node
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

## 🛠️ Usage

### CLI Commands

- **Add a note:**
  ```sh
  node index.js new "Your note content" --tags tag1,tag2
  ```
- **List all notes:**
  ```sh
  node index.js all
  ```
- **Find notes:**
  ```sh
  node index.js find "search term"
  ```
- **Remove a note:**
  ```sh
  node index.js remove <id>
  ```
- **Remove all notes:**
  ```sh
  node index.js clean
  ```
- **View notes in browser:**
  ```sh
  node index.js web [port]
  ```
  👉 Then open [`http://localhost:5000`](http://localhost:5000) (or your chosen port).

## 📁 Project Structure

```
src/
├── notes.js        # Note management logic
├── command.js      # CLI commands
├── server.js       # Web server
├── template.html   # HTML template for web view
└── style.css       # CSS for web view
```

## 🙌 Contributing

Pull requests are welcome! Feel free to open issues or suggest features.

## 📄 License

MIT

---
