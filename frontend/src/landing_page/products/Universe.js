import React from 'react';

import Hero from "./Hero";
import Leftimage from "./Leftimage";
import Rightimage from "./Rightimage";

function Universe() {
        
    return(
        <div className ="container mt-5">
        <div className ="row text-center">
            <h1>The Zerodha Universe</h1>

            <p>Extend your trading and investment experience even further with our partner platforms</p>

       


        <div className="col-4 p-3 mt-5">
            <img src= "media\image\zerodhaFundhouse.png" />

            <p className="text-small text-muted"> </p>

        </div>

        
        <div className="col-4 p-3 mt-5">
            <img src= "media\image\sensibullLogo.svg" />

            <p className="text-small text-muted"> </p>
            
        </div>
        
        
        <div className="col-4 p-3 mt-5">
            <img src=" "   />
        </div>

       
        <div className="col-4 p-3 mt-5">
            <img src="media\image\streakLogo.png"  />
        </div>


        <div className="col-4 p-3 mt-5">
            <img src="media\image\smallcaseLogo.png"   />
        </div>
      
        <div className="col-4 p-3 mt-5">
            <img src="media\image\dittoLogo.png" />
        </div>

        <button className='p-2 btn btn-primary fs-5 mb-5' style = {{width:"20%",margin:"0 auto"}}>Sing UP</button>




        </div>
        </div>
    );

}

export default Universe;