const fs = require("fs");
const pdf = require("pdf-parse");

async function extractPdfToTxt() {
  try {
    const dataBuffer = fs.readFileSync("./course.pdf");
    const data = await pdf(dataBuffer);

    const text = (data.text || "").replace(/\s+/g, " ").trim();

    fs.writeFileSync("./course.txt", text, "utf-8");

    console.log("Texto extraído desde course.pdf");
    console.log("Longitud del texto:", text.length);
  } catch (error) {
    console.error("Error extrayendo el PDF:", error.message);
  }
}

extractPdfToTxt();