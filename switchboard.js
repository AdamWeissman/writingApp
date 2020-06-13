export class SwitchBoard {
  constructor (speech) {
    this.talker = speech 
    this.main = document.querySelector('main')
    this.theSetup = document.getElementById('theSetup')
    this.theSlice = document.getElementById('theSlice')
    
    this.act1 = document.getElementById('act1')
    this.act2 = document.getElementById('act2')
    this.act3 = document.getElementById('act3')
    this.act4 = document.getElementById('act4')
    this.act5 = document.getElementById('act5')

    this.rowAlabel = document.getElementById('unityAlabel')
    this.rowBlabel = document.getElementById('unityBlabel')
    this.rowClabel = document.getElementById('unityClabel')
    this.rowDlabel = document.getElementById('unityDlabel')
    this.rowElabel = document.getElementById('unityElabel')

    this.rowAcolumn1 = document.getElementById('unityA1o5a_col1')
    this.rowAcolumn2 = document.getElementById('unityA2o5a_col2')
    this.rowAcolumn3 = document.getElementById('unityA3o5a_col3')
    this.rowAcolumn4 = document.getElementById('unityA4o5a_col4')
    this.rowAcolumn5 = document.getElementById('unityA5o5a_col5e')

    this.rowBcolumn1 = document.getElementById('unityB1o3a_col1')
    this.rowBcolumn2 = document.getElementById('unityB2o3a_col2')
    this.rowBcolumn3 = document.getElementById('unityB3o3a_col3c')
    this.rowBcolumn4 = document.getElementById('unityB1o2b_col4')
    this.rowBcolumn5 = document.getElementById('unityB2o2b_col5e')

    this.rowCcolumn1 = document.getElementById('unityC1o2a_col1')
    this.rowCcolumn2 = document.getElementById('unityC2o2a_col2b')
    this.rowCcolumn3 = document.getElementById('unityC1o3b_col3')
    this.rowCcolumn4 = document.getElementById('unityC2o3b_col4')
    this.rowCcolumn5 = document.getElementById('unityC3o3b_col5e')

    this.rowDcolumn1 = document.getElementById('unityD1o1a_col1a')
    this.rowDcolumn2 = document.getElementById('unityD1o2b_col2')
    this.rowDcolumn3 = document.getElementById('unityD2o2b_col3c')
    this.rowDcolumn4 = document.getElementById('unityD1o1c_col4d')
    this.rowDcolumn5 = document.getElementById('unityD1o1d_col5e')

    this.rowEcolumn1 = document.getElementById('unityE1o1a_col1a')
    this.rowEcolumn2 = document.getElementById('unityE1o1b_col2b')
    this.rowEcolumn3 = document.getElementById('unityE1o2c_col3')
    this.rowEcolumn4 = document.getElementById('unityE2o2c_col4d')
    this.rowEcolumn5 = document.getElementById('unityE1o1d_col5e')


    this.setStakes= document.getElementById('setStakes')
    this.stakesSubmit = document.getElementById('stakesSubmit')
    this.stakes1 = document.getElementById('stakes1')
    this.stakes2 = document.getElementById('stakes2')
    this.stakes3 = document.getElementById('stakes3')
    this.stakes4 = document.getElementById('stakes4')
    this.stakes5 = document.getElementById('stakes5')

  }
  
  compressedLook () {
    this.theSlice.style.display = "none"
    this.act1.style.display = "none"
    this.act2.style.display = "none"
    this.act3.style.display = "none"
    this.act4.style.display = "none"
    this.act5.style.display = "none"

    this.rowAlabel.style.display = "none"
    this.rowBlabel.style.display = "none"
    this.rowClabel.style.display = "none"
    this.rowDlabel.style.display = "none"
    this.rowElabel.style.display = "none"
    

    this.setStakes.style.display = "none"
    this.stakesSubmit.style.display = "none"

  }

  getTheStakes () {
    this.setStakes.style.display = ""
    this.stakesSubmit.style.display = ""
  }


  compressedLookOff () {
    // switchboard.theSlice.style.display = "none"
    //switchboard.theSlice.style.display = ""
    this.act1.style.display = ""
    this.act2.style.display = ""
    this.act3.style.display = ""
    this.act4.style.display = ""
    this.act5.style.display = ""

    this.rowAlabel.style.display = ""
    this.rowBlabel.style.display = ""
    this.rowClabel.style.display = ""
    this.rowDlabel.style.display = ""
    this.rowElabel.style.display = ""
  }

  turnItOn(){
    this.theSetup.addEventListener('click', () => {
      this.talker.speak("Hello, Mira.  What do you think of the pretty colors?");
      this.talker.wait(3000)
      this.theSetup.innerHTML = ""
      this.getTheStakes()
      this.compressedLookOff()
    }, { once: true});

  }
 
  submitStakes() {
    switchboard.submitStakes.addEventListener('click', () => {
    this.talker.speak("Thank you for submitting.");
    this.talker.wait(3000)
    switchboard.setStakes.innerHTML = ""
    let theStory = new Story(switchboard.stakes1, switchboard.stakes2, switchboard.stakes3, switchboard.stakes4, switchboard.stakes5)
    }, { once: true})
  }

}
