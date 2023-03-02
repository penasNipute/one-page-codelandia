
import './Form.css'


export function Form(){

  return(
    <div className="form">
        <div className="container">
          <h3>Entre em contato</h3>
          <input type="text" placeholder='Nome' />
          <input type="email" placeholder='E-mail' />
          <input type="tel" min={9} maxLength={13} placeholder='Telefone' />
          <textarea resize="none" rows="10" placeholder='Mensagem...'></textarea>
          <button>Enviar mensagem</button>
        </div>
      </div>
      
  )
} 