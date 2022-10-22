import React from 'react'
import './support.scss';

const Support = () => {
  return (
    <div className="support-container">
      <div className="support-title">
        <div className='support-title-items'>
        <h2>Support</h2>
        <ul>
          <li><a>Ordering</a></li>
          <li><a>Delivery</a></li>
          <li><a>Owners</a></li>
          <li><a>Forums</a></li>
        </ul>
      </div>
      <hr className='horizontal-line'/>
      </div>
      <div className="delivery">
        <div className='delivery-title'>
        <h2>Taking Delivery</h2>
        </div>
        <div className="delivery-desc">
            <p>
            Taking delivery of your new Tesla is a quick and easy experience. 
            With Tesla Tutorial videos available right on your touchscreen, 
            you can learn about the features and functions of your Tesla from the driver’s seat.
            </p>
            <br/>
            <p>
            After placing your order, sign in to your Tesla Account to complete the required delivery tasks and prepare for delivery. 
            The latest updates on delivery timing, VIN assignment and appointment details will be available in your Tesla Account.
            </p> 
            <br/>
            <p>
            Depending on location and eligibility, your Tesla will be available for pickup at a delivery center or will be delivered to your location. 
            Please note that delivery dates may change based on many factors including logistics and completion of your pre-delivery tasks.
            </p>
        </div>
        <div className="delivery-methods">
        <h4>Pick Up from a Tesla location</h4>
          <ul>
            <li><a href="#express-delivery">Express Delivery</a></li>
          </ul>
          <h4>Delivered to your location</h4>
          <ul>
            <li><a href="#tesla-direct">Tesla Direct</a></li>
            <li><a href='#carrier-direct'>Carrier Direct</a></li>
          </ul>
        </div>
        <div className='express-delivery'>
            <h2>Express Delivery</h2>
            <p>Take delivery at a Tesla Location.</p>
            <iframe className='iframe' width="677" height="380" src="https://player.vimeo.com/video/429474790?h=5ac711f50e" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='express-desc'>
              <div className='express-desc-steps'>
            <p>
            After arriving at your delivery location, locate and access your Tesla by using the Tesla app. 
            We will provide your required registration documents, along with temporary registration and plates, depending on your state.
            </p>
            <h4>Express Delivery Steps</h4>
            <ol>
              <li>Sign available agreements, submit final payment and accept delivery in your Tesla app.</li>
              <li>Unlock and access your Tesla through the Tesla app.</li>
              <li>Complete your registration documents (subject to state requirements).</li>
            </ol>
                <p>
                Explore the features at your own pace with the in-car Tesla Tutorials and Owner’s Manual. 
                Watch the Tesla Tutorial videos anytime on your touchscreen, in the Tesla app or on Tesla Support.
                </p>
                <br/>
                <ul>
                  <li><a href='/support'>Back to Top</a></li>
                </ul>
              </div>
            </div>
        </div>
        <div className='tesla-direct'>
            <h2>Tesla Direct</h2>
            <p>Tesla will deliver your car to an eligible delivery address.</p>
            <iframe className='iframe' width="677" height="380" src="https://player.vimeo.com/video/429474949?h=5f8f20d18b" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='tesla-desc'>
              <div className='tesla-desc-steps'>
            <p>
            Your Tesla is delivered directly to your provided delivery address. Once your Tesla has arrived, 
            sign any remaining documents and drive away within minutes. Tesla Direct is only available in certain areas to customers within 
            an approved distance from their local Tesla delivery center. Not all customers will qualify.
            </p>
            <h4>Tesla Direct Steps</h4>
            <ol>
              <li>Once your car arrives, sign available agreements, submit payment and accept delivery in your Tesla app.</li>
              <li>Unlock and access your Tesla through the Tesla app.</li>
              <li>Follow the provided registration documents (subject to state requirements) and mail them back in a pre-paid envelope within 24 hours.</li>
            </ol>
                <p>
                Explore the features at your own pace with the in-car Tesla Tutorials and Owner’s Manual. 
                Watch the Tesla Tutorial videos anytime on your touchscreen, in the Tesla app or on Tesla Support.
                </p>
                <br/>
                <ul>
                  <li style={{marginBottom: '30px'}}><a href='/support'>Back to Top</a></li>
                </ul>
              </div>
            </div>
        </div>
        <div className='carrier-direct'>
            <h2>Carrier Direct</h2>
            <p>Take delivery from an independent carrier.</p>
            <div className='carrier-desc'>
              <div className='carrier-desc-steps'>
            <p>
            This fee-based option is available for customers who prefer to have their car delivered,
            and who live more than 220 miles from the nearest Tesla delivery location. 
            These deliveries are performed by independent carriers for a fee, based on your final delivery location. 
            For faster delivery, we recommend taking delivery at a Tesla delivery location.
            </p>
            <p>
            Talk to your Tesla Advisor if you would like to add this delivery option to your order. 
            Your delivery date will come directly from the carrier service. Tesla will provide a delivery date, 
            which will be confirmed by the independent carrier once your car is in transit.
            </p>
            <h4>Before Shipment</h4>
            <ol>
              <li>Sign and return any applicable financing, leasing or trade-in documents. Tesla will coordinate shipment upon receipt of payment and signed documents.</li>
              <li>Sign available agreements and submit payment in your Tesla app.</li>
              <li>If you have a trade-in, prepare it for pickup.</li>
              <li>You will receive a delivery date from Tesla, which will be confirmed by the independent carrier once your car is in transit.</li>
            </ol>
            <h4>Delivery Day</h4>
            <ol>
              <li>You will receive a delivery timing update from the independent carrier.</li>
              <li>Accept delivery of your Tesla in your Tesla app.</li>
              <li>Sign and mail any remaining documents in the car via a pre-paid shipping envelope within 24 hours.</li>
            </ol>
                <p>
                Note: For Hawaii-outer-island deliveries, we will coordinate shipping to your preferred Hawaiian island through locally-approved shipping companies. 
                The shipping company will deliver your Tesla directly to your island, and will connect with you directly for payment. 
                Prices are set by the shipping provider and may vary.
                </p>
                <p>Prior to receiving your car, we recommend watching the Tesla Tutorial videos and downloading the Tesla app.</p>
                <br/>
                <ul>
                  <li style={{marginBottom: '30px'}}><a href='/support'>Back to Top</a></li>
                </ul>
              </div>
            </div>
        </div>
        <div className='faquestions'>
            <h2>Frequently Asked Questions</h2>
            <h4>How should I prepare for delivery?</h4>
            <div className='faquestions-desc'>
              <div className='faquestions-desc-steps'>
            <p>
            To prepare for delivery, complete the following steps.
            </p>
            <ol>
              <li>Download the Tesla app, which will pair with your Tesla. You will need the Tesla app to remotely unlock and access your car when taking delivery.</li>
              <li>Complete all pre-delivery tasks in your Tesla Account.</li>
              <li>Once you recieve a VIN, upload proof of insurance in the Tesla app.</li>
              <li>Submit final payment.</li>
              <li>If applicable, accept outstanding agreements (available in your Tesla app within 24 hours of your delivery appointment).</li>
            </ol>
                <p>
                Explore the features at your own pace with the in-car Tesla Tutorials and Owner’s Manual. 
                Watch the Tesla Tutorial videos anytime on your touchscreen, in the Tesla app or on Tesla Support.
                </p>
                <br/>
                <h4>Where can I find the latest updates on my delivery timing?</h4>
                <p>
                Your Tesla Account will be the source of truth for your delivery timing after placing your order. 
                Delivery timing estimates are subject to change, and your Tesla Account will always reflect the latest details. 
                If you need a car sooner than your delivery estimate, explore our existing inventory options.
                </p>
                <ul>
                  <li style={{marginBottom: '30px'}}><a href='/support'>Back to Top</a></li>
                </ul>

                <p>Tags: Ordering and Delivery</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Support