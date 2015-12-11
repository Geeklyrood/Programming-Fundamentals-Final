//adds clear button at the top of page when pressed completely reloads page
function clearPage() {
  window.location.reload();
}

//Converts text to binary
function asciiConverter() {
  var code;
  var output = '';
  var phrase =  document.getElementById('phrase').value;  
    phrase = phrase.split('');
    for (var i =0; i < phrase.length; i++) {
      code = phrase[i].charCodeAt(0).toString(2);
      //accounts for the possibility of missing up to 3 0s at the beginning of the binary code 
      if (code.length !== 8) {
        code = '0' + code;
        if (code.length !== 8) {
          code = '0' + code;
        }
        if (code.length !== 8) {
          code = '0' + code;
        }
      }
      output += code + " ";
    } 
    document.getElementById('ascii').innerHTML = output; 
}
//checks to see if userInput is actually binary
function isStringBinary() {
  var userInput =  document.getElementById('number').value;  
  userInput = userInput.split('');
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i] !== '1' && userInput[i] !== '0') {
      userInput = userInput.join();
      alert('That is not a binary number!'); 
    }
  }
}

//converts numbers based on the drop down box
function numberConverter() {
  var binary;
  var decimal;
  var hex;
  var octal;
  var output = '';
  var userInput = '';
  
  if (document.getElementById('select').value == 'val1') {
    userInput = document.getElementById('number').value;
    output = '';
    
    if (isNaN(userInput) || userInput === '') {
      alert(userInput + ' is not a valid number!');
      document.getElementById('decimal').value = '';
      document.getElementById('decimal').focus();
      return false;
    }
  
    userInput = parseInt(userInput);
    binary = userInput.toString(2);
    output = 'The binary representation of ' + userInput + ' is ' + binary;
    document.getElementById('convertedResult').innerHTML = output;
  }
  
  else if (document.getElementById('select').value == 'val2') {
    userInput = document.getElementById('number').value;
    output = '';
    
  if (isNaN(userInput) || userInput === '') {
    alert(userInput + ' is not a valid number!');    document.getElementById('decimal').value = '';
    document.getElementById('decimal').focus();
    return false;
  }
    userInput = parseInt(userInput);
    hex = userInput.toString(16).toUpperCase();
    output = 'The hex representation of ' + userInput + ' is ' + hex;
    document.getElementById('convertedResult').innerHTML = output;
  }
  else if (document.getElementById('select').value == 'val3') {
    userInput = document.getElementById('number').value;
    output = '';
    
  if (isNaN(userInput) || userInput === '') {
    alert(userInput + ' is not a valid number!');    document.getElementById('decimal').value = 'You must enter an integer!';
    document.getElementById('decimal').focus();
    return false;
  }
  
    userInput = parseInt(userInput);
    octal = userInput.toString(8).toUpperCase();
    output = 'The octal representation of ' + userInput + ' is ' + octal;
    document.getElementById('convertedResult').innerHTML = output;
  }
  
  else if (document.getElementById('select').value == 'val4') {
    userInput = document.getElementById('number').value.toUpperCase();
    output = '';
  if (isNaN(userInput) || userInput === '') {
    
    alert(userInput + ' is not a valid number!');    
    document.getElementById('binary').value = '';
    document.getElementById('binary').focus();
    return false;
  }
  
    decimal = parseInt(userInput, 2);
    
    
    output = 'The decimal representation of ' + userInput + ' is ' + decimal;
    
    isStringBinary();
  document.getElementById('convertedResult').innerHTML = output;
  }
  else if (document.getElementById('select').value == 'val5') {
    userInput = document.getElementById('number').value.toUpperCase();
    output = '';
  if (isNaN(userInput) || userInput === '') {
    
    alert(userInput + ' is not a valid number!');    
    document.getElementById('binary').value = '';
    document.getElementById('binary').focus();
    return false;
  }  
  
    decimal = parseInt(userInput, 2);
    hex = decimal.toString(16).toUpperCase();
    
    output = 'The hex representation of ' + userInput + ' is ' + hex;
    
    isStringBinary();
  document.getElementById('convertedResult').innerHTML = output;
  }
  else  {
    userInput = document.getElementById('number').value.toUpperCase();
    output = '';
  if (isNaN(userInput) || userInput === '') {
    
    alert(userInput + ' is not a valid number!');    
    document.getElementById('binary').value = '';
    document.getElementById('binary').focus();
    return false;
  }  
  
    decimal = parseInt(userInput, 2);
    octal = decimal.toString(8);
    
    output = 'The octal representation of ' + userInput + ' is ' + octal;
    

    isStringBinary();
    document.getElementById('convertedResult').innerHTML = output;
  }
}
