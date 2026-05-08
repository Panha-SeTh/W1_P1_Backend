import fs from "node:fs/promises";
// import fs from "fs";

// const filePath = "./hello.txt";
// // Write to a file (synchronously)
// fs.writeFileSync(filePath, "Hello, Node.js beginner!");
// // Read the file (synchronously)
// const content = fs.readFileSync(filePath, "utf8");
// console.log("File content:", content);

// async version

const filePath = "./hello.txt";
async function handleFile() {
    try {
        // Write to a file (asynchronously)
        await fs.writeFile(filePath, "Hello, Node.js beginner!");
        console.log("File written successfully.");

        // Read the file (asynchronously)
        const content = await fs.readFile(filePath, "utf8");
        console.log("File content:", content);
    } catch (err) {
        console.error("Error processing file:", err);
    }
}

handleFile();

