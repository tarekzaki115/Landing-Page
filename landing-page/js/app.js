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
        item.innerHTML = `<a class='menu__link' id='item${i+1}'>${sectionItemName}</a>`;

        //append the item to the nav bar
        navMenu.appendChild(item);

        //scrolling to section on clicking the item on navbar
        scrollToSection(item, sectionItem);
    }

}

// the function scrolls to section on clicking item on navbar
// it takes the item and the section as input
function scrollToSection(item, sec){
    item.addEventListener('click', function(e){
          e.preventDefault();
          sec.scrollIntoView({behavior: "smooth"})
    })
}


//makes it clear which section is being viewed
function setActiveSection() {

    //will be used to store the id of the viewd section
    let viewedSection = '';

    //the number of the id of the listItem
    let itemNum = 1;
    //loop through the sections
    allSections.forEach(section => {


        
        //get the dimensions of the section to determine if it is in view
        let dim = section.getBoundingClientRect();

        //string that has the id of the listItem
        let itemID = 'item'+itemNum;

        //get the item by its ID
        let item = document.getElementById(itemID);

        //check if section is in viewport or not
        if (dim.top <= 150 && dim.bottom >= 150) {

            //get the id of the viewed section
            viewedSection = section.getAttribute('id');

            //if viewed section doesn't have class "your-active-class" then add it
            if (!section.classList.contains('your-active-class')) {
                document.getElementById(viewedSection).className = "your-active-class";
                //add active class to the item
                item.classList.add("active");
            }

        } else {
            //if the section is not viewed remove class "your-active-class"
            section.classList.remove("your-active-class");
            //if the section is not viewed remove class "active"
            item.classList.remove("active");
        }

        //increment the number of the list id
        itemNum++;
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


