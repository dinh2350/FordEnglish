var showHideHappen = false;
function processBtnHappen (){
    showHideHappen = !showHideHappen;    
    let happen_item = document.getElementsByClassName('happen__item_show_hide');
    let value_btn = document.getElementById('value__happen__show_hide_btn');
    for (const element of happen_item) {
        if(showHideHappen){
            element.style['display'] = 'block';
            value_btn.innerText = 'View Less';
        }
        else{
            element.style['display'] = 'none';
            value_btn.innerText = 'View ALL';
        }
    }
}

let btn_happen_show_hide = document.getElementById('happen__show_hide_btn');
btn_happen_show_hide.addEventListener('click',processBtnHappen);