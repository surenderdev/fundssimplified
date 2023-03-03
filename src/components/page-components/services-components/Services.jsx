import React from "react";
import "./Services.css";
import styled from 'styled-components';

import servicesOne from "../../../assets/imgs/epflservices.jpg";
import servicesTwo from "../../../assets/imgs/maxcapitalservices.jpg"
import servicesThree from "../../../assets/imgs/nriservices.jpg";
import servicesFour from "../../../assets/imgs/p2pservices.jpg";
import servicesFive from "../../../assets/imgs/stocksstation.jpg";
import servicesSix from "../../../assets/imgs/salesservices.jpg";


const servicesTitle = styled.h2`
  font-size: 100px;
  line-height: normal;
  text-align: center;
`;

function Services() {     
    
    return(
         
           <div  className="services_section w-95%">
                
                <div class="contenedor">

                    <div class="card">
                        <div class="card-header">
                            <img src={servicesTwo} alt="MCAPITAL"/>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">Max Capital</h2>
                            <p class="card-description">
                            Max capital has a bunch of options that can maximize your capital. <br />
                            <br /> We offer Algo trading solutions based on state of the art AI-Machine Learning tools. <br /> <br />
                            Our team has rich experience in catering automation solutions. <br />
                            </p>
                            <a href="#" class="btn">Read More</a>
                        </div>
                    </div>


                    <div class="card">
                    <div class="card-header">
                            <img src={servicesThree} alt="NRISERVICES"/>
                    </div>
                        <div class="card-body">
                            <h2 class="card-title">NRI and Foreign Nationals Services</h2>
                            <p class="card-description">
                            You have requirements for cross-border remittances, 
                            Investments in India or liquidating past allocated shares. We provide much needed guidance 
                            and facilitate such transactions as per norms.  <br/> <br/> With over a decade experience of
                            assisting NRI community, You can be assured of streamlined processes with us.
                            </p>
                            <a href="#" class="btn">Read More</a>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-header">
                            <img src={servicesFour} alt="P2PSERVICES"/>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">Peer to Peer Lending</h2>
                            <p class="card-description">
                            In case you want to lend money for earning interest while at the same time, 
                            wish to diversify risk by spreading your investment to multiple credit worthy 
                            verified borrowers (or) looking to swiftly borrow money. <br/>
                            As a lender, you can potentially earn double digit returns, with all the needed 
                            work being done by technology platform. As a borrower you have the flexibility to 
                            approach multiple lenders at the same time.<br />
                            Lets get the job done through leading RBI licensed p2p lending and investing platform. 
                            </p>
                            <a href="https://oxyloans.com/" class="btn">Read More</a>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-header">
                            <img src={servicesOne} alt="IEPF" />
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">IEPF Claims</h2>
                            <p class="card-description">
                            We assist with all kinds IEPF claims, <br />  <br /> whether your share certificates or 
                            Dmat shares are missing; (or) did not receive your expected bonus/rights/dividends. 
                            <br />  <br />
                            <br />We help file IEPF claims as per official guidelines.
                            </p>
                            <a href="/iepf" class="btn">Read More</a>
                        </div>
                    </div>
            
                    
                    <div class="card">
                        <div class="card-header">
                            <img src={servicesFive} alt="STOCKSSTATION"/>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">Stocks Station</h2>
                            <p class="card-description">
                                Coming soon
                            </p>
                            <a href="#" class="btn">Read More</a>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-header">
                            <img src={servicesSix} alt="COLLOBSERVICES"/>  
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">Technical Colloborations</h2>
                            <p class="card-description">
                                Coming Soon
                            </p>
                            <a href="#" class="btn">Read More</a>
                        </div>
                    </div>
                </div>
        </div>

     
  );
  }
    
 
const styleyellowtext = styled.h2`
  font-size: 60px;
  color: #f0ff00;
  line-height: 50px;
  text-align: center;
  
`;

export default Services;