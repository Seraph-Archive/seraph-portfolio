import React from "react";

function Portfolio() {
    return (
        <div>
            <h1>PORTFOLIO</h1>
            <div className="card-group">
                <div className="card ">
                    <img src={require("../assets/images/dog.jpg")} className="card-img-top forceImage" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Future Pet Place</h5>
                        <p className="card-text">A pet finding application</p>
                        <a href="https://lilwill13.github.io/Future-Pet-Place/" className="btn btn-dark">Check it out!</a>
                        <a href="https://github.com/LILWill13/Future-Pet-Place" className="btn btn-dark">Github</a>
                    </div>
                </div>
                <div className="card ">
                    <img src={require("../assets/images/war.png")} className="card-img-top forceImage" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">This is War!</h5>
                        <p className="card-text">A web-based game!</p>
                        <a href="https://thisiswar.herokuapp.com/" className="btn btn-dark">Play Now!</a>
                        <a href="https://github.com/jdmill/this-is-war" className=" btn btn-dark">Github</a>
                    </div>
                </div>
                <div className="card ">
                    <img src={require("../assets/images/war.png")} className="card-img-top forceImage" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">This is War 2: Return of the Dark Lord</h5>
                        <p className="card-text">A react based game!</p>
                        <p className="card-text">Coming soon</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio