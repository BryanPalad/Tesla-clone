import React from 'react'
import './footer.css';
import twitter from '../../../../assets/twitter.png';
function Footer() {
  const date = new Date();
    const year = date.getFullYear();
    const footeritems = [`Tesla @ ${year}`];
  return (
    <div className="footer">
      <div className='footer-container'>
        <div className="footer-content">
          <div className='footer-items'>
            <div className='footer-item-one'>
              <div className="first-col">
                <a href="https://www.tesla.com/findus?v=2&bounds=40.64660346738709%2C162.49081%2C1.9762243924741725%2C78.11581000000007&zoom=5&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger%2Cbodyshop%2Cparty&location=kaohsiunggushanteslacenter">
                  Your closest Store and Service Center is 高雄鼓山服務體驗中心</a>
              </div>
              <div className="second-col">
              <a href="https://www.tesla.com/findus?v=2&bounds=40.309125143998656%2C162.85123799999997%2C1.532764927363241%2C78.47623800000002&zoom=5&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger%2Cbodyshop%2Cparty&location=pingtungsupercharger">
              屏東－枋山 Supercharger</a>
              <img src="https://maps.googleapis.com/maps/api/staticmap?scale=2&&center=22.2436730000,120.6637380000&zoom=11&size=203x125&markers=scale:2|icon:https://www.tesla.com/sites/all/modules/custom/tesla_findus_map/assets/icon-supercharger@2x.png|22.2436730000,120.6637380000&maptype=roadmap&style=feature:road.highway|element:geometry.fill|saturation:-100|lightness:50&style=element:geometry.stroke|saturation:-100&style=feature:road|element:labels.text|saturation:-100&style=feature:poi|visibility:off&client=gme-teslamotorsinc&channel=footer-location&signature=AlcqztNLOgqQC30kBwrugIZJyAM="/>
              </div>  
            </div> 
            <div className='footer-item-two'>
            <div className='third-col'>
              <ul>
                <li>Model S</li>
                <li>Model 3</li>
                <li>Model X</li>
                <li>Model Y</li>
                <li>Cybertruck</li>
                <li>Energy</li>
                <li>Roadster</li>
                <li>Semi</li>
                <br/>
                <li>About</li>
                <li>Careers</li>
                <li>Get Newsletter</li>
                <li>Contact</li>
                <li>Tesla Account</li>
              </ul>
              <ul>
                <li>Order a Tesla</li>
                <li>Incentives</li>
                <li>Test Drive events</li>
                <li>Forums</li>
                <li>Accessories & apparel</li>
                <li>Vehicle Recalls</li>
                <br/>
                <li>Investors</li>
                <li>Suppliers</li>
              </ul>
            </div>
            </div>
          </div>
            <div className='footer-end'> 
            <p>{footeritems} | Privacy and Legal</p>
            <a href="https://twitter.com/Tesla" target="_blank" rel='noreferrer'><img alt="twitter" src={twitter}></img></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer