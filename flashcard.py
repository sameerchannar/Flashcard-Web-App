#step 1: store database in stack/heap only. all data erased after closing the program

import tkinter
from tkinter import *
import tkinter.messagebox

class Card():
    def __init__(self, word, definition):
        self.word = word
        self.definition = definition
    known = False
    def getWord(self):
        return self.word
    def getDefinition(self):
        return self.definition
    def getKnown(self):
        return self.known

flashcards = [] #contains flashcard objects
starred = [] #contains indices only



def createCard(w, d):
    c1 = Card(w,d)
    flashcards.append(c1)



def createPanel():
    newWindow = tkinter.Toplevel()
    Lw = tkinter.Label(newWindow, text="Word")
    Lw.pack()
    Ew = Entry(newWindow)
    Ew.pack()
    Ld = tkinter.Label(newWindow, text="Definition")
    Ld.pack(padx=100)
    Ed = Entry(newWindow)
    Ed.pack()

    s = tkinter.Button(newWindow, text = "Submit", command = lambda:[createCard(Ew.get(), Ed.get()), newWindow.destroy()])
    s.pack()

def displayAnswer(currFrame, index):
    #display the answer
    ans = flashcards[index].getDefinition()
    l = tkinter.Label(currFrame, text=ans)
    l.pack(side = RIGHT)

def reviewCards():
    newWindow = tkinter.Toplevel()


    #add frames
    topframe = Frame(newWindow)
    topframe.pack()
    bottomframe = Frame(newWindow)
    bottomframe.pack(side = BOTTOM)



    if len(flashcards) == 0:
        err = Text(newWindow)
        err.insert(INSERT, "Error: No cards exist.")
        err.pack()
    else:
        #iterate through cards
        index = 0
        
        b = tkinter.Button(topframe, text = flashcards[index].getWord())
        b.configure(command = lambda: [displayAnswer(topframe, index), b.configure(state=DISABLED)])

        b.pack(side = LEFT)
        n = tkinter.Button(bottomframe, text = "Next Card")
        n.pack(side = RIGHT)
        p = tkinter.Button(bottomframe, text = "Previous Card")
        p.pack(side = LEFT)





top = tkinter.Tk()

#create button
create = tkinter.Button(top, text ="Create card", command = createPanel)
create.pack()

#review button
review = tkinter.Button(top, text = "Review cards", command = reviewCards)
review.pack()

top.mainloop()



