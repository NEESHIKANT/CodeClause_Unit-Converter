function convert() {
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var value = document.getElementById("value").value;
  
    var conversionRate = {
      "meters": 1,
      "feet": 0.3048,
      "centimeters": 0.01,
      "inches": 0.0254
    };
  
    var output = value * conversionRate[from] / conversionRate[to];
  
    document.getElementById("output").value = output;
  }
  
  document.getElementById("from").addEventListener("change", convert);
  document.getElementById("to").addEventListener("change", convert);
  document.getElementById("value").addEventListener("keyup", convert);
   