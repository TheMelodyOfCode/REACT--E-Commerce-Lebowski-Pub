
/*  The server/index.js is the central starting point of the application    */

/*  Here we load esm -
    babel-less, bundle-less ECMAScript module loader */

require = require("esm")(module/*, options*/)
module.exports = require("./app.js")


console.log('./index.js - started')


