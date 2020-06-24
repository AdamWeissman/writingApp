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

  async question1 () { 
    await this.switchboard.makeInput("Hi, What's your name?", "firstName")
  }

  async question2 () {
    await this.switchboard.makeInput("What do you want to call this project?", "projectName")
  }

  async question3 () {
    await this.switchboard.makeInput("What's the main premise of this story?", "thePremise")
  }

  async questionLoop () {
    this.questions = [async () => { await this.question1()}, async () => { await this.question2()}, async () => { await this.question3()}]
    
    for await (let element of this.questions) {
      // console.log(element)
      element().then(alert("yo"))
    }

    // this.questions[0]().then(
    //   alert("one")).then(
    //   this.questions[1]()).then(
    //     alert("two")).then(
    //       this.questions[2]()).then(
    //         alert("three"))

  }

  turnItOn(){
    this.switchboard.theSetup.addEventListener('click', () => {
      this.switchboard.theSetup.innerHTML = ""
      this.switchboard.compressedLookOff()
      //this.switchboard.makeInput("Hi, What's your name?", "firstName")
    }, { once: true});
  }
  
  mainLoop () {
    this.switchboard.compressedLook()
    this.turnItOn()
    this.questions = [() => { this.question1()}, () => { this.question2()}, () => { this.question3()}]
    this.questionLoop()

    };
}
  

const rTT = new runTimeThing(talker, story, switchboard)

rTT.mainLoop()

