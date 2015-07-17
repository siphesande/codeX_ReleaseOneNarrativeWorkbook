
  var fs  = require("fs"); 
module.exports = function(filePath){
  
  var findProducts = function(filePath){

    var productList =[];
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
          productList.push(currentIterm);
          productMap[currentIterm]= 0;

        };
         productMap[currentIterm]= productMap[currentIterm] + Number(NumberOfIterms);
        
    });

           
            //callback(null, productMap);

            return productList;
    }
  
  
this.productNames = function(callback){
var files = findProducts(filePath)

  
        callback(null, files);
  }

  this.productsSold = function(callback){
  var files = findProducts(filePath)

        callback(null, productMap);
    }


    } 



