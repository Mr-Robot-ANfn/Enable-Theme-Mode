let a=document.querySelector(".dm")
let img=document.getElementById("img")
a.addEventListener('click',()=>{
    document.body.classList.toggle("dark-mode")

    // Move the image to the right or left using Flexbox
  
    if (img.src.includes("IMAGES/sun-line.png")) {
        img.src = "IMAGES/moon-fill.png"; // Change to second image
      } else {
        img.src = "IMAGES/sun-line.png"; // Change back to first image
      }

      if (a.style.justifyContent === "flex-start"|| a.style.justifyContent === "") {
        a.style.justifyContent = "flex-end"; // Move image to the right
      } else {
        a.style.justifyContent = "flex-start"; // Move image back to the left
      }

})

