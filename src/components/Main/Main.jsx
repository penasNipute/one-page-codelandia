import './Main.css'
import { Card } from '../Card/Card'

let colors = [
  "#FF6363",
  "#63ECFF",
  "#F363FF",
  "#63FF73",
  "#FFDD63",
  "#6663FF"
]

export function Main(){
  return(
    <div className="main">
        <div className="container">
          {colors.map( (color, i) => {
            
            
            return(
              <Card cor={color} key={color+i}/>
            )
          }) 
          }        
        </div>
      </div>
  )
}