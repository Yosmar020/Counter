let count = 0;
let valueNumber = document.querySelector('.value');
let btns = document.querySelectorAll('.btn');

btns.forEach(function (btn){
    btn.addEventListener('click',e => {
        const styles = e.currentTarget.classList;
        if(styles.contains('btn__increase')){
            count++;
        }else if(styles.contains('btn__decrease')){
            count--;
        }else{
            styles.contains('btn__reset') 
            count = 0;
        }
        valueNumber.textContent = count;
        if(count > 0){
            valueNumber.style.color = 'green';
        }else if(count < 0){
            valueNumber.style.color = 'red';
        }else {
            valueNumber.style.color = "black";
        }
    });
});
























// document.addEventListener('click',e => {
//     if(e.target === btnIncrement){
//         counter++;
//         text.textContent = counter;
//         text.style.color = "green";
//     }
//     if(e.target === btnDecrement && counter > 0){
//         counter--;
//         text.style.color = "red";
//         text.textContent = counter;
//     }
// });