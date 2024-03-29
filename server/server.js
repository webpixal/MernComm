const express = require("express");
const cors = require('cors')
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const User = require('./Model/Users');
const Jwt = require('jsonwebtoken');

const jwtKey = 'e-com';


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
});

/* Auth Controller*/
app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({user}, jwtKey, {expiresIn:"2h"},(err,token)=>{
                if(err){
                    resp.send("Something went wrong")  
                }
                resp.send({user,auth:token})
            })
        } else {
            resp.send({ result: "No User found" })
        }
    } else {
        resp.send({ result: "No Data In Server" })
    }
});

/* Catagory Routes */
const category_route = require("./Routes/Category");
app.use(category_route)

const middleware = (req, res, next) => {
    console.log(`Hello my Middleware`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello world from the server app.js`);
});

app.get('/about', middleware, (req, res) => {
    console.log(`Hello my About`);
    res.send(`Hello About world from the server`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello Contact world from the server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});







const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
            .bold
    );
})

