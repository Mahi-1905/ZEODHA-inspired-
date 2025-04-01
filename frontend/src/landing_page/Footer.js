import React from 'react';

function Footer() {
    return (
        <footer style={{backgroundColor: "rgb(250,250,250)"}}>
            <div className="container border-top mt-5">
                <div className="row mt-5">
                    <div className="col">
                    <img src="media/image/logo.svg" style={{ width: "50%" }}  alt="Logo" />
           
                        
                        <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
                    </div>

                    <div className="col">
                        <p>Company</p>
                        <a href="#">About</a><br/>
                        <a href="#">Product</a><br/>
                        <a href="#">Pricing</a><br/>
                        <a href="#">Referral Programme</a><br/>
                        <a href="#">Careers</a><br/>
                        <a href="#">Zerodha.tech</a><br/>
                        <a href="#">Press & Media</a><br/>
                        <a href="#">Zerodha Cares (CSR)</a><br/>
                    </div>

                    <div className="col">
                        <p>Support</p>
                        <a href="#">Contact</a><br/>
                        <a href="#">Support Portal</a><br/>
                        <a href="#">Z-Content Blog</a><br/>
                        <a href="#">List of Charges</a><br/>
                        <a href="#">Download & Resources</a><br/>
                    </div>

                    <div className="col">
                        <p>Account</p>
                        <a href="#">Open an Account</a><br/>
                        <a href="#">Fund Transfer</a><br/>
                        <a href="#">60 Day Challenge</a><br/>
                    </div>
                </div>

                <div className="mt-5 fs-8 text-muted" style={{fontSize: "14px"}}>  
                    <p>Zerodha Broking Ltd: Member of NSE & BSE - SEBI Registration no.: INZ000031633 CDSL: Depository Services through.</p>
                    <p>Procedure</p>
                    <p>Investments</p>
                    <p>Prevent</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
