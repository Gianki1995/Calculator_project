const form = document.forms[0];
const showText = document.getElementById('showText');
// const result = document.getElementsByClassName('equal')[0]


console.log(form)

form.addEventListener('click', function(event) {
    let valueButton = event.target.value

    if(valueButton == "AC"){
        showText.value = ""
    }else if(valueButton == "DE"){
        showText.value = showText.value.slice(0, -1)
    }else if(valueButton == "="){
        let resultValue = eval(showText.value)
        showText.value = resultValue
    }
    else{
        showText.value += valueButton
    }
    
    
})

