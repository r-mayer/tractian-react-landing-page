
import { useEffect, useState } from 'react';
import ButtonArea from '../ButtonArea/ButtonArea';
import FeaturesItems from '../FeaturesItems/FeaturesItems';
import './Features.css';

function Features() {
    useEffect(() => {
        const menu = document.querySelectorAll('.menu-item');
        menu.forEach((item) => {
            item.addEventListener('click', handleClick);
            console.log("estou rodando os event listeners");
        })
        function handleClick() {
            menu.forEach((item) => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            setMenuActive(this.id);        
        }
      });

    const menu = document.querySelectorAll('.menu-item');
    const [menuActive, setMenuActive] = useState("plug");


    return(
        <div className="features container">
            <img src="./blueball.svg" alt="a" className='bg-blueball-features'/>
            <div className="feature-menu">
                <div className="menu-item active" id="plug">01 Plug and Play Sensor</div>
                <div className="menu-item" id="monitoring">02 Online Monitoring</div>
                <div className="menu-item" id="asset">03 Asset Management</div>
            </div>
            <div className="features-wrapper">
                <div className="features-call">
                    <p className="features-call-pre-title">EFFORTLESS PREDICTIVE MAINTENANCE</p>
                    <p className="features-call-title">Keep your team and machines performing at their best</p>
                    <div className="features-btn-area">
                        <ButtonArea />
                    </div>

                </div>
                <div className="features-items">
                    {menuActive === "plug" &&   
                        <FeaturesItems img="./feature-img1.png" title="Advanced IoT technology to connect your assets" text="Our sensors send data about your machine via a 3g / 4g network with no need of tons of gateways. Just attach the sensor to the location to be monitored and everything is ready: monitor the condition of your machine in real time." />
                    }
                    {menuActive === "monitoring" &&   
                        <FeaturesItems img="./feature-img2.png" title="Platform working for you" text="Automatic insights, mechanical backlash detection, misalignment, uncoupling, and Tractian's unique AI models for each type of machine." />
                    }
                    {menuActive === "asset" &&   
                        <FeaturesItems img="./feature-img3.png" title="Work Orders Automation" text="Use online procedures to organize checklists and inspections. Centralize your team's routine and leverage the activities of each employee through automation and metrics." />
                    }
                </div>
            </div>
        </div>
    )
}

export default Features;