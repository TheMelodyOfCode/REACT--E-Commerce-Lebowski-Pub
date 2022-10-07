
/*  this is how to import express (or any other module) WITHOUT esm 
    const express = require('express')
    const app = express()                       */

/* Since we have installed esm we can import express (or any othe modul) this way  */
import express from "express";

/*  This runs the server with express on port 3001 
    To have our server availible in app.js we need to export it
    and import it in server/app.js              */
export let server = express();
export let port = 3001;

