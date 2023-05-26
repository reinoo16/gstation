document.querySelector(".open-nav").addEventListener("click", openNav);

function openNav(e) {
    document.querySelector(".nav-menu").classList.toggle("close");

    e.preventDefault();
}

document.querySelector(".close-nav").addEventListener("click", closeNav);

function closeNav(e) {
    document.querySelector(".nav-menu").classList.add("close");

    e.preventDefault();
}

let i = 0;
let addBtns = document.querySelectorAll(".basket-add-btn");
addBtns.forEach(addBtns => {
    addBtns.addEventListener("click", function (e) {
        i++;
        document.querySelector(".basket-number").innerHTML = i;

        e.preventDefault();
    })
})