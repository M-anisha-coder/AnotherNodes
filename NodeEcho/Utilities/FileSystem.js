import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

console.log(os.userInfo());
var AuthorName = os.userInfo().username;

function createFile(text){
   
    const __filename = fileURLToPath(import.meta.url);  // it will give current file url.
   
    const __dirname = path.dirname(__filename);  // folder url of current file. 
    console.log("filename "+__filename +" dirname "+__dirname);
    var filepath =path.join(__dirname, 'Note.txt');

     fs.appendFile(filepath,text+"\n", (err) =>{
        if(err){
            console.log("Failed to create Note.txt ",err);
        }
        console.log("Lovely, File created successfully at", filepath);

     });
        
}
export {
    AuthorName,
    createFile
};