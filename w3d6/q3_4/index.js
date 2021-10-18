const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));

let products = [
    {
        id: 1,
        name: "Chair",
        price: 100,
        image: "https://ae01.alicdn.com/kf/HTB16godoYSYBuNjSspfq6AZCpXa6/Popular-Modern-Design-Classic-famous-Plastic-seat-and-Solid-Wooden-Dining-Arm-Chair-Loft-meeting-leisure.jpg"
    },
    {
        id: 2,
        name: "Table",
        price: 200,
        image: "https://st3.depositphotos.com/13194036/16122/i/1600/depositphotos_161222738-stock-photo-chair-with-white-top-and.jpg"
    },
    {
        id: 3,
        name: "Bed",
        price: 300,
        image: "https://st3.depositphotos.com/13194036/16122/i/1600/depositphotos_161222738-stock-photo-chair-with-white-top-and.jpg"
    },
    {
        id: 4,
        name: "Sofa",
        price: 900,
        image: "https://st3.depositphotos.com/13194036/16122/i/1600/depositphotos_161222738-stock-photo-chair-with-white-top-and.jpg"
    }
];

let shoppingCart = {};

app.get('/', (req, res) => {
    res.render("shop", {
        products: products,
    });
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(p => p.id == id);
    res.render("product", {
        product: product,
    });
});

app.post('/addToCart', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    if (!shoppingCart[name]) {
        shoppingCart[name] = { name: name, price: price, quantity: 1 }
    } else {
        const quantity = shoppingCart[name].quantity
        shoppingCart[name].quantity = quantity + 1;
        shoppingCart[name].price = (quantity + 1) * price;
    }

    res.redirect(`/shoppingcart`);
});

app.get('/shoppingcart', (req, res) => {
    res.render("shoppingcart", {
        shoppingCart: shoppingCart,
    });
});

app.listen(3000);