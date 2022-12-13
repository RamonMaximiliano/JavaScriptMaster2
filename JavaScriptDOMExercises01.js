/* https://www.youtube.com/watch?v=EHF7xBUAmrQ&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB&index=11&ab_channel=codebubb */

/*
Exercise 01:
Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
--- Criar um array com o texto todo
--- Fazer um map para novo array, e colocar style yellow nos com mais de 8 letras
--- Transformar o novo array em string
--- pegar a paragraph e colocar o inner HTML com o novo texto
*/

function changeBack(){
    let paragraph = document.querySelector(".paragraph").innerText
    let paragraphArray = paragraph.split(" ")
    let finalArray = paragraphArray.map((item)=>{
        let newItem = ''
        console.log(item.length)
        if(item.length >= 8){
            newItem = `<span style="background-color:yellow; color:green;">${item}</span>`
        } else {
            newItem = item 
        }
        return newItem
    })
    let finalFormattedArray = finalArray.join(" ")
    document.querySelector(".paragraph").innerHTML = finalFormattedArray
} 

/* ---------------------------------------------------- */

