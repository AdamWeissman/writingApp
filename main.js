import { Talker } from './talker.js'
import { Story } from './underlyingStructure.js'
import { SwitchBoard } from './switchboard.js'


const talker = new Talker()
let story = new Story() 
const switchboard = new SwitchBoard(talker, story) 

switchboard.compressedLook()
switchboard.turnItOn()
