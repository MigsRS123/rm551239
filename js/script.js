
// //Recuperando o botão com o getElementById
// const botão = document.getElementById('btn-1');

// Recuperando um item expecifico com a função
//querySelector(parâmetro)
// const seletor = document.querySelector("li")
// console.log(seletor.textContent)

// Recuperar uma lista de emlemtos com a função
// querySelectorAll 
// const seletores = document.querySelectorAll("li");

// seletores.forEach( (Item)=>{

//     if (Item.textContent == "Item-15") {
//         let meuItem = Item;
//         console.log('Items selecionados : ${Item.textContent}');
//         meuItem.textContent = "Tá dominado"
//     }

// })

//setTimeOut
//setInterval
//Random
//Math.Cell
//Math.Random
//Math.Floor

let tmp = "";

function mudarCor() {

    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    const cabecalho = document.querySelector('.cabecalho');
    cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

    tmp = setTimeout(mudarCor, 3000);
}

mudarCor();


function mudarCor1() {

    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    const cabecalho = document.querySelector('.banner-1');
    cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

    tmp = setTimeout(mudarCor1, 3000);
}

mudarCor1();



function mudarCor2() {

    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    const cabecalho = document.querySelector('.banner-2');
    cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

    tmp = setTimeout(mudarCor2, 3000);
}

mudarCor2();