document.addEventListener('DOMContentLoaded', function() {
    const createProductBtn = document.getElementById('createProductBtn');
    const productForm = document.getElementById('productForm');
  
    createProductBtn.addEventListener('click', function(event) {
        event.preventDefault();


        if (productForm.reportValidity()) {
            alert('Producto creado');
          }
    });
  });