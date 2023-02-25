//Requires
const express = require('express')
const app = express()
const handlebars = require("express-handlebars")
const path = require("path")




//Configuraçoes 
    //Handlebars
    app.engine('handlebars', handlebars.engine());
    app.set('view engine', 'handlebars');
    app.set('views', './views');
    
    //Midleware
    // app.use((req, res, next) => {
    //     res.locals.success_msg = req.flash("success_msg")
    //     res.locals.error_msg = req.flash("error_msg")
    //     res.locals.error = req.flash("error")
    //     next()
    // })

    //Config Path
    app.use(express.static(path.join(__dirname, '/public')));




//Rotas
app.get('/', (req, res, next) => {
    res.render('home');
});
app.get("/sobre" , (req,res) => {
    res.render("sobre")
})

















//Servidor
const PORT = 8080 ;
app.listen(PORT, () => {
   console.log("Servidor rodando")
})