const logic = () =>{
    alert(document.querySelector("#one").value);
}
 let prev_num = '';

const printvalue = (num) =>{
   

    prev_num = prev_num + num;

    const display = document.querySelector('.display');

    display.textContent = prev_num;
    
}