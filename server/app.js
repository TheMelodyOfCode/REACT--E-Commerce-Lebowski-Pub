console.log(' ./app.js - started with those dependencies: ESM , MySQL, EXPRESS');

/*  IMPORTANT - REACT INFO !!
    to use react in combination with the server you need to add the 
    propert proxy to the react package.json file
    "proxy": "http://localhost:3001"    	                */

/* to import the startScript configuration  */
import {server, port} from "./startScript";

/* Route imports */
import {dbRoutes} from "./routes/dbRoutes.js"


// use route imports with prefix
server.use("/db", dbRoutes);


// Redirects for route from REACT
server.get("/directoryItems", (req, res)=>{
        res.redirect("/db/directoryItems")
});
server.get("/bowlingballs", (req, res)=>{
        res.redirect("/db/bowlingballs")
});
server.get("/burger", (req, res)=>{
        res.redirect("/db/burger")
});
server.get("/cocktails", (req, res)=>{
        res.redirect("/db/cocktails")
});
server.get("/rugs", (req, res)=>{
        res.redirect("/db/rugs")
});
server.get("/whiskey", (req, res)=>{
        res.redirect("/db/whiskey")
});



// 404 Handler
server.use((req, res) => {

    res.status(404).json(
    {
            status: "Die Seite existiert nicht! 404 Error"
    })
})

/*  get the server and listen on port 3001 as declared in server/startScript.js 
    listen ahs to be on the end of the script - always!*/
server.listen(port, () => {
    console.log(`Web-Server runs on Port: ${port} , well done!`);
})