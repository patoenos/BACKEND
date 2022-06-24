const express = require("express")
const { engine } = require('express-handlebars');
const path = require("path")
const app = express();
const port = 8080;
const routesApi = require("./routes/rutasApi").router;
const routesView = require("./routes/rutasView").router;

//configuracion del handlebars ojo
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './views/layout/layout.hbs'),
    layoutsDir: path.join(__dirname, './views/layout'),
    partialsDir: path.join(__dirname, './views/partials')    
}));


app.set('views', './views');

//esto alterna entre handlebars, pug y ejs
app.set('view engine', 'ejs');

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//ruta archivos estáticos
app.use(express.static(path.join(__dirname, "./public")))

//Lo principal
app.use("/", routesView)
app.use("/api/productos", routesApi)

//Validaciones
app.use((req, res) => {
    res.status(404).render("404");
})

app.use(function (err, req, res, next) {
    res.status(500).json({
        error: err.message,
    });
});

app.listen(port, (err) => {
    if (!err) {
        console.log(`El servidor se inicio en el puerto ${port}`)
    } else {
        console.log(`Hubo un error al iniciar el servidor: `, err)
    }
})