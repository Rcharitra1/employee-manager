require('dotenv').config();
/*
    Node server
    Common js
    Browser has no idea what they are, they are not supported in browser
    require -- importing functionality
    module.exports--- export functionality const, fun
    , object, arrays


    Front End

    Use node_modules npm install xxxx there not supported by the browser Bundler
    parcel builder
    package.json parcel ./src/index.html
                 import nodeModules ====> js the browser understands
    Web server
        --> Javascript node
        --> listen http request
*/

const express = require('express');

const path = require('path');

const app = express();






const options = {
    dotfiles: 'ignore',
    extensions: ['htm', 'html']
    }

    const port = process.env.PORT || 3500;

//setting up the static files to server http://localhost:3500/file.html
//req ---> url http://localhost:3000/endpoint
//endpoint (.ext ignored index.html !=null)

app.use(express.static(path.join(__dirname, '../client'),options));

// app.use(express.static(__dirname, '../public/signup.html'))

/**
 *  /root folder localhost:3500
 */


app.get('/', (req, res, next)=> {
    res.send("Text3")
})

//Middle ware  tryies to match the endpoint

app.get('/api/v1/employees', (req, res)=>{
    res.json({Employee:'Employee page'});
})

//Middle ware 404 tries as the last middleware

app.use((req, res)=>{
    res.sendFile(path.join(__dirname, '../client/404.html'))
});

app.listen(port, ()=> {console.log(`Server on ${port}`)
})









