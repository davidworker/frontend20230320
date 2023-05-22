const genTable = () => {
    let n1 = document.querySelector('#n1');
    let n2 = document.querySelector('#n2');

    if (!n1) {
        return;
    }

    if (n1.value <= 0) {
        return;
    }

    if (!n2) {
        return;
    }

    if (n2.value <= 0) {
        return;
    }


    let thead = [];
    thead.push('');

    let result = {};
    for (let i = 1; i <= n1.value; i++) {
        thead.push(i);
        result[i] = [];
        for (let j = 1; j <= n2.value; j++) {
            result[i].push(i * j);
        }
    }

    let table = document.querySelector('#table');
    let theadTr = table.querySelector('thead tr');

    theadTr.innerHTML = '';
    thead.forEach((n, nindex) => {
        theadTr.innerHTML += `<th>${n}</th>`;
        // theadTr.innerHTML = theadTr.innerHTML + `<th>${n}</th>`;
    });


    let tbody = table.querySelector('tbody');
    let tbodyTr = '';
    tbody.innerHTML = '';

    for (let row in result) {
        tbodyTr = `<tr><td>${row}</td>`;
        let columns = result[row];
        columns.forEach(value => {
            tbodyTr += `<td>${value}</td>`;
        });

        tbodyTr += '</tr>';
        tbody.innerHTML += tbodyTr;
    }
}



let make = document.querySelector('#make');

make.addEventListener('click', genTable);