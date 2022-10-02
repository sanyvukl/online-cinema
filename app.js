$(function(){
    const arrowNext = document.querySelectorAll(".arrow-right");
    const arrowPrev = document.querySelectorAll(".arrow-left");
    const movieLists = document.querySelectorAll(".movie-list");
    arrowNext.forEach((arrow, index)=>{
        let clickCount = 0;
        const clicks= movieLists[index].querySelectorAll("img").length;
        arrow.addEventListener("click", ()=>{
            clickCount++;
            if(clicks >= (4 + clickCount)){
                const current = movieLists[index].computedStyleMap().get("transform")[0].x.value;
                movieLists[index].style.transform = `translateX(${current - 270}px)`;
            }else{
                movieLists[index].style.transform = "translateX(0px)";
                clickCount = 0;
            }

        });
    });
    arrowPrev.forEach((arrow,index)=>{
        arrow.addEventListener("click", ()=>{
            const current = movieLists[index].computedStyleMap().get("transform")[0].x.value;
            if(current < 0){
                movieLists[index].style.transform = `translateX(${current + 270}px)`;
            }
        })
    });
    
    const toggle = document.querySelector(".toggle-ball");
    toggle.addEventListener("click", ()=>{
        toggle.classList.toggle("active");
        document.querySelector(".container").classList.toggle("active");
        document.querySelector(".navbar").classList.toggle("active");
        document.querySelector(".sidebar").classList.toggle("active");
        document.querySelector(".toggle").classList.toggle("active");
    })

})
