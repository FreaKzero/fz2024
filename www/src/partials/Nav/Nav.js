const navBtn = document.getElementById('btn-navigation');

navBtn.addEventListener('click', () => {
  const openClass = 'open';
  const drawer = document.querySelector('.navigation-drawer');
  const icon = document.querySelector('#btn-navigation');

  if (drawer.classList.contains(openClass)) {
    drawer.classList.remove(openClass);
    icon.classList.remove(openClass);
  } else {
    drawer.classList.add(openClass)
    icon.classList.add(openClass);
  }  
});

/*
// Get the element
var element = document.getElementById("yourElementId");

// Check if the element has the class
if (element.classList.contains("yourClassName")) {
    // The element has the class
    console.log("Element has the class");
} else {
    // The element doesn't have the class
    console.log("Element does not have the class");
}
*/