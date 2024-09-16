import React from "react";

let Jumbotron = (props) => {
return(
    <>
        <div className="container">
            <div className="container pb-5 pt-5 mt-3 ps-5 pe-3" style={{background:'#ccc', margin: '2px' }}>
                <div className="row">
                    <div className="col"><h1 style={{ fontSize:'80px' }}>A Warm Welcome!</h1></div>
                </div>
                <div className="row"> 
                    <div className="col"><p>{props.content}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col"><button type="button" class="btn btn-primary">Call to action!</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)
};

export default Jumbotron