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
  
  mainLoop () {
    this.switchboard.compressedLook(),
    this.switchboard.turnItOn()  
    // so the debugger i just put in will work
    } 

  question1 () {
    this.switchboard.makeInput("Hi, What's your name?", "firstName")
  }
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