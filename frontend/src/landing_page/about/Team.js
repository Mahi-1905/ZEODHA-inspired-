import React from 'react';

function Team() {
        
    return(
        <div className = "container">
         <div className = "row p-3 mt-5  mb-5 border-top">

            <h1 className="text-center">People</h1>
            
            </div>   

            
         <div className = "row p-3   text-muted " style = {{lineHeight:"1.8",fontSize:"1.2em"}}>

            <div className = "col-6 p-5 text-center">
                
            <img src='media\image\nithinKamath.jpg' style={{borderRadius:"100%",width:"50%"}}/>
                
                <h4 className="mt-5">Nithin</h4>


                <h5>Founder CEO</h5>

            </div>


            <div className = "col-6 p-5">
                <p> Nithin </p>

                <p>He</p>   

                <p>Playing</p>

             <p>Connect on <a href="">Homepage</a> / <a href="">tradingQnA</a> / <a href="">Twitter</a></p>
                
                 

            
               
               


            </div>
            
            </div>   


          
        

        </div>
    );

}
    



export default Team;