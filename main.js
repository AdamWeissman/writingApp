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
    () => this.questioner("What's at stake in this story? In other words, what's the big risk?", "row1risks", "The primary danger in your story will come from: "),
    
    () => this.questioner("What are the stakes that set your story into motion?", "row1col1", "The stakes for act I will be: "),
    () => this.questioner("What stakes are higher than the previous ones?", "row1col2", "Your second level of stakes will be: "),
    () => this.questioner("What stakes make things even riskier than the previous ones?", "row1col3", "Your middle level stakes are: "),
    () => this.questioner("What escalation of risks or stakes would make your story more calamitious?  Especially in the context of "+`${this.story.thePremise}`, "row1col4", "... REMEMBER, the stakes of your story are, for the beginning: "+`${this.story.row1col1}`+". The first escalation is: "+`${this.story.row1col2}`+". The middle of your story is"+`${this.story.row1col3}`+"and right before the climax: "),
    () => this.questioner("What would be the final risks or stakes that best illustrate your premise and illustrate: "+`${this.story.row1risks}`+"?", "row1col5", "The context for the climax of your story is: " )
  
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
      theButton.innerHTML = theButton.value()
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
  () => this.buttonAdder(switchboard.rowAlabel, () => story.row1risks),
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

