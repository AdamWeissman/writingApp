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
    () => this.questioner("What do you want to call this project?  Try to think of something that sounds cool and captures the essence of your story.", "projectName", "Your project is: "),
    () => this.questioner("What's the main premise of this story?  In other words, what's the hook?  Or, in a Studio Hack kind of way... it's Story 'X' meets Story 'Y'.", "thePremise", "Your premise is: "),
    () => this.questioner("Given your premise "+`${this.story.thePremise}`+" what realm of risks or stakes are most appealing?  Will the risks be: philosphical, religious, scientific, economic, political, revolutionary, aesethic, ethical, related to some type of sport or game, or something else entirely?", "row1risks", "The primary danger in your story will come from: "),
    () => this.questioner("Considering "+`${this.story.row1risks}`+" what type of risk or stakes do you think should kick off the story?  Some examples of things that people fear are: Poverty, Failure, Criticism, Lost Love, Lost Liberty, Sickness, Old Age, and Death.  Try to make it specific, yet brief.", "row1col", "Remember, your entry level risk will be: "),
    () => this.questioner("What would be a secondary risk to follow up your first one? "+`${this.story.row1col1}`, "row1col2", "Your second level of stakes will be: "),
    () => this.questioner("What would be even worse than "+`${this.story.row1col2}`, "row1col3", "Your middle level stakes are: "),
    () => this.questioner("What escalation of risks or stakes would make your story more poignant?  Especially in the context of "+`${this.story.thePremise}`, "row1col4", "In order, your stakes so far are: "+`${row1col1}`+`${row1col2}`+`${row1col3}`+": "),
    () => this.questioner()
  
  ]

 
  async questionLoop() {
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
  
  mainLoop () {
    this.switchboard.compressedLook()
    this.turnItOn()
    }
}  

const rTT = new runTimeThing(talker, story, switchboard)

rTT.mainLoop()

