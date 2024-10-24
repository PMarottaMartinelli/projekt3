
const express = require('express'); 
const path = require('path');	      
const app = express();           
const recipyroute = require('./routes/recipyroute');

//pug wird als View-Engine festgelegt 
app.set(`view engine`, `pug`);
// eslint-disable-next-line no-undef
app.set(`views`, path.join(__dirname, `views`));
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, '../public')));

/**
 * @appget ruft die Startseite auf
*/
app.get('/', async (req, res) => {
    res.render('index')   
});
app.use('/recipy', recipyroute);


console.log ("test")
const port = (process.env.PORT || 3200);
//npm zeigt an, welcher Port ausgewählt ist
app.listen(port, () => {
    console.log(`Server listening on Port ${port}`);

});