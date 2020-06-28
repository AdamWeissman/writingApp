import { Talker } from './talker.js'
import { Story } from './underlyingStructure.js'
import { SwitchBoard } from './switchboard.js'

let talker = new Talker()
const story = new Story()
const switchboard = new SwitchBoard(talker, story)


class runTimeThing {
  constructor (t, s, swb) {
    this.talker = t
    this.story = s
    this.switchboard = swb
  }

  questioner (question, tracker, reply) {
    return this.switchboard.makeInput(question, tracker, reply)
  }
  
  questions = [
    () => this.questioner("Hi, What's your name?", "firstName", "Nice to meet you "),
    () => this.questioner("What do you want to call this story?", "projectName", "Your project is: "),
    () => this.questioner("What's the main premise of this story?", "thePremise", "Your premise is: "),
    () => this.questioner("What's the theme of your story?", "row1theme", "Your story's theme will be: "),
    
    () => this.questioner("Come up with an event that dramatizes your theme: ", "row1col1", "Your first event is: "),
    () => this.questioner("Provide another event that's more dramatic than the previous: ", "row1col2", "Your second event is: "),
    () => this.questioner("Think of another event that builds on the implicit cumulative risks: ", "row1col3", "The midpoint event is: "),
    () => this.questioner("Come up with an event that feels like a thematic capstone to all the previous events: ", "row1col4", "... Your events so far are: "+`${this.story.row1col1}`+". The second is: "+`${this.story.row1col2}`+". The middle of your story is "+`${this.story.row1col3}`+" and right before the climax: "),
    () => this.questioner("Think of a climactic event that would end in catharsis, epiphany, and resolution... or calamity, frustraion, and disaster.  A final event, that summarizes all previous struggles.", "row1col5", "The contextual event for the climax of your story is: " )
  
  ]

  async questionLoop() {
    const story = this.story
    for (const question of this.questions) {
      await question()
      continue
    }
  }

  turnItOn(){
    this.switchboard.theSetup.addEventListener('click', () => {
      this.switchboard.theSetup.innerHTML = ""
      this.switchboard.compressedLookOff()
      // debugger;
      this.questionLoop()
      return console.log("naiice")
      //this.switchboard.makeInput("Hi, What's your name?", "firstName")
    }, { once: true});
  }
  
  
  addEventListenersLoop (arrayOfThingsThatNeedButtons) {
    for (const thing of arrayOfThingsThatNeedButtons) {
        thing()

      // thing.addEventListener('click', () => {
      // this.talker.speak("nothing to see here")
      // })
    }
  }

  async buttonAdder(theButton, theValue) {
    theButton.addEventListener('click', () => {
      theButton.value = theValue
      console.log("this is: ", theButton.value())
      theButton.innerHTML = " "//theButton.value()
      alert(theButton.value())
    })

    //theButton.innerHTML = await this.onlyIfText(theButton, theValue)
  }

  // async onlyIfText (theButton, theValue) {
  //   return new Promise(resolve => {
  //     "house"
  //     resolve()
  //     }
  //   )
  // }


  makeThese = [
  () => this.buttonAdder(switchboard.rowAlabel, () => story.row1theme),
  () => this.buttonAdder(switchboard.rowAcolumn1, () => story.row1col1),
  () => this.buttonAdder(switchboard.rowAcolumn2, () => story.row1col2),
  () => this.buttonAdder(switchboard.rowAcolumn3, () => story.row1col3),
  () => this.buttonAdder(switchboard.rowAcolumn4, () => story.row1col4),
  () => this.buttonAdder(switchboard.rowAcolumn5, () => story.row1col5)
  ]

  mainLoop () {
    this.switchboard.compressedLook()
    this.turnItOn()
    this.addEventListenersLoop(this.makeThese)
    }
}  

const rTT = new runTimeThing(talker, story, switchboard)

rTT.mainLoop()

