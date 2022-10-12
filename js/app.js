/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const navigationBar = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
setNavigationBar();
function setNavigationBar() {
    sections.forEach (section => {
        const id = section.id;
        const nav = section.dataset.nav;

        const li = document.createElement("li");
        li.innerHTML = `<a class="menu__link" href="#${id}"> ${nav} </a>`;
        navigationBar.appendChild(li);
        
    });
}


// Add class 'active' to section when near top of viewport
const links = document.querySelectorAll('li');


// Scroll to anchor ID using scrollTO event


function checkActiveState(){
    
    for (i=0;i<sections.length;i++){
        let top = sections[i].getBoundingClientRect().top;
        let bottom = sections[i].getBoundingClientRect().bottom;
        if(top<=150 && bottom>=150){
            links[i].classList.add("your-active-class");
        }else{
            links[i].classList.remove("your-active-class");
        }
    }
};
window.addEventListener('scroll', checkActiveState);
checkActiveState();

// console.log(links);
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

let anchorLinks = document.querySelectorAll('a[href^="#"]');
// Iterate through each of the links
anchorLinks.forEach (link => {
    // add event listener on click
    link.addEventListener('click', (event)=> {
       event.preventDefault();

       let destination = document.querySelector(link.getAttribute('href'));
        destination.scrollIntoView({
            behavior: 'smooth'
        });
});
});

// Set sections as active

// Code to get data from the form
let nameData = document.getElementById('fullname');
let emailData = document.getElementById('id-email');
let formData = document.getElementById('form');

formData.addEventListener('submit',(e)=>{
    e.preventDefault()
    storeValue();
 })

 function storeValue(){
    const nameDataValue = nameData.value;
    const emailDataValue = emailData.value;
    console.log(nameDataValue);
    console.log(emailDataValue);
    alert(nameDataValue + ',you are added as a subscriber')
 };

