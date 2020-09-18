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
console.log("hello fuckers");

/**
 * Define Global Variables
 * 
*/


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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

const section1 = document.getElementById('container1');
const section2 = document.getElementById('container2');
const section3 = document.getElementById('container3');
const section4 = document.getElementById('container4');


const sec1_li = document.getElementById("section1_li");
const sec2_li = document.getElementById("section2_li");
const sec3_li = document.getElementById("section3_li");
const sec4_li = document.getElementById("section4_li");

const section1Top = section1.getBoundingClientRect().top;
const section2Top = section2.getBoundingClientRect().top;
const section3Top = section3.getBoundingClientRect().top;
const section4Top = section4.getBoundingClientRect().top;

console.log(section1Top);
console.log(section2Top);


window.addEventListener("scroll", function(){
    //console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    
    if (scrollHeight > section1Top && scrollHeight < section2Top){
        sec1_li.classList.add("section1_scroll");
    }
    else if (scrollHeight > section2Top && scrollHeight < section3Top){
        sec1_li.classList.add("section2_scroll");
        sec1_li.classList.remove("section1_scroll");
        sec1_li.classList.remove("section3_scroll");
        sec1_li.classList.remove("section4_scroll");
    }
    else if (scrollHeight > section3Top && scrollHeight < section4Top){
        sec1_li.classList.add("section3_scroll");
        sec1_li.classList.remove("section1_scroll");
        sec1_li.classList.remove("section2_scroll");
        sec1_li.classList.remove("section4_scroll");

    }
    else if (scrollHeight > section4Top){
        sec1_li.classList.add("section4_scroll");
        sec1_li.classList.remove("section1_scroll");
        sec1_li.classList.remove("section3_scroll");
        sec1_li.classList.remove("section2_scroll");
    }
    
    

});
