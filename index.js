let search= document. querySelector('.search-box');
let list = document.querySelector('.lists')

document.querySelector('#explore').onclick= () => {
    search.classList.toggle('active');
    list.classList.remove('active');
    
}

/*menu */ 
document.querySelector('#menu').onclick= () => {
    list.classList.toggle('active');
    search.classList.remove('active');
    
}
window.onscroll = ()=> {
    search.classList.remove('active');
    list.classList.remove('active');
}
// let navbar= document.querySelector('.nav');
