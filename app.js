const express = required('express');
const bodyParser = required('body-parser');
const ejs = required('ejs');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));




app.listen(3000, ()=> console.log("Server started on port 3000."));