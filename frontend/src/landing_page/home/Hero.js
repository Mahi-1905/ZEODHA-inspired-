import React from 'react';

function Hero() {
    return (
       <div className = 'container p-5 mb-5'>
         <div className ='row text-center'>

          <img src='media/image/homeHero.png' alt ='Hero Image' className='mb-5'/>
           
           <h1 className='mb-5'>
             Invest in everything
           </h1>

           <p>online plateform to invest in stocks, derivatives, mutual funds, and more</p>
            
           <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin : "0 auto"}}>signup</button>

         </div>
          

       </div>   

    );
}

export default Hero;