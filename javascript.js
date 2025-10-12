
let total_num = ''; //global variable

const clear = () =>{
    location.href = 'html.html';
    alert("helo")
}

const logic = () =>{
    total_num = document.querySelector('.display').textContent
    
    let first_num = forfirstnum(total_num)
    console.log(first_num)

    let operation = foroperation(total_num)
    console.log(operation)

    let second_num = forsecondnum(total_num)
    console.log(second_num)

    let result;
    result = parseFloat(result)
    
    switch(operation){
        case '+':
            result = first_num + second_num
            break;
        case '-':
            result = first_num - second_num
            break;
        case '*':
            result = first_num * second_num
            break;
        case '/':
            result = first_num / second_num
        
    }
    const print = document.querySelector('.display');
    print.textContent = result;
}

const printvalue = (num) =>{ //to display the entered operations
    total_num = total_num + num;
    const display = document.querySelector('.display');
    display.textContent = total_num;
}

const checkdigit = (digit) =>{
    let count = 0;

    digit = parseInt(digit)
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    for(i=0; i<= numbers.length; i++){
        if(digit == numbers[i]){
            ++count
        }
    }
    if(count == 1){
        return true
    }
    else{
        return false
    }
}
const forfirstnum = (num) =>{
    let i = 0;

    let f_num = 0;

    while(checkdigit(num[i]) != false){
        f_num = f_num * 10  + parseInt(num[i]);
        i++;
    }

    return f_num;
}
const foroperation = (num) =>{
    let i = 0;

    while(checkdigit(num[i]) != false){
        i++
    }

    return num[i];
}
const forsecondnum = (num) => {
    let i = 0;
    num = Array.from(num)

    while(checkdigit(num[i]) != false){
        i++
    }
    let new_array = num.slice(i+1)

    let s_num = 0;

    for(j=0;j<new_array.length;j++){
        s_num = s_num*10 + parseInt(new_array[j])
    }

    return s_num
}