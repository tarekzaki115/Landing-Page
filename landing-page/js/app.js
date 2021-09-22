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
 * Define Global Variables
 * 
*/

//allSections variable stores all the sections
const allSections = document.querySelectorAll('section');

// numOfSections is the number of all the sections we have
const numOfSections = allSections.length;

//store the unorderd list named navbar__list in the variable navMenu
const navMenu = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//function adds section names to the nav bar
function addSectionsToNavMenu() {

    //loop through the section in the dom
    for (let i = 0; i < numOfSections; i++) {
        //store section in variable
        let sectionItem = allSections[i];

        //get section name and id
        let sectionItemName = sectionItem.getAttribute('data-nav');
        let sectionItemId = sectionItem.getAttribute('id');

        //create list items to add to the unordered list in the nav bar
        let item = document.createElement('li');

        //write the html for the list item
        item.innerHTML = `<a class='menu__link' href='#${sectionItemId}'>${sectionItemName}</a>`;

        //append the item to the nav bar
        navMenu.appendChild(item);

    }
}


//makes it clear which section is being viewed
function setActiveSection() {

    //will be used to store the id of the viewd section
    let viewedSection = '';

    //loop through the sections
    allSections.forEach(section => {

        //the offset top of the section
        const secTop = section.offsetTop;
        //the height
        const secHeight = section.clientHeight;
        //preemptivly remove the "your-active-class" if it is there
        section.classList.remove("your-active-class");
        if (scrollY >= (secTop - secHeight / 2)) {

            //get the id of the viewed section
            viewedSection = section.getAttribute('id');
            //if viewed section doesn't have class "your-active-class" then add it
            if (!section.classList.contains('your-active-class')) {
                document.getElementById(viewedSection).className = "your-active-class";
            }

        } else {
            //if the section is not viewed remove class "your-active-class"
            section.classList.remove("your-active-class");
        }
    });
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
addSectionsToNavMenu();

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', setActiveSection);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


