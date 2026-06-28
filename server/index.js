const http = require("http");
const fs = require("fs");
const url = require("url");

const mserver = http.createServer((req , res) => {
    if (req.url === "/favicon.ico") return res.end();
    const log = `${new Date()}: ${req.url} New req rec.\n`
    const myurl = url.parse(req.url, true);
    console.log(myurl);
    fs.appendFile("log.txt" , log, (err, data) =>{
        const qp = myurl.query;
        switch(myurl.pathname){
            case '/': res.end("Home Page")
            break
            case '/about': 
            res.end(` About Page \n Your Name is: ${qp.myname} \n Your id is: ${qp.user_id} \n You search for ${qp.search}`)
            break
            case '/search' :
                res.end(`Here is your results for ${qp.search}` );
            break
            case '/service': res.end('Service')
            break
            case '/contact': res.end('Contact Us')
            break
            default:
                res.end('404 Not Found')
        }
        // res.end('Hello from server. HOw are you? 1 more');
    })
    
});

mserver.listen(9000, () => console.log("Server Started!"));