const images=document.querySelectorAll(".project-photos img");
const modal=document.querySelector(".modal");
const modalImg=document.querySelector(".modalImg");
const modalTxt=document.queryCommandValue(".modalTxt");
const close=document.querySelector(".close");

images.forEach((image)=>{
    image.addEventListener("click", ()=>{
        modalImg.src=image.src;
        modalTxt.innerHTML=image.alt
        modal.classList.add("appear");

        close.addEventListener("click", ()=>{
            modal.classList.remove("appear");
    })

    })
})