import React, { useState } from 'react';
import '../Service/Costestimator.css';
import WhwwtService from '../Service/whwwt.png';

const Costestimator = () => {
  const [pinCode, setPinCode] = useState('');
  const [area, setArea] = useState('');
  const [noOfCarParking, setNoOfCarParking] = useState('1');
  const [areaOfBalconyAndUtility, setAreaOfBalconyAndUtility] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
    console.log('Pincode:', pinCode);
    console.log('Super Built Up Area:', area);
    console.log('No Of Car Parking:', noOfCarParking);
    console.log('Balcony & Utility Area:', areaOfBalconyAndUtility);
  };

  return (
    <div>
      
      <a href="https://wa.me/7772927777" target="_blank" rel="noopener noreferrer">
      <img src={WhwwtService} alt="" width="50px" className="whatsapp_btn" />
    </a>

      <div className='main_cost'>
        <h1 className='haa'> House Construction Cost Calculator </h1>
        <p className='ppp'> Fill out the form below to get an estimate of house construction costs. Speak to our technical expert for a more accurate pricing</p>

        <form onSubmit={handleSubmit} className="mt-2form" autoComplete="off">

          

          <div className="form1">
            <div className="formsection1">
              <input
                type="text"
                id="pinCode"
                className="form__field"
                placeholder="Pincode of your plot / land*"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
              <label htmlFor="pinCode" className="form__label"></label>
            </div>

            <div className="input-wrapper">
              <input
                type="number"
                id="area"
                min="0"
                className="form__field"
                placeholder="Super Built Up Area (sq.ft)*"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
              <label htmlFor="area" className="form__label"></label>
            </div>
          </div>

          <div className="form2">
            <label htmlFor="noOfCarParking" className="formsection"></label>
            <select
              name="noOfCarParking"
              id="noOfCarParking"
              className="form__field"
              value={noOfCarParking}
              onChange={(e) => setNoOfCarParking(e.target.value)}
            >
              <option value="0">00</option>
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
            </select>
            <br /><br />

            <div className="input-wrapper">
              <input
                type="number"
                min="0"
                id="areaOfBalconyAndUtility"
                className="form__field"
                placeholder="Balcony & Utility Area (sq.ft)*"
                value={areaOfBalconyAndUtility}
                onChange={(e) => setAreaOfBalconyAndUtility(e.target.value)}
              />
              <label htmlFor="areaOfBalconyAndUtility" className="form__label"></label>
            </div>
          </div>

          <div className="form__action__btns">
            <button type="submit" className="btn">Estimate Cost<span className="icon-arrow-right"></span></button>
          </div>
        </form>

        <p className='ppp'>Disclaimer : The costs indicated are approximate costs for each resource. Actual cost estimates may vary for your city. Please check with ourr technical expert for a more accurate pricing or visit our BricknBolt office for a custom cost estimate as per your requirement. This amount is an approximate amount for construction area & it does not include compound wall area.</p>
        <h1>Compare Packages</h1>
        <section id="compare-packages" class="main-section bb-compare-packages orange-faded-bg mt-5">
          <div class="container">
            <div class="wrapper d-flex align-items-center">
              <p class="section-subtitle mb-0 mr-2">Currently showing for</p>
              <div class="form__group mb-0 pt-0"><div class="selectric-wrapper selectric-form__field selectric-form__field--theme">
                <div class="selectric-hide-select selectric-is-native">
                  <select name="city" id="city" class="form__field form__field--theme" tabindex="-1">
                    <option value="Bhopal">Bhopal</option>
                    <option value="Indore">Indore</option>
                  </select>
                </div>
              </div>
              </div>
            </div>
            <div class="bb-site-small-container">
              <div class="bb-compare-package-wrapper">
                <div class="bb-compare-package-select">
                  <div class="form__row">
                    <div class="form__group">
                      <div class="selectric-wrapper selectric-form__field selectric-hover">
                        <div class="selectric-hide-select selectric-is-native">
                          <select name="bb-compare-one" id="bb-compare-one" class="form__field" tabindex="-1">
                            <option value="Basic Package" data-title="Basic Package">₹1,780/sq.ft - Basic Package</option>
                            <option value="Classic Package" data-title="Classic Package" disabled="">₹1,940/sq.ft - Classic Package</option>
                            <option value="Premium Package" data-title="Premium Package">₹2,250/sq.ft - Premium Package</option>
                            <option value="Royale Package" data-title="Royale Package">₹2,480/sq.ft - Royale Package</option>
                          </select>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="bb-compare-package-accordian">
                  <div class="bb-package-accordian">
                    <div class="accordion" id="bb-compare-package-accordian">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}

export default Costestimator;
