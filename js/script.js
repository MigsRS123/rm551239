
//Recuperando o botão com o getElementById
const botão = document.getElementById('btn-1');

// Recuperando um item expecifico com a função
//querySelector(parâmetro)
// const seletor = document.querySelector("li")
// console.log(seletor.textContent)

// Recuperar uma lista de emlemtos com a função
// querySelectorAll 
const seletores = document.querySelectorAll("li");

seletores.forEach( (Item)=>{

    if (Item.textContent == "Item-15") {
        let meuItem = Item;
        console.log('Items selecionados : ${Item.textContent}');
        meuItem.textContent = "Tá dominado"
    }

})

//setTimeOut
//setInterval
//Random
//Math.Cell
//Math.Random
//Math.Floor

