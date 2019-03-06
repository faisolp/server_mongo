module.exports=function(_query){
    var _data ={};
  

    for (const key in _query) {

        console.log(key, _query[key]);
        _data[key]=_query[key];
      }
  
   
   return _data;
  }