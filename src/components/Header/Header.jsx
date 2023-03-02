import './Header.css'
import  Image  from "../../assets/image.svg" 

export function Header(){

  return(
    <div className="header">
      <div className="container">
        <div className="text-box w-400">
          <h1>
            Lorem ipsum dolor sit amet
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.
          </p>
          <button>Botão</button>
        </div>
        <div className="img-box w-400">
          <img src={Image} alt="Logo"/>
        </div>
      </div>
    </div>
  )
}