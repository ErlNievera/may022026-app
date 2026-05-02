import 'bootstrap/dist/css/bootstrap.css'

function Card() {
    return(
        <>
        <div className="card">
            <div className="card-header">
                Featured
            </div>
                <div className="card-body">
                    <h5 className="card-title">Happy BirthDay!</h5>
                    <p className="card-text">Just a kid from tondo</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}
export default Card