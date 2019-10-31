var disclosuresShowHide = false;

function processBtndisclosures (){
    disclosuresShowHide = !disclosuresShowHide;
    let disclosures = document.getElementById('disclosures__content');
    if(disclosuresShowHide){
        disclosures.style['display'] = 'block';
    }else{
        disclosures.style['display'] = 'none';
    }
}

let btn_disclosures = document.getElementById('btn__disclosures');
btn_disclosures.addEventListener('click',processBtndisclosures);