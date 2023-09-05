const fs = require('fs').promises;
const fileName = 'myfile.txt';

const updateFile = async (fileName, fileContent) => {
    //Write your code here to overwrite the file content
    //Don't change function name
    try {
    // Read the existing content of the file
    const existingContent = await fs.readFile(fileName, "utf8");

    // Concatenate the existing content with the new content to be added
    const updatedContent = existingContent + fileContent;

    // Write the updated content back to the file
    await fs.writeFile(fileName, updatedContent, "utf8");

    return updatedContent;
  } catch (err) {
    // If there's an error, return the error message
    return err.message;
  }
    
};


module.exports = updateFile;
