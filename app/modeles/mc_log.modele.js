var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var mc_logSchema = new Schema({

    createdDate:{type:Date,default:Date.now,index:true},
    mcid:{type:String,index:true},
    locid:{type:String,index:true},
    date:Date,
    time:String,
  
    //======================

    P1: String,
    P2: String,
    P3: String,
    P4: String,
    P5: String,
    P6: String,
    P7: String,
    P8: String,
    P9: String,
    P10:String,
   
   
});

mongoose.model("mc_log",mc_logSchema);
