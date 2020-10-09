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



function createCard() {
    //create a div to house the creation-specific elements.
    var creationDiv = document.createElement('div');
    creationDiv.setAttribute("class", "creationDiv");
    document.body.appendChild(creationDiv);

    //create word field
    var createWordField = document.createElement("INPUT");
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
    createDefinitionField.setAttribute("id", "createDefinition");
    createDefinitionField.setAttribute("type", "text");
    creationDiv.appendChild(createDefinitionField);
    //create Word label
    var createDefinitionLabel = document.createElement("LABEL");
    createDefinitionLabel.setAttribute("for", "createDefinition");
    createDefinitionLabel.innerHTML = "Definition:";
    creationDiv.insertBefore(createDefinitionLabel, createDefinitionField);

    //create submit button
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Submit";
    creationDiv.appendChild(btn);

    btn.onclick = function() {
        var newCard = new Card(createWordField.value, createDefinitionField.value);
        cards.push(newCard);
        console.log(cards);
        creationDiv.remove();
    }

    
    
}

function reviewCards() {
    if (cards.length >= 1) {
        //create navigation and quit buttons
        var reviewDiv = document.createElement('div');
        reviewDiv.setAttribute("class", "reviewDiv");
        document.body.appendChild(reviewDiv);
        var prv = document.createElement('BUTTON');
        prv.innerHTML = "Previous";
        var nxt = document.createElement('BUTTON');
        nxt.innerHTML = "Next";
        reviewDiv.appendChild(prv);
        reviewDiv.appendChild(nxt);
        
        var qt = document.createElement("BUTTON");
        qt.innerHTML = "Quit";
        qt.onclick = function() {
            reviewDiv.remove();
        }
        reviewDiv.appendChild(qt);
    
        //currcard
        var c = document.createElement("BUTTON");
        reviewDiv.appendChild(c);


        //display the cards
        function displayCard(index) {
            //adjust which card is shown
            c.innerHTML = cards[index].getWord();

            //handle user moving to next or previous card
            nxt.onclick = function() {
                if (index < cards.length - 1) {
                    index++;
                    displayCard(index);
                }
            }
            prv.onclick = function() {
                if (index > 0) {
                    index--;
                    displayCard(index)
                }
            }

            //handle user clicking on card to view other side
            c.onclick = function() {
                c.innerHTML = cards[index].getDefinition();
            }
            
        }

        var index = 0;
        displayCard(index);

        

        
    }
    else {
        alert("You don't have any cards yet.");
    }
    

}