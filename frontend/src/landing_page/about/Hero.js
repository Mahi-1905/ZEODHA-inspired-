import React from 'react';

function Hero() {
        
    return(
        <div className = "container">
         <div className = "row p-5 mt-5  mb-5">

            <h1 ClassName="fs-2 text-center">
                We pioneered the discount broking model in India<br/>Now, we are breaking
                ground with our technology.
            </h1>
            
            </div>   

            
         <div className = "row p-5 mt-5 border-top text-muted fs-6" style = {{lineHeight:"1.8",fontSize:"1.2em"}}>

            <div className = "col-6 p-5">
                <p>
                    we kick-started

                </p>

                <p>
                   Today
                </p>

                <p>
                    over +1 core
                </p>

            </div>


            <div className = "col-6 p-5">
                <p>
                   In addition
                </p>

                <p>
                 <a href="" style={{textDecoration:"none"}}>  Rainmatter </a> </p>

            
               
               

                <p>
                    And
                </p>

            </div>
            
            </div>   


          
        

        </div>
    );

}

export default Hero;