const images=document.querySelectorAll(".project-photos img");
const modal=document.getElementById('myModal');
const modalImg=document.querySelector(".modalImg");
const modalTxt=document.querySelector(".modalTxt");
const close=document.querySelector(".close");

images.forEach((image)=>{
    image.addEventListener("click", ()=>{
        modalImg.src=image.src;
        modalTxt.innerHTML=image.alt;
        modal.style.display="block"

        close.addEventListener("click", ()=>{
            modal.style.display="none"
    })

    })
})