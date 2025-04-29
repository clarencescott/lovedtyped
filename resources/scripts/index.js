//Script to change the pricing based off how many sites are ordered
function calculatePrice() {
  const quantityInput = document.getElementById('siteQuantity');
  const totalDisplay = document.getElementById('totalPrice');
  
  let quantity = parseInt(quantityInput.value);
  
  if (isNaN(quantity) || quantity <= 0) {
    totalDisplay.textContent = "Total: $0";
    return;
  }
  
  let pricePerSite = quantity >= 2 ? 10 : 20;
  let total = quantity * pricePerSite;
  
  totalDisplay.textContent = `Total: $${total}`;
}


//Popup JavaScript
// Function to open the popup
function openPopup() {
    document.getElementById('contact-popup').style.display = 'flex';
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('contact-popup').style.display = 'none';
  }
  