const menu = document.querySelector(".menu")
const allLi = document.querySelectorAll("li")


allLi.forEach((li, index) => {
    li.addEventListener("click", e => {
        menu.querySelector(".active-List").classList.remove("active-List")
        li.classList.add("active-List")
    
        const indicator = document.querySelector(".indicador")
        indicator.style.transform = `translateX(calc(${index * 90}px))`
        
    })
});
