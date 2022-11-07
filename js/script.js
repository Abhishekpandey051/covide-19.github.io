let menu = document.querySelector("#menu-bar");
let nav = document.querySelector(".nav");

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
}

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .nav a");

window.onscroll = () =>{
    menu.classList.remove("fa-times");
    nav.classList.remove("active");

    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute("id");
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove("active")
                document.querySelector('header .nav a[href*='+id+']').classList.add('active');
                
            });
        };

    });
}

let Submit=()=>{
    alert("Thanks For Your Feedback");


    let Name = document.getElementById("Name").value;
    let Email = document.getElementById("Email").value;
    let Pass = document.getElementById("Pass").value;
    let textArea = document.getElementById("textArea").value;
    

    let userName = localStorage.setItem("Name",Name)
    let userEmail = localStorage.setItem("Email",Email)
    let userPass = localStorage.setItem("Pass",Pass)
    let userTeactArea = localStorage.setItem("textArea",textArea)

}