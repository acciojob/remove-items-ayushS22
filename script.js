//your JS code here. If required.
// Get button and select elements
const select = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

// Add click event
button.addEventListener("click", function () {
  // Get selected index
  const selectedIndex = select.selectedIndex;

  // Remove selected option
  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
});