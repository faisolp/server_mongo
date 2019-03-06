var mc_log = require("mongoose").model("mc_log");
//var mapHostname = new Map();


exports.create =function(_data,next) {
   // var _cvData =convertData(_data);
   // _cvData =addHostname(_cvData);
    //if(_cvData.dstip=="110.164.205.140") {
    //    _cvData.dstip=_cvData.dstip;
    //    console.log("->"+_cvData.hostname);
   // }
   
    
    var _mc_log = new mc_log(_data);

    _mc_log.save(function(err){
        if(err)
            return next(err);
        else  {
	    //if(_cvData.dstip=="110.164.205.140") {
		//console.log(_data.toString());
	    //}
            return next(null);
	    }
    });



}