document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchbarsend').addEventListener('click', function() {
        document.getElementById('searchbar').value = '';
    });
});

        function validateForm() {
            var form = document.getElementById('myForm');
            if (!form.checkValidity()) {
                // Als het formulier niet geldig is, voorkom verzending en geef feedback
                alert('Vul alstublieft alle verplichte velden in.');
                return false;
            }
            // Als het formulier geldig is, kan het verzonden worden
            return true;
        }

        
        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value + "$"; // Display the default slider value
      
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
          output.innerHTML = this.value + "$";
        }

          
        let productCount = 0;

// Check of er een opgeslagen productCount in de localStorage is en laad deze
if (localStorage.getItem("productCount")) {
  productCount = parseInt(localStorage.getItem("productCount"));
} else {
  localStorage.setItem("productCount", productCount);
}

// Update de winkelmandteller op de pagina
document.getElementById("winkelmandItems").innerHTML = productCount;

// Functie om product aan winkelwagen toe te voegen
function winkelWagenAdd() {
  productCount++;
  localStorage.setItem("productCount", productCount);
  document.getElementById("winkelmandItems").innerHTML = productCount;
}


function showPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  // Optioneel: Toon de pop-up na 3 seconden automatisch
  setTimeout(showPopup, 3000);
  

