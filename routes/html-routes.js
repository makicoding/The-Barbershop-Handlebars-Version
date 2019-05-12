// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.handlebars
  app.get("/", function(req, res) {
    res.render("index");
    // res.sendFile(path.join(__dirname, "../public/index.html"));    // This is for non-handlebars version
  });

  // makeReservation route loads makerReservation.handlebars
  app.get("/makeReservation", function(req, res) {
    res.render("makeReservation");
    // res.sendFile(path.join(__dirname, "../public/makeReservation.html"));    // This is for non-handlebars version
  });

  // barberPortal route loads barberPortal.handlebars
  app.get("/barberPortal", function(req, res) {
    res.render("barberPortal");
    // res.sendFile(path.join(__dirname, "../public/barberPortal.html"));   // This is for non-handlebars version
  });

  // services route loads services.handlebars
  app.get("/services", function(req, res) {
    res.render("services");
    // res.sendFile(path.join(__dirname, "../public/services.html"));   // This is for non-handlebars version
  });

  // contact route loads contact.handlebars
  app.get("/contact", function(req, res) {
    res.render("contact");
    // res.sendFile(path.join(__dirname, "../public/contact.html"));    // This is for non-handlebars version
  });

};