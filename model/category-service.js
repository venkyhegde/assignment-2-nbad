var itemDb = require('../utility/ItemDB');

var data = itemDb.getItems();

var categories = [];

module.exports.getCategories = function() {
    // get the category of each item
    data.forEach(function (item) {
        if(!categories.includes(item.catalogCategory)){
            categories.push(item.catalogCategory);
        }
        
    });
    return categories;
};
module.exports.getItems= function(){
    return data;
};
module.exports.getItem = function (itemCode) {
    console.log("from Service, item code"+itemCode);
    console.log("From Service:"+itemDb.getItem(itemCode))
    return itemDb.getItem(itemCode);
}