# 📝 Node Notes CLI

A simple Node.js command-line and web app for managing notes with tags.

## 🚀 Features

- ✍️ Add new notes with tags
- 📋 List all notes
- 🔍 Search notes by content
- 🗑️ Remove notes by ID
- 🧹 Remove all notes
- 🌐 View notes in a web browser
- 🧪 Unit tests with Jest

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

You can run commands using either `node index.js` or the shortcut `note` (after `npm link`):

- **Add a note:**
  ```sh
  node index.js new "Your note content" --tags tag1,tag2
  # or
  note new "Your note content" --tags tag1,tag2
  ```
- **List all notes:**
  ```sh
  node index.js all
  # or
  note all
  ```
- **Find notes:**
  ```sh
  node index.js find "search term"
  # or
  note find "search term"
  ```
- **Remove a note:**
  ```sh
  node index.js remove <id>
  # or
  note remove <id>
  ```
- **Remove all notes:**
  ```sh
  node index.js clean
  # or
  note clean
  ```
- **View notes in browser:**
  ```sh
  node index.js web [port]
  # or
  note web [port]
  ```
  👉 Then open [`http://localhost:5000`](http://localhost:5000) (or your chosen port).

### 🧪 Run Tests

This project uses [Jest](https://jestjs.io/) for unit testing:

```sh
npm test
```

## 📁 Project Structure

```
src/
├── notes.js        # Note management logic
├── command.js      # CLI commands
├── server.js       # Web server
├── template.html   # HTML template for web view
└── style.css       # CSS for web view
```

## 📦 Dependencies

- [yargs](https://www.npmjs.com/package/yargs) — CLI argument parser
- [open](https://www.npmjs.com/package/open) — Opens URLs in browser
- [jest](https://www.npmjs.com/package/jest) — Unit testing (dev dependency)

## 🙌 Contributing

Pull requests are welcome! Feel free to open issues or suggest features.

## 📄 License

ISC

---

> Made with ❤️ using Node.js, yargs, and Jest
