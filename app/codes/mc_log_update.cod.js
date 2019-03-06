

var mc_log_ctl = require("../controllers/mc_log.controller");


var convertPacket =require("./mc_log_convertPacket.code");




exports.update=function(_query) {
    //1.Packet=>ObjData
    var _data= convertPacket(_query); 

   
    
     //3.save ObjData ==>database
     mc_log_ctl.create(_data,function(err){
        if(err)
            console.log(`server got error: ${JSON.stringify(err)} from ${rinfo.address}:${rinfo.port}`);           
    });
   
}