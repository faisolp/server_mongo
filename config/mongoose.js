var mongoose =require ("mongoose");
var config = require("./config");
//process.env.NODE_ENV="production";
//const uri ="mongodb://localhost/Fortigate";
module.exports  = function () {
    //if(process.env.NODE_ENV !="production")
    //     mongoose.set("debug",true);
   // else
    mongoose.set("debug",false);
    mongoose.Promise =Promise;
    var db = mongoose.connect(config.mongoUri);
    
    //======= Data Modele======================
    require("../app/modeles/mc_log.modele");
  
    //=========================================
    

    return db;
};