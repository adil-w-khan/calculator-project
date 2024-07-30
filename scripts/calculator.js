let display = document.getElementById("result");

      function dis(val) {
        display.value += val;
      }

      function plusMinues() {
        try {
          display.value *= -1
        }catch(error){
          display.value = 'Error';
        }
      }

      function percentage() {
        try {
          display.value /= 100;
        }catch(error){
          display.value = 'Error';
        }
      }

      function doOperation() {
        try {
          display.value = eval(display.value)
        }catch(error) {
          display.value = 'Error';
        }
      }