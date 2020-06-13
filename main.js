import { Talker } from './talker.js'
import { SwitchBoard } from './switchboard.js'


const talker = new Talker()
const switchboard = new SwitchBoard(talker) 

switchboard.compressedLook()
switchboard.turnItOn()







//switchboard.turnItOn()


