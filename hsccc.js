const fs = require("fs");
const path = require("path");
fileName = "Screenshot 2024-12-29 173634.png";
const Tesseract = require("tesseract.js");

function readFileFromPublicDir(fileName) {
  const filePath = path.join(__dirname, "public", fileName);
  console.log(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    console.log("File content:", data);
  });
}

readFileFromPublicDir("Screenshot 2024-12-29 173634.png");

async function extractTextFromImage(imagePath) {
    try {
      console.log("Processing image for OCR:", imagePath);
  
      const result = await Tesseract.recognize(imagePath, "eng", {
        logger: (info) => console.log(info),
      });
  
      console.log("Extracted Text:", result.data.text);
  
      const marks = extractMarks(result.data.text);
      console.log("Extracted Marks:", marks);
  
      return marks;
    } catch (error) {
      console.error("Error during OCR:", error);
      throw error;
    }
  }
  
  extractTextFromImage(
    "C:/Users/itach/OneDrive/Desktop/web-projects/e-governance software solution/backend/public/Screenshot 2024-12-18 162642.png"
  );


function extractMarks(text) {
    const marksRegex = /\b\d{1,3}\/\d{1,3}\b/g;
    const marks = text.match(marksRegex) || [];
    return marks.map((mark) => {
      const [obtained, total] = mark.split('/').map(Number);
      return { obtained, total };
    });
  }
  