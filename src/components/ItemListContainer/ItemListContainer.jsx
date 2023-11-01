import libro from "/libro.png"

export const ItemListContainer = ({greeting}) => {
  return (
    <>
 <div className="card  d-flex flex-column align-items-center" >
      <img className="card-img-top w-25" src={libro} alt="Card image cap" />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">Centro de estudios</h5>
        <p className="card-text">Buen día {greeting} como estas hoy?</p>
        <a href="#" className="btn btn-primary justify-content-center">Empecemos</a>
        
      </div>
    </div>

    
    </>
    
  )
}

