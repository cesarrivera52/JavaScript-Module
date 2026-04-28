const fs = require ("fs"); //file system library
nombreDelArchivo = "message0.txt";

//fs.writeFile(nombreDelArchivo, "ABCDEFGIJKLMNOPQRSTVWXYZ", (err) => {
  //  if (err) throw err;
    //console.log("File created. :)\n");
//});
 

fs.readFile('./'+nombreDelArchivo, "utf-8", (err, data) => {
  if (err) throw err;
  console.log('The file content is the following:\n\n'+data);
});

