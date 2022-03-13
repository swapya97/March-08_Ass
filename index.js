document.querySelectorAll(".image-container img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup-image").style.display = "block";
    } 
});