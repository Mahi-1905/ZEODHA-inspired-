import React from "react";

function Rightimage({ imageURL, productName, productDesription, learnMore }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                        <a href={learnMore} style={{ marginLeft: "50px" }}>
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="col-6">
                    <img src={imageURL} alt={productName} />
                </div>
            </div>
        </div>
    );
}

export default Rightimage;
