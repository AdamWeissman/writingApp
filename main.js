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
    this.switchboard.makeInput("Hi, What's your name?", "firstName", "Nice to meet you ")
  }

  question2 () {
    this.switchboard.makeInput("What do you want to call this project?", "projectName", "Your project is: ")
  }

  question3 () {
    this.switchboard.makeInput("What's the main premise of this story?", "thePremise", "Your premise is: ")
  }

  

  questionLoop () {
    this.questions = [() => { this.question1()},  () => { this.question2()}, () => { this.question3()}]
  
    for (let element of this.questions) {
      element().then()(
      this.clickyWicky = document.getElementById("stakesSubmit")).
      then()(
      this.clickyWicky.addEventListener('submit', (event) => {
        console.log("OKAY")
      }))
    }
  }   

      // if (this.clickyWicky.onsubmit === true) { break; }
      //   console.log("submit is true");
      // elsif (this.clickyWicky === false) { break; }
      // console.log("submit is false")
    
    // const first = new Promise((resolve, reject) => {
    //   resolve(this.questions[0]())
    // })

    // first.then(async () => (
    //   this.questions[1]()
    //   )
    // ).then(()=>(
    //   this.questions[2]()
    //   )
    // )



  turnItOn(){
    this.switchboard.theSetup.addEventListener('click', () => {
      this.switchboard.theSetup.innerHTML = ""
      this.switchboard.compressedLookOff()
      this.questionLoop()
      //this.switchboard.makeInput("Hi, What's your name?", "firstName")
    }, { once: true});
  }
  
  mainLoop () {
    this.questions = [() => { this.question1()}, () => { this.question2()}, () => { this.question3()}]
    this.switchboard.compressedLook()
    this.turnItOn()
    // const first = new Promise((resolve, reject) => {
    //   resolve(this.turnItOn())
    // })
    // first.then(()=>(
    //   this.question1())
    // )
  }
}  

const rTT = new runTimeThing(talker, story, switchboard)

rTT.mainLoop()

