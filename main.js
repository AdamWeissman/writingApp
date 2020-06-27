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

  question4 () {
    this.switchboard.makeInput("What is the first risk associated with this premise?", "riskUnity", "Your first risk is: ")
  }

  questions = [
    () => { this.question1()},
    () => { this.question2()},
    () => { this.question3()},
    () => { this.question4()},]
  
  // pausometer () {
    // return new Promise(resolve => {
    //   const func = function() { 
    //     console.log('responded')
    //     this.clickyWicky.removeEventListener('click', this.func)
    //     resolve()
    //   }
  //     // this.clickyWicky = document.getElementById("stakesSubmit")
  //   })
  // }

  // async questionLoop () {
  //   for (let element of this.questions) {
  //     element().then(async ()=>(
  //     this.clickyWicky = document.getElementById("stakesSubmit"),
  //     this.clickyWicky.addEventListener('click', this.func),
  //     await this.pausometer()))
  //   } 
  // } 



  //switchGate = "thou shall pass"
  
  // questionLoop () {
  
  //     for (let element of this.questions) {
  //       if (this.switchGate == "thou shall pass") {
  //         //this.questionLoop()
  //         element() //this makes it talk and delivers input
  //         this.switchGate = "thou shalt NOT pass" //this prevents from moving to the next element
  //         this.questions.shift() //this removes the aforementioned element from the loop so next one is up
  //         this.questionLoop()} //this goes back to the top so you can get to the else if
  //       else if (this.switchGate == "thou shalt NOT pass") {
  //         this.clickyWicky = document.getElementById("stakesSubmit")
  //         this.clickyWicky.addEventListener('click', (event) => {
  //           this.switchGate = "thou shall pass" //this allows you to return to the top of the loop
  //           console.log(this.switchGate)
  //           //this.clickyWicky.removeEventListener('click', (event))
  //           this.talker.wait(500)
  //           console.log("what now")
  //           this.questionLoop() })
  //       }        
  //     }
  // } 


  // questionLoop () {
  //   // this.questions = [() => { this.question1()},  () => { this.question2()}, () => { this.question3()}]
  //   let switchGate = "thou shall pass"
  //       for (let element of this.questions) {
  //         if (switchGate == "thou shall pass") {
  //           element()
  //           this.questions.shift()
  //           switchGate = "thou shalt not pass"
            
  //           if (switchGate == "thou shalt not pass" ) {
  //               this.clickyWicky = document.getElementById("stakesSubmit")
  //                 this.clickyWicky.addEventListener('click', (event) => {
  //                   switchGate = "thou shall pass"
  //                   this.talker.wait(1500)
                    
  //                   this.questionLoop()
                    
  //                 })
  //           }
  //         } 
  //       }
  // } 



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

