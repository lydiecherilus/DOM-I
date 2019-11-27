const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', "img/header-img.png")

const middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', "img/mid-page-accent.jpg");

const navEl  = document.querySelector('nav');
const subnavEl = document.createElement('a');
subnavEl.textContent = "Login"
subnavEl.style.color = "green"
navEl.appendChild(subnavEl);

const subnavEl2 = document.createElement('a');
subnavEl2.textContent = "Home"
subnavEl2.style.color = "green"
navEl.prepend(subnavEl2);

const ctaText = document.querySelector('h1');
ctaText.setAttribute('style', 'white-space: pre;'); 
ctaText.textContent = "DOM \r\n"
ctaText.textContent += "Is\r\n"
ctaText.textContent += "Awesome"


const buttonEl = document.querySelector('button');
buttonEl.textContent = "Get Started"

const navElement = document.getElementsByTagName('a')
navElement[1].textContent = "Services"
navElement[2].textContent = "Products"
navElement[3].textContent = "Vision"
navElement[4].textContent = "Features"
navElement[5].textContent = "About"
navElement[6].textContent = "Contact"

navElement[1].style.color = "green"
navElement[2].style.color = "green"
navElement[3].style.color = "green"
navElement[4].style.color = "green"
navElement[5].style.color = "green"
navElement[6].style.color = "green"

const hFour = document.getElementsByTagName('h4')
hFour[0].textContent = "Features"
hFour[1].textContent = "About"
hFour[2].textContent = "Services"
hFour[3].textContent = "Product"
hFour[4].textContent = "Vision"
hFour[5].textContent = "Contact"

const paragraphs = document.getElementsByTagName('p')
paragraphs[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphs[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphs[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphs[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphs[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

paragraphs[5].setAttribute('style', 'white-space: pre;'); 
paragraphs[5].textContent = "123 Way 456 Street\r\n"
paragraphs[5].textContent += "Somewhere, USA"

paragraphs[6].textContent = "1 (888) 888-8888"
paragraphs[7].textContent = "sales@greatidea.io"
paragraphs[8].textContent = "Copyright Great Idea! 2018"

