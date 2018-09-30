var repository = require('../model/repository');

// get the data from repository
var data = repository.item;

module.exports.getItems = function () {
    return data;
};

module.exports.getItem = function (itemId) {
    console.log("from DB, Item code :"+itemId)
       for(var i=0; i<data.length; i++){
           var itemCode = data.itemCode;
           console.log("Data"+data[i].itemCode);
           if(parseInt(data[i].itemCode) == itemId){
               return data[i];
           }
           // console.log("Data"+i);

       }
};



