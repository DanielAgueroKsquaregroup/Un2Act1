var inpTxt = document.getElementById('InputText');
const actBtn = document.getElementById('ActionButton');

actBtn.addEventListener('click', printInput);

function printInput(e){
    e.preventDefault();
    let element = inpTxt.value;
    
    console.log(element);
    
    let result = (function (count){
        if(count === null) return 0;
        
        return count.length;
    })(element.match(/a/g));

    console.log(result);

    let article = letter => aOrAn(letter);

    article(element);
}

function aOrAn(element){
    if(element.match(/^([aeiou])/i) == null){
        console.log('A');
    } else{
        console.log('An');
    }
}