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
  
<!-- Start of add to cart btn -->
// Get all add-cart-btn button elements
const addButtons = document.querySelectorAll('.add-cart-btn');

// Loop through each add-cart-btn button
addButtons.forEach(function(button) {
  // Add click event listener to the button
  button.addEventListener('click', function() {
    // Get the product title from the h2 tag within the parent product div
    const productTitle = this.parentNode.querySelector('h2').innerText;

    // Get the popup element
    const popup = document.querySelector('.popup');

    // Set the product title as the content of the popup
    const popupContent = document.querySelector('#popup-content');
    popupContent.innerText = productTitle;

    // Show the popup
    popup.style.display = 'block';
  });
});

<!-- End of add to cart btn -->
