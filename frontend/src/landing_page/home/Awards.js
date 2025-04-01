import React from 'react';

function Awards() {

    return (
          <div className='container'>
            <div className='row'>
                <div className='col-6'>
                  
                <img src='media/image/largestBroker.svg' /> 

                </div>



                <div className='col-6 p-5 mt-3'>

                    <h1>Largest stock broker in India</h1>

                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all the volumes in india daily by trading and investing in:</p>
                         <div className='row'>
                            <div className='col-6 p-5'>

                            <ul>
                        <li>
                            <p>Futures and options</p>
                            
                        </li>

                        <li>
                            <p>Commodity derivatives</p>
                        </li>

                        <li>
                            <p>currency derivatives</p>
                        </li>

                    </ul>
                            </div>

                            <div className='col-6 p-5'>
                                <ul>
                        <li>
                            <p>stocks & IPOs</p>
                            
                        </li>

                        <li>
                            <p>Direct mutual funds</p>
                        </li>

                        <li>
                            <p>Bonds and Go</p>
                        </li>

                    </ul></div>
                         </div>
                        
                         <img src='media/image/pressLogos.svg' style={{width:"90%"}}/>
                </div>
            </div>

          </div>
        
    );
}


export default Awards;