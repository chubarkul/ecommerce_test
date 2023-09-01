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
  gtag("event", "view_item", {
currency: ”KZT",
items: [
{
item_id: "SKU_12345",
item_name: "Детская кровать - тахта",
item_category: "Кровати и матрасы",
price: 99990.00,
quantity: 1
}
]
});

function closePopup() {
  var popup = document.getElementById("popup-purchase");
  popup.style.display = "none"; // Hide the pop-up
}

<!-- End of purchase pop up -->
