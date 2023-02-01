
/* https://www.youtube.com/watch?v=kLX3t1aV1As&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB&index=14&ab_channel=codebubb */

/*
  Exercise 01
  -----------
  Add 3 additional jobs to the 'Jobs' section of the page by copying the template in the initial 'job-card'.

 <div class="job-card">
            <h3>Software Engineer</h3>
            <h4>$50,0000</h4>
            <ul>
              <li>Node.js</li>
              <li>Git</li>
              <li>AWS</li>
          </ul>
        </div>
*/

let div = document.createElement("div")
div.setAttribute("class","job-card")

let h3 = document.createElement("h3")
let h3Text = document.createTextNode("Support assistant")
h3.appendChild(h3Text)

let h4 = document.createElement("h4")
let h4Text = document.createTextNode("$60,0000")
h4.appendChild(h4Text)

let ul = document.createElement("ul")

let li1 = document.createElement("li")
let li1Text = document.createTextNode("Java")
li1.appendChild(li1Text)

let li2 = document.createElement("li")
let li2Text = document.createTextNode("JavaScript")
li2.appendChild(li2Text)

let li3 = document.createElement("li")
let li3Text = document.createTextNode("PHP")
li3.appendChild(li3Text)

div.appendChild(h3)
div.appendChild(h4)
div.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li3)
ul.appendChild(li2)

let maindiv = document.querySelector(".jobs")

maindiv.appendChild(div)


/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Exercise 02
  -----------
  Update the job titles of the new jobs to be: JavaScript Developer, Java Developer, Python Developer
*/

/* O colchetes pega o item segundo a aparecer no HTML, pois começa a nodelist de tags H3 pelo zero. */


let testtag = document.getElementsByTagName("h3")[3]
testtag.innerText = "Java Developer";



/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  Exercise 03
  -----------
  Update the number of jobs listed in the hero section to indicate how many jobs you have listed in the 'Jobs section'.

*/

let Nodelist = document.querySelectorAll(".job-card")

let spantag = document.getElementById("spanTag")
spantag.innerHTML = Nodelist.length;


/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  Exercise 04
  -----------
  Configure the search input box to filter jobs listed to only match the text that has been provided in the search. Check for the search text in the job title heading.
*/

let jobItems = document.querySelectorAll(".job-card");
let searchButton = document.getElementById("search")
searchButton.addEventListener("input",searchFilter)

function searchFilter(){
for (x=0;x<4;x++){
  jobItems[x].setAttribute("style", "display:none")
};

let searchButtonValue = document.getElementById("search").value
console.log(searchButtonValue)


}




/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  Exercise 05
  -----------
  Configure the 'All jobs' button to reset the search and show all jobs available on the page
*/

