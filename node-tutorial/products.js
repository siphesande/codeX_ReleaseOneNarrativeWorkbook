
var fs  = require("fs"); 

  module.exports = function(filePath){
    this.productNames = function(callback){
    var productList = [];
    var fileContent = fs.readFileSync(filePath, "utf8");
    var rows = fileContent.split('\n');
       
      
      var productMap = {};

          rows.forEach(function(row) {
      var productName = row.split(',')[1];

       if(productMap[productName]=== undefined){
         productList.push(productName);
         productMap[productName]=0;
       } 

    });

        console.log(productList)
        callback(null, productList);
  }


    this.productsSold = function(callback){
      var  itermsSold = [];
      var productMap = {};
      var fileContent = fs.readFileSync(filePath, "utf8");
      // console.log(fileContent);
      var iterms = fileContent.split("\n"); 
     
      

      iterms.forEach(function(iterm) {

      var hold = iterm.split(',');

      var currentIterm = hold[1];
      var NumberOfIterms = hold[2];

          // console.log("holds :" + JSON.stringify(holds));

        if(productMap[currentIterm] === undefined){
          productMap[currentIterm]= 0;
        }
         productMap[currentIterm]= productMap[currentIterm] + Number(NumberOfIterms);
        
    });

            console.log(JSON.stringify(productMap));
            callback(null, productMap);
    }

}
      