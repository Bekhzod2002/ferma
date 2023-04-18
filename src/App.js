import React from "react";
import logo from './images/logo.png';
import apple from './images/Download_on_the_App_Store_Badge 1.png';
import phone from './images/phone.png';
import insta from './images/Group 5.png';
import Vk from './images/Group 2.png';
import ok from './images/Group 3.png';
import facebook from './images/Group 4.png';
import './index.scss';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <div className="wrapper">
          <div className="head">  
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="landing">
            <div className="landing__container">
              <div className="texts">
                <div className="textshead">
                  <h6>Lorem - <br/> ipsum dolor sit amet, <br/> consectetuer <br/> adipiscing elit.</h6>
                </div>
                <div className="anneantxt">
                  <li>Aenean commodo ligula eget dolor</li>
                  <li>Aenean massa.</li>
                  <li>Donec pede justo, fringilla vel, aliquet </li>
                  <li>In enim justo, rhoncus ut, imperdiet <br/> <span>Integer tincidunt.</span> </li>
                </div>
                <div className="apple">
                  <img src={apple} alt="apple" />
                  <p className="rutrum">Quisque rutrum</p>
                </div>
              </div>
              <div className="image_part">
              <div className="bigred"></div>
                    <div className="biggreen"></div>
                    <div className="bigblue"></div>
                    <div className="phone">
                        <div className="phone__container">
                          <img src={phone} alt="phone" />
                        </div>
                    </div>
                <div className="blue"></div>
                <div className="green"></div>
                <div className="red"></div>


              </div>

            </div>
          </div>
          <div className="foot">
                <div className="foot__container">
                  <div className="foottxt" >
                      <p>
                        Etiam ultricies nisi vel augue
                      </p>
                  </div>
                  <div className="social">
                    <img src={insta} alt="insta" />
                    <img src={Vk} alt="vk" />
                    <img src={ok} alt="ok" />
                    <img src={facebook} alt="facebook" />
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;
