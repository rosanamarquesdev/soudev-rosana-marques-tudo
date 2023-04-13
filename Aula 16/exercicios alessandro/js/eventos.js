let d = 1;

while (d <= 31){
    dia.innerHTML += '<option>' + d + '</option>'
    d++;
}


// let m = 2023;
// while (m >= 1950){
//     mes.innerHTML += '<option>' + m + '</option>'
//     m--;
// }


for (let m = 2023; m >= 1950; m--) {
    mes.innerHTML += '<option>' + m + '</option>'
 }