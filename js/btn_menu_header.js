
var showHide = false;

function processBtnMenu (){
    showHide = !showHide;
    let menu = document.getElementById('mobie__menu');
    if(showHide){
        menu.style['display'] = 'block';
    }else{
        menu.style['display'] = 'none';
    }
}

let btn_menu_mobie = document.getElementById('btn_menu_mobie');
btn_menu_mobie.addEventListener('click',processBtnMenu);
console.log(btn_menu_mobie);