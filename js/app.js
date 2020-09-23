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
console.log("hello suckers");

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

const menu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

//console.log(sections);

function navBuilding(){
    for (let i = 1; i <= sections.length; i++){
        let secList = document.createElement('li');
        secList.id = "secLi_" + i;

        //console.log(secList);

        let secLinks = document.createElement("a");
        secLinks.id = "secLink_" + i;
        secLinks.innerText ="Section"+i;

        secList.appendChild(secLinks);

        menu.appendChild(secList);
    }
    
}

navBuilding();



function sectionActive(){

    const scrollHeight = window.pageYOffset;

    for(let i = 1; i <= sections.length; i++){

        let section = document.getElementById(`section${i}`);
        const listId = document.getElementById(`secLi_${i}`);
        const secTop = section.getBoundingClientRect().top;
        const secBot = section.getBoundingClientRect().bottom;
        // console.log(secTop);
        // console.log(secBot);
        // console.log(section.offsetHeight);
        if ( (section.offsetHeight * i) <= scrollHeight <= (section.offsetHeight * (i+1))
        && (0 <= secTop <= section.offsetHeight)
        && (secBot <= section.offsetHeight)
        )  
        {
            listId.classList.add('active');
        }
        else{
            listId.classList.remove('active');
        }
    }
     
};

//((0 <= secTop <= section.offsetHeight) && (secBot <= section.offsetHeight) && (scrollHeight >= (section.offsetHeight * i)))

window.addEventListener('scroll', function(){
    sectionActive();
});

const section1 = document.getElementById('container1');
const section2 = document.getElementById('container2');
const section3 = document.getElementById('container3');
const section4 = document.getElementById('container4');

const sec1Top = section1.getBoundingClientRect().top;
const sec1Bot = section1.getBoundingClientRect().bottom;
console.log(sec1Top);
console.log(sec1Bot);
console.log(window.pageYOffset);
// console.log(section1.clientHeight);
// console.log(section2.clientHeight);
// console.log(section3.clientHeight);
// console.log(section4.clientHeight);





// const sec1_li = document.getElementById("section1_li");
// const sec2_li = document.getElementById("section2_li");
// const sec3_li = document.getElementById("section3_li");
// const sec4_li = document.getElementById("section4_li");

// const section1Top = section1.getBoundingClientRect().top;
// const section2Top = section2.getBoundingClientRect().top;
// const section3Top = section3.getBoundingClientRect().top;
// const section4Top = section4.getBoundingClientRect().top;

// //console.log(section1Top);
// //console.log(section2Top);

// window.addEventListener("scroll", function(){
//     //console.log(window.pageYOffset);
//     const scrollHeight = window.pageYOffset;
    
//     if (scrollHeight > section1Top && scrollHeight < section2Top){
//         sec1_li.classList.add("section1_scroll");
//         sec2_li.classList.remove("section2_scroll");
//         sec3_li.classList.remove("section3_scroll");
//         sec4_li.classList.remove("section4_scroll");
//     }
//     else if (scrollHeight > section2Top && scrollHeight < section3Top){
//         sec2_li.classList.add("section2_scroll");
//         sec1_li.classList.remove("section1_scroll");
//         sec3_li.classList.remove("section3_scroll");
//         sec4_li.classList.remove("section4_scroll");
//     }
//     else if (scrollHeight > section3Top && scrollHeight < section4Top){
//         sec3_li.classList.add("section3_scroll");
//         sec1_li.classList.remove("section1_scroll");
//         sec2_li.classList.remove("section2_scroll");
//         sec4_li.classList.remove("section4_scroll");

//     }
//     else if (scrollHeight > section4Top){
//         sec4_li.classList.add("section4_scroll");
//         sec1_li.classList.remove("section1_scroll");
//         sec3_li.classList.remove("section3_scroll");
//         sec2_li.classList.remove("section2_scroll");
//     }
//     else if (scrollHeight < section1Top){
//         sec1_li.classList.remove("section1_scroll");
//     }
    
    

// });

// const sec1_link = document.getElementById('sec1_link');

// sec1_link.addEventListener('click', function(e){
//     e.preventDefault();
//     window.scrollTo(0, section1Top);
    
// })
