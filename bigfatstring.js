





  const selector = document.getElementById("selector");
      const input = document.getElementById("input");
      const submit = document.getElementById("submit");
      const output = document.getElementById("output");

      submit.addEventListener("click", function() {
        if (selector.value === "Option 1") {
          output.innerHTML = input.value.charAt(0).toUpperCase() + input.value.substring(1).toLowerCase();;
        } else if (selector.value === "Option 2") {
          output.innerHTML = input.value.split(" ")[0];;
        }
        else if (selector.value === "Option 3") {
            output.innerHTML = input.value.split(" ")[0] + input.value.split.lenght;;
           
            
          }

          else if (selector.value === "Option 2") {
            output.innerHTML = input.value.split(" ")[0];;
          }
      });



