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

          
