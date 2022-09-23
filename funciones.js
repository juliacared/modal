//despalazamiento del menu en modales (celular)
document.addEventListener('click', function(e){    
    var iconMenu = document.querySelector(".icon-menu");
    var nav = document.querySelector(".nav");    
    
    if(e.target.getAttribute("class")==="icon-menu"){
        nav.classList.toggle("nav2");        
    }
    else if(e.target.getAttribute("class")!=="icon-menu") {
        nav.classList.remove("nav2");
        
    }    
});

//desplazamiento suave de enlaces internos
const links = document.querySelectorAll(".nav a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
    
    }
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop-56;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

if(window.innerWidth < 800) {
    console.log('800');
}


//abrir imagenes de la galeria

var contImg = document.querySelectorAll(".cont-img");
var modal = document.querySelector(".modal");
var marcoVacio = document.querySelector(".modalimg");

console.log(contImg);

for(i=0; i<contImg.length; i++){
    
    
    
    contImg[i].addEventListener('click', function(){
    console.log("sami");
    var src1 = this.firstChild.src;
    var marcoVacio = document.querySelector(".modalimg");
    console.log(src1);    
    marcoVacio.setAttribute("src", src1);
    modal.classList.toggle("modal2");
    
    
    })


    
}




modal.addEventListener('click', function(){
    modal.classList.toggle("modal2");
    marcoVacio.removeAttribute("src");
})



//Catalogos o cartas Botones


let detalles = document.querySelectorAll(".detalles");

 
document.addEventListener('click', function(e){
    
    for(i=0; i<detalles.length; i++){
        detalles[i].classList.remove("detalles2");
        
        
    }
    
    if (e.target.getAttribute("class")==="boton-c1") {
        console.log("samischa");
        e.target.parentElement.nextElementSibling.classList.add("detalles2")
    }
})

//boton modo oscuro

let toggle = document.querySelector(".toggle");
let body = document.querySelector("body")
let comentarios = document.querySelector(".fb-comments")
let iframe = document.getElementById("i1")


//toggle.addEventListener('click', function(){
//    if(this.firstChild.getAttribute("class")==="icon-sun"){
//        this.firstChild.classList.replace("icon-sun","icon-moon");
//        body.classList.add("to1");
//    }
//    else {
//        this.firstChild.classList.replace("icon-moon","icon-sun");
//        body.classList.remove("to1");
//    }
//    
//})

toggle.addEventListener('click', function(){
    body.classList.toggle("to1");
    if(body.classList.contains('to1')){
        localStorage.setItem('tema-oscuro', 'true');
        toggle.firstChild.classList.replace("icon-sun","icon-moon");
        comentarios.setAttribute('data-colorscheme','dark');
        iframe.setAttribute('src', '../ifr-footer2/index.html');
        
    }
    else {
        localStorage.setItem('tema-oscuro', 'false');
        toggle.firstChild.classList.replace("icon-moon","icon-sun");
        comentarios.removeAttribute('data-colorscheme');
        iframe.setAttribute('src', '../ifr-footer1/index.html');
    }
});

if(localStorage.getItem('tema-oscuro') === 'true'){
    body.classList.add('to1');
    toggle.firstChild.classList.replace("icon-sun","icon-moon");
    comentarios.setAttribute('data-colorscheme','dark');
    iframe.setAttribute('src', '../ifr-footer2/index.html');
}
else{
    body.classList.remove('to1');
    toggle.firstChild.classList.replace("icon-moon","icon-sun");
    comentarios.removeAttribute('data-colorscheme');
    iframe.setAttribute('src', '../ifr-footer1/index.html');
}












