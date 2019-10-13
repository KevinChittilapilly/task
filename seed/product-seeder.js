var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shop',{useMongoClient:true});

var products = [
    new Product({
        imagePath: 'https://imgd.aeplcdn.com/1200x900/cw/ec/32940/Hyundai-Santro-Exterior-138747.jpg?wm=0',
        title: 'Santro',
        description: '4 seater. Perfect for family',
        price: 10000,
        itemCount:10
    }),
    new Product({
        imagePath: 'https://www.motorbeam.com/wp-content/uploads/2018-Hyundai-Elite-i20-Review-1.jpg',
        title: 'I20',
        description: '4 seater with good mileage',
        price: 20000,
        itemCount:10
    }),
    new Product({
        imagePath: 'https://5.imimg.com/data5/AF/KA/GLADMIN-16305729/hyundai-i10-sportz-at-500x500.jpg',
        title: 'I10',
        description: '4 seater',
        price: 4000,
        itemCount:1
    }),
    new Product({
        imagePath: 'http://www.vacationenjoyindia.com/images/sort/Toyota%20Innova%20Van%20(6%20Seater)/toyota-innova-6-seater-van-Toyota%20Innova%20Muv%20Car%20booking.jpg',
        title: 'Innova',
        description: '6 seater',
        price: 50000,
        itemCount:1
    }),
    new Product({
        imagePath: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FScorpioModelImage.jpg&h=300&w=450&q=100',
        title: 'Scorpia',
        description: '9 seater',
        price: 90000,
        itemCount:2
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    
    mongoose.disconnect();
}