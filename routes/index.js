var express = require('express');
var router = express.Router();
var categoryService = require('../model/category-service');
var breadcrumbs = require('express-breadcrumb');
var appUtil = require('../utility/appUtil');

/* GET home page. */
router.get('/', breadcrumbs.Middleware(), function(req, res, next) {

    var page= {
        title:'Home',
        path: req.url
    }
    req.breadcrumbs = appUtil.cleanUrl(req.breadcrumbs);
  res.render('index', { title: page, breadcrumbs: req.breadcrumbs });
});


router.get('/categories',breadcrumbs.Middleware(), function(req, res, next) {

    var categories = categoryService.getCategories();
    var itemData = categoryService.getItems();
    var data= {
        title:'Categories',
        path: req.url,
        categories: categories,
        items: itemData
    }

    console.log("req.breadcrumbs:"+JSON.stringify(req.breadcrumbs))
    req.breadcrumbs = appUtil.cleanUrl(req.breadcrumbs);
    console.log("req.breadcrumbs:"+JSON.stringify(req.breadcrumbs))
    res.render('category', { data: data , breadcrumbs: req.breadcrumbs});
});

router.get('/categories/:categoryName', breadcrumbs.Middleware(), function (req,res) {
    // get the category name
    var categories = [];
    categories.push(req.params.categoryName);
    var itemData = categoryService.getItems();

    var data= {
        title:'Categories',
        path: req.url,
        categories: categories,
        items: itemData
    }
    req.breadcrumbs = appUtil.cleanUrl(req.breadcrumbs);
    res.render('category', { data: data, breadcrumbs: req.breadcrumbs });
})

router.get('/contact', breadcrumbs.Middleware(), function(req, res, next) {

    var page= {
        title:'Contact Us',
        path: req.url
    }
    req.breadcrumbs = appUtil.cleanUrl(req.breadcrumbs);
    res.render('contact', {title:page, breadcrumbs: req.breadcrumbs});
});

router.get('/about',breadcrumbs.Middleware(), function(req, res, next) {

    var page= {
        title:'About Us',
        path: req.url
    }
    req.breadcrumbs = appUtil.cleanUrl(req.breadcrumbs);
    res.render('about', {title:page, breadcrumbs: req.breadcrumbs});
});



router.get('/categories/item/:itemCode', breadcrumbs.Middleware(), function(req, res, next) {
    var itemCode = req.params.itemCode;
    console.log("Item Code:"+itemCode);

    var item = categoryService.getItem(itemCode);
    console.log(item);
    var data= {
        title:'Item',
        path: req.url,
        item: item
    }
    req.breadcrumbs = appUtil.cleanUrl(req.breadcrumbs);
    res.render('item', { data: data, breadcrumbs: req.breadcrumbs});
});
router.get('/mybooks', breadcrumbs.Middleware(), function(req, res, next) {

    var page= {
        title:'My Books',
        path: req.url
    }

    req.breadcrumbs = appUtil.cleanUrl(req.breadcrumbs);
    res.render('mybooks', {title:'My Books', breadcrumbs: req.breadcrumbs});
});

router.get('/swapItem', breadcrumbs.Middleware(), function (req, res) {
    var page = {
        title:'Swap Item',
        path:req.url
    }

    req.breadcrumbs = appUtil.cleanUrl(req.breadcrumbs);
    res.render('swap',{title: page, breadcrumbs: req.breadcrumbs});
});

router.get('/mySwap', breadcrumbs.Middleware(), function (req, res) {
    var page = {
        title:'My Swaps',
        path:req.url
    }

    req.breadcrumbs = appUtil.cleanUrl(req.breadcrumbs);
    res.render('mySwaps',{title: page, breadcrumbs: req.breadcrumbs});
});
module.exports = router;
