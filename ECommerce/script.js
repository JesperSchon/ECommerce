async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    displayProducts(products);
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">${product.price} kr</p>
                        <a href="order.html?productId=${product.id}" class="btn btn-primary">Beställ</a>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

fetchProducts();

  