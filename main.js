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
  // Get the add-cart-btn button element
const addButton = document.querySelector('.add-cart-btn');

// Add click event listener to the button
addButton.addEventListener('click', function() {
  // Get the product title from the h2 tag
  const productTitle = document.querySelector('.product h2').innerText;
  
  // Get the popup element
  const popup = document.querySelector('.popup');
  
  // Set the product title as the content of the popup
  const popupContent = document.querySelector('#popup-content');
  popupContent.innerText = productTitle;
  
  // Show the popup
  popup.style.display = 'block';
}); 
<!-- End of add to cart btn -->
