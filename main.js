<!-- Start of cart pop up script -->  
const cartButton = document.querySelector('.cart');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

// Open the popup when clicking on the cart button
cartButton.addEventListener('click', function() {
  popup.style.display = 'block';
});

// Close the popup when clicking on the close button
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});
<!-- End of cart pop up script-->

function goBack() {
  window.history.back();
}

<!-- Start of add to cart btn -->
// Get all add-cart-btn button elements
const addButtons = document.querySelectorAll('.add-cart-btn');
// Add click event listener to each add-cart-btn button
addButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the product title from the h2 tag within the parent product div
    const productTitle = this.parentNode.querySelector('h2').innerText;

    // Create a new paragraph element for the product title
    const newParagraph = document.createElement('p');
    newParagraph.innerText = productTitle;

    // Create a new remove button element
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';

    // Add click event listener to the remove button
    removeButton.addEventListener('click', function() {
      // Remove the corresponding product entry from the popup
      newParagraph.remove();
      removeButton.remove();
    });

    // Append the product title and remove button to the popup's content
    const popupContent = document.querySelector('#popup-content');
    popupContent.appendChild(newParagraph);
    popupContent.appendChild(removeButton);

    // Show the popup
    popup.style.display = 'block';

    dataLayer.push({
      "ecommerce": {
        "currencyCode": "RUB",    
        "test": {
          "actionField": {
            "list": "Product add"
          },
          "products": [
            {
              "id": "43521",
              "name": "Yandex bag",
              "price": 654.32,
              "brand": "Yandex / Яndex",
              "category": "Accessories/Bags",
              "quantity": 1
            }
          ]
        }
      },
      "event": "cart_cart"
    });
  });
});
<!-- End of add to cart btn -->

<!-- Start of purchase pop up -->
function openPopup() {
  var popup = document.getElementById("popup-purchase");
  popup.style.display = "block"; // Show the pop-up
                
  // dataLayer.push for purchase
   dataLayer.push({"event", "purchase", {
    transaction_id: "T_12345",
    value: 25.42,
    tax: 4.90,
    shipping: 5.99,
    currency: "USD",
    coupon: "SUMMER_SALE",
    items: [
     {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 9.99,
      quantity: 1
    },
    {
      item_id: "SKU_12346",
      item_name: "Google Grey Women's Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      discount: 3.33,
      index: 1,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "gray",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 20.99,
      promotion_id: "P_12345",
      promotion_name: "Summer Sale",
      quantity: 1
    }]
});
}

function closePopup() {
  var popup = document.getElementById("popup-purchase");
  popup.style.display = "none"; // Hide the pop-up
}
<!-- End of purchase pop up -->
