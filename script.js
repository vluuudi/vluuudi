function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


const svgPath = document.querySelector('#svg-path');

svgPath.addEventListener('mouseenter', () => {
    svgPath.style.animation = 'none'; // Reset animation
    setTimeout(() => {
        svgPath.style.animation = 'dash 5s linear infinite'; // Reapply animation
    }, 10); // Small delay to ensure the reset works
});

// anime({
//     targets: '#svg-path-hello',
//     // translateX: 250,
//     duration: 2000, // Animation duration in milliseconds
//     easing: 'easeInOutQuad', // Easing function
//     delay: 6000 // Delay before animation starts in milliseconds
//   })

var aText = new Array(
    "I'm a passionate software developer transitioning from a ", 
    "career in fashion design. My background in the creative ",
    "arts has shaped me into a visionary thinker with a keen ",
    "eye for detail and a strong commitment to quality. Whether ",
    "designing elegant fashion pieces or crafting innovative ",
    "software solutions, I bring creativity, precision, and a ",
    "relentless drive for excellence to everything I do.As I ",
    "embark on this exciting journey in software development, ",
    "I aim to blend  my creative instincts with technical ",
    "expertise to create  user-centric, impactful solutions. ",
    "Let's build something  amazing together!"

    );
    var iSpeed = 50; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    // typewriter();
    document.addEventListener("DOMContentLoaded", () => {
        const typewriterSection = document.getElementById("text-container");
        const options = {
          root: null, // Viewport
          threshold: 1 // Trigger when 50% of the section is visible
        };
      
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              typewriter(); // Start typewriter effect
              observer.unobserve(typewriterSection); // Stop observing to avoid retriggering
            }
          });
        }, options);
      
        observer.observe(typewriterSection);
      });



      document.addEventListener("DOMContentLoaded", () => {
        const rotatingSVG = document.getElementById("star");
        const rotatingSVG2= document.getElementById("star2");
        const options = {
          root: null, // Viewport
          threshold: 0.5 // Trigger when 50% of the SVG is visible
        };
      
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Add rotation animation
              rotatingSVG.style.animation = "rotate 1s ease-in-out";
              rotatingSVG2.style.animation = "rotate 1s ease-in-out";
              observer.unobserve(rotatingSVG , rotatingSVG2); // Stop observing after animation triggers
            }
          });
        }, options);
      
        observer.observe(rotatingSVG , rotatingSVG2);
      });
      
     
      
    