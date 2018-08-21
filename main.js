var counter = (function(){
  var _val=5;
  var _checkValue = function(x){
    if (x < 0){
      return false;
    } else{
      return true;
    }   
  }
  
  var setValue = function(val){
    if (_checkValue(val)) {
      _val = val;
    } else {
      console.log("Введите правильное значение");
    }
  }
  
  var increaseCounter = function(){
		_val++;
	}

	var decreaseCounter = function(){
		_val--;
	}

	var printCounter = function(){
		console.log(_val);
	}

  return {
    setValue,
    increaseCounter,
    decreaseCounter,
    printCounter
  }
}())


counter.setValue(50);
counter.increaseCounter();
counter.printCounter();