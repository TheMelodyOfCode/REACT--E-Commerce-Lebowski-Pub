
/*  Reminder: We work with the modul express as webserver
    and esm Ecmascript to be able to use import and export etc...... */
import express from "express";

export let dbRoutes = express.Router();

import {db} from "../database/dbConnection.js";



dbRoutes.get("/", (req, res)=>{
    console.log(req.query);
    res.send("GET Profile");
    
});

/* We have set a prefix in the app.js*/
dbRoutes.get("/categories", (req, res)=>{
    db.query(
       'SELECT * FROM `categories`',
       function(err, results, fields) {

        res.status(200).json(results);
        }  
    )     
});

