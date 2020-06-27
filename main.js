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
    () => this.questioner("What do you want to call this project?", "projectName", "Your project is: "),
    () => this.questioner("What's the main premise of this story?", "thePremise", "Your premise is: "),
    () => this.questioner("What is the first risk associated with this premise?", "riskUnity", "Your first risk is: "),
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
    this.turnItOn().then(() =>
    console.log("when will this show up?")
    )}
}  

const rTT = new runTimeThing(talker, story, switchboard)

rTT.mainLoop()

