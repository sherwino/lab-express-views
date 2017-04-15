const express = require ('express');

const expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(express.static('public'));

app.use(expressLayouts);




app.set('views', 'views');
app.set('view engine', 'ejs');

app.set('layout', 'layouts/main-layout.ejs');

app.locals.title = 'Colors';

app.get('/', (req, res, next) => {
  res.render('home.ejs');
});

app.get('/about', (req, res, next) =>{
  res.render('about.ejs');
});

app.get('/colors', (req, res, next) =>{
  res.render('colors.ejs');
});

//the array doesn't have to be here
const citiesList = [ 'Paris', 'Ho Chi Minh City', 'Madrid', 'Warsaw', 'Moscow', 'Toronto' ];

app.get('/cities', (req, res, next) =>{
  res.render('cities-view.ejs',
  { cities: citiesList,
    name: 'SherWino',
    age: 20
  } //arguments or variables being passed to the squids in the .ejs files
  );
});

const foodList = [
  { name: "Zuuk", img: "http://www.miamicitysocial.com/media/k2/items/cache/74f207603b94798d512b9bd8126f9efa_XL.jpg"},
  { name: "La Moon", img: "http://images1.miaminewtimes.com/imager/little-besides-the-menu-has-changed/u/original/6589966/lamoonoutside.jpg"},
  { name: "Le Sandwicherie", img: "https://media.timeout.com/images/101506627/630/472/image.jpg"},
  { name: "Burgers n Beer", img: "http://tastychomps.com/wp-content/uploads/2014/05/IMG_4886-620x465.jpg"},
  { name: "Publix", img: "http://www.wolfbergalvarez.com/projects/images/publixmbv1.jpg"}
];

app.get('/food', (req, res, next) =>{
  res.render('food-view.ejs',
  { foodList: foodList } //arguments or variables being passed to the squids in the .ejs files
  );
});

app.listen(3000);
