import 'bootstrap/dist/css/bootstrap.css'
import type { CardProp } from './CardProp'

function Card(cardprop : CardProp ) {
    return(
        <>
        <div className="card">
            <div className="card-header">
                {cardprop.header}
            </div>
                <div className="card-body">
                    <h5 className="card-title">{cardprop.title}</h5>
                    <p className="card-text">{cardprop.description}</p>
                    <a href="#" className="btn btn-primary">{cardprop.buttontext}</a>
                </div>
            </div>
        </>
    );
}
export default Card