//your code here!

// Select the list element
const infiList = document.getElementById('infi-list');

// Function to add list items
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${infiList.children.length + 1}`;
    infiList.appendChild(li);
  }
}

// Add initial 10 items
addListItems(10);

// Event listener for infinite scrolling
infiList.addEventListener('scroll', () => {
  // Check if the user scrolled to the bottom
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    // Add 2 more items
    addListItems(2);
  }
});
