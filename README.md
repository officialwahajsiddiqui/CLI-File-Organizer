# CLI File Organizer

A powerful command-line tool to automatically organize files by their extensions into dedicated folders.

## 🚀 Features

- **Automatic File Organization**: Groups files by their extensions into separate folders
- **Smart Folder Naming**: Creates folders with the pattern `myfolder_[extension]`
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Real-time Feedback**: Shows progress and results with colored output
- **Performance Tracking**: Displays execution time and statistics
- **Error Handling**: Graceful error handling with informative messages

## 📦 Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🛠️ Dependencies

This project requires the following Node.js packages:
- `commander` - CLI argument parsing
- `chalk` - Colored terminal output

## 📖 Usage

### Basic Usage
Organize files in the current directory:
```bash
node organize.js
```

### Specify Directory
Organize files in a specific directory:
```bash
node organize.js --dir /path/to/your/folder
# or
node organize.js -d /path/to/your/folder
```

## 🔧 How It Works

1. **Directory Validation**: Checks if the specified directory exists
2. **File Scanning**: Reads all files in the target directory
3. **Extension Analysis**: Identifies unique file extensions
4. **Folder Creation**: Creates folders for each unique extension (e.g., `myfolder_txt`, `myfolder_pdf`)
5. **File Movement**: Moves files to their corresponding extension folders
6. **Progress Reporting**: Shows real-time progress with colored output
7. **Summary**: Displays statistics including files moved, folders created, and execution time

## 📊 Example Output

```
📂 Organizing files in: /path/to/folder
✅ Moved: document.pdf → /path/to/folder/myfolder_pdf
✅ Moved: image.jpg → /path/to/folder/myfolder_jpg
✅ Moved: script.js → /path/to/folder/myfolder_js

📊 Summary:
- Total files moved: 3
- Unique folders created: 3
- Time taken: 0.05 seconds
```

## ⚠️ Important Notes

- **File Safety**: The tool moves files, not copies them. Ensure you have backups if needed
- **Existing Folders**: If folders with the same name already exist, files will be moved into them
- **Hidden Files**: The tool processes all files, including hidden ones
- **Subdirectories**: Currently organizes only files in the specified directory (not subdirectories)

## 🐛 Error Handling

The tool handles various error scenarios:
- **Directory Not Found**: Shows error and exits gracefully
- **Permission Issues**: Displays appropriate error messages
- **Empty Directory**: Warns if no files are found to organize

## 🔧 Customization

To modify the folder naming pattern, edit line 42 in `organize.js`:
```javascript
const folderPath = path.join(basePath, `myfolder_${ext}`);
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository. 