import React from "react";

let Card = (props) => {
return(
    <>
    <div className="container text-center">
        <div className="row mt-3">
            <div className="col">
                <div className="card rounded-0">
                    <img src="https://picsum.photos/id/70/500/325" className="card-img-top rounded-0" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col rounded-0">
            <div className="card">
                <img src="https://picsum.photos/id/75/500/325" className="card-img-top rounded-0" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card rounded-0">
                <img src="https://picsum.photos/id/95/500/325" className="card-img-top rounded-0" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card rounded-0">
                <img src="https://picsum.photos/id/152/500/325" className="card-img-top rounded-0" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        </div>
    </div>            
    </>
)
};
export default Card