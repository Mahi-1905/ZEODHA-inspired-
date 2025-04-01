import React from 'react';

function Leftimage({
    imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,googleplay,
    appSTORE,
}) {
        
    return(
        <div className="container mt-55">
        <div className="row ">
        <div className="col-4 p-5">
        <img src={imageURL} />
        </div>
        
        
        <div className="col-6 p-5 mt-5">

            <h1>{productName}</h1>

            <p>{productDesription}</p>

            <div>

            <a href={tryDemo}>Try Demo</a>

            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>

            </div>

            <div className="mt-3">

             <a href={googleplay}><img src="media/image/googleplayBadge.Svg"/></a>

             <a href={appSTORE}>
                <img src="media/image/appstoreBadge.svg"
                style={{marginLeft:"50px"}}
                />
             
             </a>

            </div>

        </div>
         </div>    
         </div>
    );

}

export default Leftimage;