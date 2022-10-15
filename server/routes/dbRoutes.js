
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
dbRoutes.get("/directoryItems", (req, res)=>{
    db.query(
       'SELECT * FROM `directoryitems`',
       function(err, results, fields) {

        res.status(200).json(results);
        }  
    )     
});
dbRoutes.get("/bowlingballs", (req, res)=>{
    db.query(
       'SELECT * FROM `bowlingballs`',
       function(err, results, fields) {

        res.status(200).json(results);
        }  
    )     
});
dbRoutes.get("/burger", (req, res)=>{
    db.query(
       'SELECT * FROM `burger`',
       function(err, results, fields) {

        res.status(200).json(results);
        }  
    )     
});
dbRoutes.get("/cocktails", (req, res)=>{
    db.query(
       'SELECT * FROM `cocktails`',
       function(err, results, fields) {

        res.status(200).json(results);
        }  
    )     
});
dbRoutes.get("/rugs", (req, res)=>{
    db.query(
       'SELECT * FROM `rugs`',
       function(err, results, fields) {

        res.status(200).json(results);
        }  
    )     
});
dbRoutes.get("/whiskey", (req, res)=>{
    db.query(
       'SELECT * FROM `whiskey`',
       function(err, results, fields) {

        res.status(200).json(results);
        }  
    )     
});

