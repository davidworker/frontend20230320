const genTable = () => {
    let n1 = document.querySelector('#n1');
    let n2 = document.querySelector('#n2');

    console.log(n1, n2);
    console.log(n1.value, n2.value);
}



let make = document.querySelector('#make');

make.addEventListener('click', genTable);