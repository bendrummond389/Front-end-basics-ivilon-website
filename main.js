    const productGrid = document.getElementById('product-grid');


    function createProductCard(product) {
      var productCard = document.createElement('div');
      productCard.className = "product-card";

      var image = document.createElement('img');
      image.className = "product-image";
      image.src = product.imageUrl

      var productPrompt = document.createElement('div');
      productPrompt.className = "product-prompt d-flex ";
      productPrompt.innerHTML = '<h6 class="text-center">available in more options</h6>'

      var productDescription = document.createElement('div');
      productDescription.className = "product-description  d-flex flex-column align-content-center";
      productDescription.innerHTML = "<p class='text-center mt-4'>" + product.description + "</p>";

      var productPrice = document.createElement('div');
      productPrice.className = "d-flex justify-content-center align-items-center"
      productPrice.innerHTML = "<p class='m-2'>" + product.price + "</p>";
      if (product.prime == 'true') {
        productPrice.innerHTML += "<img class='prime-logo m-2' src='./images/primelogo.svg'>"
      }

      var amazonButton = document.createElement('button');
      amazonButton.type = "button";
      amazonButton.innerText = "Buy now on Amazon";
      amazonButton.className = "btn btn-light m-3";

      productDescription.appendChild(productPrice);
      productDescription.appendChild(amazonButton);

      productCard.appendChild(image);
      productCard.appendChild(productPrompt);
      productCard.appendChild(productDescription);



      productGrid.appendChild(productCard);
    }

    fetch('./products.json')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        let products = data.products;
        for (var i = 0; i < products.length; i++) {
          createProductCard(products[i])
        }
      });