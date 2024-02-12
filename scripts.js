const arrows =document.querySelectorAll(".arrow");
const movielist=document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const widthRatio=Math.floor(window.innerWidth / 300);
    let clickCounter=0;
    const imageItem=movielist[i].querySelectorAll("img").length;
    arrow.addEventListener("click",function(){
    if (imageItem-(4+clickCounter)+ (4 - widthRatio) >=0)
    {
        
            clickCounter++; 
             movielist[i].style.transform=`translateX(${movielist[i].computedStyleMap().get("transform")[0].x.value - 300}px)`
               
    }  
    else{
        movielist[i].style.transform="translateX(0)"
        clickCounter=0;
    }
}); 
});


document.getElementById(`mode-btn`).addEventListener(`click`,()=>{
    document.body.classList.toggle(`white`);
});
