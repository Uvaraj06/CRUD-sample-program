

const { Router } = require("express");

module.exports = app => {
  
    const crudcontroller = require("../crud controller/crudcontrol");
    var router = require("express").Router();

    router.post("/insert", crudcontroller.insert);
    router.post("/Update", crudcontroller.Update);
    router.post("/delete/:id", crudcontroller.delete);
    router.get("/show", crudcontroller.show)

    app.use('/api/chat', router);

  };