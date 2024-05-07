const navBtn = document.getElementById('btn-navigation');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('nav > div.navigation-drawer .link');
const sections = document.querySelectorAll('section');

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    const navLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
    const sect = document.getElementById(entry.target.id);
    
    if (navLink) {
      if (entry.isIntersecting) {
        navLink.classList.add('active');
        sect.classList.add('inscreen');
      } else {
        navLink.classList.remove('active');
        sect.classList.remove('inscreen');
      }
    }
  });
};

const toggleBar = (close) => {
  const openClass = 'open';
  const drawer = document.querySelector('.navigation-drawer');
  const icon = document.querySelector('#btn-navigation');

  if (close) {
    drawer.classList.remove(openClass);
    icon.classList.remove(openClass);
    return;
  }

  if (drawer.classList.contains(openClass)) {
    drawer.classList.remove(openClass);
    icon.classList.remove(openClass);
  } else {
    drawer.classList.add(openClass)
    icon.classList.add(openClass);
  }  
}

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

navigation.addEventListener('mouseleave', () => toggleBar(true));
navLinks.forEach(elem => elem.addEventListener('click', () => toggleBar()));
navBtn.addEventListener('click', () => toggleBar());

document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === "escape") {
    toggleBar(true);
  }
});

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
sections.forEach(section => {
  observer.observe(section);
});