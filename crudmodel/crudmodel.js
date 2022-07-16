const moment = require("moment");
var sqldb = require("mssql");
var mssqldbconf = require("../config/db");

const crudmodel1 = function (crudmodel) {
  this.Username = crudmodel.Username;
  this.password = crudmodel.password;
  this.DOB = crudmodel.DOB;
};

// insert
crudmodel1.insert = (messagenew, resdata) => {
  sqldb.connect(mssqldbconf, function (errr) {
    if (errr){
      console.log(errr)
    }else{
      // var updatedate = moment().format("YYYY-MM-DD HH:MM:SS");
      // console.log(updatedate);
      // var createtime = moment().format("YYYY-MM-DD");
      
      var sql = `insert into intern_CRUD (username,Password,DOB) values ('${messagenew.Username}' , '${messagenew.password}' , '${messagenew.DOB}')`;
      console.log(sql)
      sqldb.query(sql,  (err, result) =>{
        console.log(err);
        console.log("1 record inserted");
        console.log(result.rowsAffected);
        if (err) {
          // console.log(result.rowsAffected);
          console.log("errr"+err)  ;
          resdata(err, null);
          return
        }else if(result.rowsAffected > 0){
          console.log("1 record inserted");
        // console.log(result['rowsAffected']);
          var datatoController = {
            sts:1,
            message:"Inserted"
          }
          resdata(null,datatoController);
          console.log(datatoController);
        }
      });
    }
    
  });
};

// update
crudmodel1.Update = (messagenew, resUpdata) => {
  sqldb.connect(mssqldbconf, function (err) {
    if (err) console.log(err,res)
    var sql = "UPDATE intern_CRUD SET username = 'yuvisu' WHERE fullname = 'yuvisa'";
    sqldb.query(sql, function (err, result) {
      if (err) {
        console.log(err)
      
      console.log(" record(s) updated");
      return
      }else if(result.rowsAffected > 0){
      var datatoUpdater = {
        sts:1,
        message:"Updated"
      }
      resUpdata(null,datatoUpdater);
      console.log(datatoUpdater);
    }
    });
  });
};

// delete 
crudmodel1.delete = (messagenew, resdel) => {
  sqldb.connect(mssqldbconf, function (err) {
    if (err) console.log(err,res);
    let qid = messagenew.body.id
    var sql = `DELETE FROM intern_CRUD WHERE id = '${qid}'  `;
    sqldb.query(sql, function (err, result) {
      if (err){
      console.log(err)
        console.log(" record deleted: ");
      return
      }else if(result.rowsAffected > 0){
      var datatodelete = {
        sts:1,
        message:"Deleted"
      }
      resdel(null,datatodelete);
      console.log(datatodelete);
      }
    });
  });
};

// list show

crudmodel1.show = (messagenew, resdel) => {
  sqldb.connect(mssqldbconf, function (err) {
    if (err) console.log(err,res);
    var sql = "SELECT * FROM intern_CRUD ";
    sqldb.query(sql, function (err, result) {
      if (err){
      console.log(err)
      return
      }else if(result.rowsAffected > 0){
        console.log(result);
      var datatodelete = {
        sts:1,
        message:"data list",
        data:result.recordset

      }
      resdel(null,datatodelete);
      console.log(datatodelete);
      }
    });
  });
};

module.exports = crudmodel1;