const { SELL_LAPTOP, BUY_LAPTOP } = require("../Constants/constant");

//action creator 1
function buyLaptop(){
    return {
        type:BUY_LAPTOP
    }
  }
  
  //action creator 2
  function sellLaptop(){
    return {
        type:SELL_LAPTOP
    }
  }


  module.exports = { buyLaptop,sellLaptop };