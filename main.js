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
    () => this.questioner("What realm of risks or stakes are most interesting?  For example: physical, personal, social, existential, or spiritual risks?", "row1risks", "The primary danger in your story will come from: "),
    
    () => this.questioner("What are the stakes that set your story into motion?", "row1col", "The stakes for act I will be: "),
    () => this.questioner("What stakes are higher than the previous ones?", "row1col2", "Your second level of stakes will be: "),
    () => this.questioner("What would be even worse than "+`${this.story.row1col2}`, "row1col3", "Your middle level stakes are: "),
    () => this.questioner("What escalation of risks or stakes would make your story more poignant?  Especially in the context of "+`${this.story.thePremise}`, "row1col4", "... The stakes of your story are, for the beginning: "+`${this.story.row1col1}`+". The first escalation is: "+`${this.story.row1col2}`+". The middle of your story is"+`${this.story.row1col3}`+"and right before the climax: "),
    () => this.questioner("What would be the final risks or stakes that best illustrate your premise and sum up"+`${this.story.row1risks}`+"?", "row1col5", "The context for the climax of your story is: " )
  
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
  
  addEventListenersHere (arrayOfThingsThatNeedButtons) {
    for (const thing of arrayOfThingsThatNeedButtons) {
      console.log("this is :", thing.id)
      thing.addEventListener('click', () => {
      this.talker.speak("nothing to see here")
      })
    }
  }

  makeThese = [switchboard.rowAlabel, switchboard.rowAcolumn1, switchboard.rowAcolumn2, switchboard.rowAcolumn3, switchboard.rowAcolumn4, switchboard.rowAcolumn5]


  mainLoop () {
    this.switchboard.compressedLook()
    this.turnItOn()
    this.addEventListenersHere(this.makeThese)
    }
}  

const rTT = new runTimeThing(talker, story, switchboard)

rTT.mainLoop()

