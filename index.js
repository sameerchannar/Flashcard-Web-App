var cards = [];

class Card {
    constructor(word, definition) {
        this.word = word;
        this.definition = definition;
    }
    getWord() {
        return this.word;
    }
    getDefinition() {
        return this.definition;
    }

}

window.onload = function() {
    document.getElementById("review").disabled = true;
}



function createCard() {
    //create a div to house the creation-specific elements.
    var creationContainer = document.createElement('div');
    creationContainer.setAttribute("class", "creationContainer");
    document.body.appendChild(creationContainer);
    var creationDiv = document.createElement('div');
    creationDiv.setAttribute("class", "creationDiv");
    creationContainer.appendChild(creationDiv);

    var creationHeader = document.createElement("header");
    creationHeader.setAttribute("class", "creationHeader");
    creationHeader.innerHTML = "Create your new card below.";
    creationDiv.appendChild(creationHeader);

    //create word field
    var createWordField = document.createElement("INPUT");
    createWordField.setAttribute("class", "createWordField");
    createWordField.setAttribute("id", "createWord");
    createWordField.setAttribute("type", "text");
    creationDiv.appendChild(createWordField);
    //create Word label
    var createWordLabel = document.createElement("LABEL");
    createWordLabel.setAttribute("for", "createWord");
    createWordLabel.innerHTML = "Word:";
    creationDiv.insertBefore(createWordLabel, createWordField);

    //create definition field
    var createDefinitionField = document.createElement("INPUT");
    createDefinitionField.setAttribute("class", "createDefinitionField");
    createDefinitionField.setAttribute("id", "createDefinition");
    createDefinitionField.setAttribute("type", "text");
    creationDiv.appendChild(createDefinitionField);
    //create Word label
    var createDefinitionLabel = document.createElement("LABEL");
    createDefinitionLabel.setAttribute("for", "createDefinition");
    createDefinitionLabel.innerHTML = "Definition:";
    creationDiv.insertBefore(createDefinitionLabel, createDefinitionField);

    //create submit button
    var submit = document.createElement("BUTTON");
    submit.innerHTML = "Submit";
    submit.setAttribute("class", "submit");
    creationDiv.appendChild(submit);

    submit.onclick = function() {
        var newCard = new Card(createWordField.value, createDefinitionField.value);
        cards.push(newCard);
        document.getElementById("review").disabled = false;
        creationDiv.remove();
    }

    
    
}

var reviewOpen = false;

function reviewCards() {
    if (cards.length >= 1 && reviewOpen == false) {
        reviewOpen = true;
        document.getElementById("review").disabled = true;
        document.getElementById("create").disabled = true;

        var reviewContainer = document.createElement('div');
        reviewContainer.setAttribute("class", "reviewContainer");
        document.body.appendChild(reviewContainer);


        //currcard
        var currCard = document.createElement('div');
        currCard.setAttribute("class", "currCard");
        reviewContainer.appendChild(currCard);
        var c = document.createElement("BUTTON");
        c.setAttribute("class", "c");
        currCard.appendChild(c);



        //create navigation and quit buttons
        var reviewDiv = document.createElement('div');
        reviewDiv.setAttribute("class", "reviewDiv");
        reviewContainer.appendChild(reviewDiv);

        var prv = document.createElement('BUTTON');
        prv.innerHTML = "Previous";
        var nxt = document.createElement('BUTTON');
        nxt.innerHTML = "Next";
        reviewDiv.appendChild(prv);
        reviewDiv.appendChild(nxt);
        
        var qt = document.createElement("BUTTON");
        qt.setAttribute("class", "qt");
        
        qt.innerHTML = "Quit to Home";
        qt.onclick = function() {
            document.getElementById("review").disabled = false;
            document.getElementById("create").disabled = false;

            reviewOpen = false;
            reviewContainer.remove();
        }
        reviewDiv.appendChild(qt);
    
        


        //display the cards
        function displayCard(index) {
            //adjust previous and next button availability
            if (index <= 0) {
                prv.disabled = true;
            }
            else {
                prv.disabled = false;
            }
            if (index >= cards.length - 1) {
                nxt.disabled = true;
            }
            else {
                nxt.disabled = false;
            }


            //adjust which card is shown
            var showing = "word";
            c.innerHTML = cards[index].getWord();

            //handle user moving to next or previous card
            nxt.onclick = function() {
                index++;
                displayCard(index);
            }
            prv.onclick = function() {
                index--;
                displayCard(index)
            }

            //handle user clicking on card to view other side
            c.onclick = function() {
                if (showing == "word") {
                    
                    currCard.style.transform = "rotateY(180deg)";
                    c.style.transform = "rotateY(180deg)";

                    c.innerHTML = cards[index].getDefinition();

                    showing = "definition";
                    
                    

                }
                else {
                    currCard.style.transform = "rotateY(0deg)";
                    c.style.transform = "rotateY(0deg)";

                    c.innerHTML = cards[index].getWord();

                    showing = "word";

                }
                currCard.style.transition = "0.2s"
                

                    


            }
            
        }

        var index = 0;
        displayCard(index);
        
    }
    else {
        document.getElementById("review").disabled = true;
    }
    

}