import './Card.css'


export function Card (props){

  return(
    <div className="card">
             
                <div style={ {backgroundColor:props.cor}} className="color-content">

                </div>
                <div  className="text-content">
                  <h1  >Título do card</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
                  </p>
                </div>
              </div>
  )
}