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

  question1 () { 
    return this.switchboard.makeInput("Hi, What's your name?", "firstName", "Nice to meet you ")
  }

  question2 () {
    return this.switchboard.makeInput("What do you want to call this project?", "projectName", "Your project is: ")
  }

  question3 () {
    return this.switchboard.makeInput("What's the main premise of this story?", "thePremise", "Your premise is: ")
  }

  question4 () {
    return this.switchboard.makeInput("What is the first risk associated with this premise?", "riskUnity", "Your first risk is: ")
  }

  questions = [
    () => this.question1(),
    () => this.question2(),
    () => this.question3(),
    () => this.question4()]
  
 
  async questionLoop() {
    for (const question of this.questions) {
      await question()
      
      // this.waitForThis()
      continue
    }
  }

  turnItOn(){
    this.switchboard.theSetup.addEventListener('click', () => {
      this.switchboard.theSetup.innerHTML = ""
      this.switchboard.compressedLookOff()
      // debugger;
      this.questionLoop()
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

