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

/* 
Exercise 02
Add a link back to the source of the text after the paragraph tag. (https://forcemipsum.com/)
*/

function link(){
    let linkItem = document.createElement("a");
    linkItem.setAttribute("href", "https://forcemipsum.com/");
    linkItem.setAttribute("target", "_blank");
    let linkText = document.createTextNode(" Go to source"); 
    linkItem.appendChild(linkText)
    document.querySelector(".paragraph").appendChild(linkItem)
}


/* ---------------------------------------------------- */

/*
Exercise 03
Split each new sentence on to a separate line in the paragraph text.
A sentence can be assumed to be a string of text terminated with a period (.) 
*/

function newLime(){
    let text = document.querySelector(".paragraph").innerText
    let splitText = text.split(".")
    console.log(splitText)
    let newText = splitText.map((item)=>{
        let newItem = ''
        newItem = `${item} <br>`
        return newItem
    })
    console.log(newText)
    document.querySelector(".paragraph").innerHTML = newText
}


/* ---------------------------------------------------- */


/* 
Exercise 04
Count the number of words in the paragraph tag and display the count afer the heading. You can assume that all words are separated by one singular whitespace. 
*/

function count(){
    let text = document.querySelector(".paragraph").innerText
    let splitText = text.split(" ")
    console.log(splitText)
    console.log(splitText.length)

    let count = document.createElement("p")
    let countResult = document.createTextNode(`The number of words is ${splitText.length}`)
    count.appendChild(countResult)
    document.querySelector(".Heading").appendChild(count)

}