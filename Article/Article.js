/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "GSAP vs. CSS Animations",
    date: "Dec 4th, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "CSS Shapes",
    date: "2000 AD",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

//CREATE ELEMENTS FOR FORM
const addForm = document.createElement("form");
const table = document.createElement("table");
const rowOne = document.createElement("tr");
const rowTwo = document.createElement("tr");
const rowThree = document.createElement("tr");
const rowFour = document.createElement("tr");
const dataTitleOne = document.createElement("td");
const dataTitleTwo = document.createElement("td");
const dataDateOne = document.createElement("td");
const dataDateTwo = document.createElement("td");
const dataParOne = document.createElement("td");
const dataParTwo = document.createElement("td");
const dataParThree = document.createElement("td");
const dataParFour = document.createElement("td");
const btnCont = document.createElement("td");
const titleLabel = document.createElement("label");
const dateLabel = document.createElement("label");
const parLabel = document.createElement("label");
const titleInput = document.createElement("input");
const dateInput = document.createElement("input");
const parInputOne = document.createElement("textarea");
const parInputTwo = document.createElement("textarea");
const parInputThree = document.createElement("textarea");
const addBtn = document.createElement("button");

//STYLE FORM
addForm.style.margin = "20px auto";
addForm.style.width = "20%";
addForm.style.padding = "0 20px 25px";
addForm.style.border = "1px solid lightgrey";
addForm.style.borderRadius = "10px";
addForm.style.backgroundColor = "white";
addForm.style.position = "relative";
addForm.style.height = "auto";
addForm.style.boxShadow = "2px 2px 2px lightgrey";
table.style.height = "100%";

//SET ATTRIBUTES FOR INPUT
titleInput.setAttribute("type", "text");
titleInput.setAttribute("required", "");
dateInput.setAttribute("type", "date");
addBtn.setAttribute("type", "submit");
btnCont.setAttribute("colspan", "2");
//SET STRUCTURE
addForm.appendChild(table);
table.appendChild(rowOne);
table.appendChild(rowTwo);
table.appendChild(rowThree);
table.appendChild(rowFour);
rowOne.appendChild(dataTitleOne);
rowOne.appendChild(dataTitleTwo);
rowTwo.appendChild(dataDateOne);
rowTwo.appendChild(dataDateTwo);
rowThree.appendChild(dataParOne); //for label
rowThree.appendChild(dataParTwo);
// rowThree.appendChild(dataParThree);
// rowThree.appendChild(dataParFour);
rowFour.appendChild(btnCont);
dataTitleOne.appendChild(titleLabel);
dataTitleTwo.appendChild(titleInput);
dataDateOne.appendChild(dateLabel);
dataDateTwo.appendChild(dateInput);
dataParOne.appendChild(parLabel);
dataParTwo.appendChild(parInputOne);
// dataParThree.appendChild(parInputTwo);
// dataParFour.appendChild(parInputThree);
btnCont.appendChild(addBtn);

//SET TEXTCONTENT FOR LABEL
titleLabel.textContent = "Title:";
dateLabel.textContent = "Date:";
parLabel.textContent = "Content:";
addBtn.textContent = "Add";

//INSERT IN DOM
const body = document.querySelector("body");
body.appendChild(addForm);

const td = document.querySelectorAll("td");
td.forEach(function(data) {
  data.style.width = "500px";
  data.style.textAlign = "center";
});

const labelTag = document.querySelectorAll("label");
labelTag.forEach(function(label) {
  label.style.width = "50%";
  label.style.fontSize = "1.3rem";
});

const inputArea = document.querySelectorAll("input");
inputArea.forEach(function(area) {
  area.style.borderRadius = "10px";
  area.style.height = "30px";
  area.style.padding = "5px";
  area.style.width = "90%";
  area.style.textAlign = "center";
  area.style.marginBottom = "20px";
});

const textArea = document.querySelector("textarea");
textArea.style.height = "100px";
textArea.style.width = "100%";
textArea.style.borderRadius = "10px";

addBtn.style.width = "50%";
addBtn.style.margin = "20px auto";
addBtn.style.padding = "10px";
addBtn.style.borderRadius = "10px";
addBtn.style.backgroundColor = "#81c784";
addBtn.style.fontSize = "1.2rem";
addBtn.style.color = "white";
addBtn.style.fontWeight = "700";
addBtn.style.outline = "none";
addBtn.style.border = "0.5px solid #81c784";
addBtn.style.cursor = "pointer";

table.style.padding = "20px";

// addBtn.addEventListener("click", function(e) {
//   data.push({
//     title: `${titleInput.value}`,
//     date: `${dateInput.value}`,
//     firstParagraph: `${parInputOne.value}`,

//     secondParagraph: `${parInputOne.value}`,

//     thirdParagraph: `${parInputOne.value}`
//   });

//   console.log(data);

//   e.preventDefault();
// });

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

function createArticle(obj) {
  //create elements
  const articleContainer = document.createElement("div");
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const firstPar = document.createElement("p");
  const secondPar = document.createElement("p");
  const thirdPar = document.createElement("p");
  const expandBtn = document.createElement("span");
  const collapseBtn = document.createElement("span");

  //for delete btn
  const delBtn = document.createElement("span");

  //setup classes
  articleContainer.classList.add("article");
  articleDate.classList.add("date");
  expandBtn.classList.add("expandButton");
  collapseBtn.classList.add("expandButton", "hide-btn");

  //setup structure
  articleContainer.appendChild(articleTitle);
  articleContainer.appendChild(articleDate);
  articleContainer.appendChild(firstPar);
  articleContainer.appendChild(secondPar);
  articleContainer.appendChild(thirdPar);
  articleContainer.appendChild(expandBtn);
  articleContainer.appendChild(collapseBtn);

  //for delete button
  articleContainer.appendChild(delBtn);

  //add content
  articleTitle.textContent = obj.title;
  articleDate.textContent = obj.date;
  firstPar.textContent = obj.firstParagraph;
  secondPar.textContent = obj.secondParagraph;
  thirdPar.textContent = obj.thirdParagraph;
  expandBtn.textContent = "\u25BC Click to expand";
  collapseBtn.textContent = "\u25b2 Click to Collapse";

  //for delete button
  delBtn.textContent = "\u24e7";

  //Styles for del button
  delBtn.style.position = "absolute";
  delBtn.style.left = "95%";
  delBtn.style.top = "10px";
  delBtn.style.fontSize = "2rem";
  delBtn.style.fontWeight = "700";
  delBtn.style.color = "#81c784";
  delBtn.style.cursor = "pointer";

  //event listener fpr delete button
  delBtn.addEventListener("click", function(e) {
    container.removeChild(e.target.parentNode);
  });

  expandBtn.addEventListener("click", function() {
    articleContainer.classList.toggle("article-open");
    expandBtn.classList.toggle("hide-btn");
    collapseBtn.classList.toggle("hide-btn");
  });

  collapseBtn.addEventListener("click", function() {
    articleContainer.classList.toggle("article-open");
    expandBtn.classList.toggle("hide-btn");
    collapseBtn.classList.toggle("hide-btn");
  });

  return articleContainer;
}

const container = document.querySelector(".articles");

data.forEach(function(item) {
  container.appendChild(createArticle(item));
});

addBtn.addEventListener("click", function(e) {
  data.push({
    title: `${titleInput.value}`,
    date: `${dateInput.value}`,
    firstParagraph: `${parInputOne.value}`,

    secondParagraph: `${parInputOne.value}`,

    thirdParagraph: `${parInputOne.value}`
  });

  container.appendChild(createArticle(data[data.length - 1]));

  e.preventDefault();
});
