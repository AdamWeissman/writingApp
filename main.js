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

  // question1 () { 
  //   this.switchboard.makeInput("Hi, What's your name?", "firstName")
  // }

  // question2 () {
  //   this.switchboard.makeInput("What do you want to call this project?", "projectName")
  // }

  // question3 () {
  //   this.switchboard.makeInput("What's the main premise of this story?", "thePremise")
  // }
  
    async mainLoop () {
      this.switchboard.compressedLook()
      await this.switchboard.turnItOn()//.then
      //(this.switchboard.questionLoop())
      // this.questions = [() => { this.question1()}, () => { this.question2()}, () => { this.question3()}]
      
      // this.switchboard.compressedLook() 
      // for (let element of this.questions) {
      //   async () => new Promise(element())
      //   };
    };
}
  

const rTT = new runTimeThing(talker, story, switchboard)

rTT.mainLoop()

// I typed this in zoom chat too
// but you can't access variables in your program in the console
// you would have to put a debugger
 // here you will have access to everything above
// not that i can see from what you've shown me
// try running it with debugger!



// switchboard.compressedLook()
// switchboard.turnItOn()
//switchboard.makeInput("Hi, What's your project?", "projectName")
//}

// where is firstName set?