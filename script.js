document.addEventListener("DOMContentLoaded", function () {
   
    const productsContainer = document.getElementById("product-list");
    if (productsContainer) {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((products) => {
          products.forEach((product) => {
            const productCard = `
              <div class="col-md-4">
                <div class="card mb-4">
                  <img src="${product.image}" class="card-img-top" alt="${product.title}">
                  <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">$${product.price}</p>
                    <a href="order.html?id=${product.id}" class="btn btn-primary">Order now</a>
                  </div>
                </div>
              </div>`;
            productsContainer.innerHTML += productCard;
          });
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  
    const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    // Add an event listener for the form submit event
    orderForm.addEventListener("submit", function (event) {
      // Get the form fields
      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const addressField = document.getElementById("address");
      // Add other fields as needed

      // Check if any field is empty
      if (!nameField.value || !emailField.value || !addressField.value /* Add other fields as needed */) {
        event.preventDefault(); // Prevent form submission
        alert("Please fill in all the required fields."); // Show an error message
      }
    });
  }
});
  
  