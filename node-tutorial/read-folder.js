
var fs  = require("fs"); 

var findFiles = function (folder) {
   //read each file in the folder
   // Synchronous readdir(3). Returns an array of filenames excluding '.' and '..'. 
  var files = fs.readdirSync(folder);
  var productList = []; 

  files.forEach(function (fileName) { 
    //how do I see wha tis inside of a file? 
    //Synchronous version of fs.readFile. Returns the contents of the filename. 
    var fileContent = fs.readFileSync(folder + "/" + fileName, 'utf8'); 
    var products = fileContent.split("\n"); 
     
    products.forEach(function(product){ 
      console.log(product); 
      productList.push(product); 
    }); 
    
  });
  return productList;

};
//expose 2 methods with parameters:
exports.linesInFiles = function(folderName){ 

   var productList = findFiles(folderName);

    return productList; 
};
  //callback function is provided that the function that is called use to communicate back to the calling function.
exports.linesInFilesAsync = function(folderName, callback) {
       var productList = findFiles(folderName);
 
        callback(null, productList);//callback is an alternative way to return results to the calling process
};
