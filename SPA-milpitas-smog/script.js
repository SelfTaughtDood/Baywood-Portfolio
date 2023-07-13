const article = document.querySelector('article')
const button = document.querySelectorAll('button')
const thirdColumn = document.querySelector('third-column')



button.forEach(btn  => {
  btn.addEventListener('click', () => {

    switch(btn.innerText) {
      case 'Home': article.innerHTML = `
      <h3>Welcome to Milpitas Smog Test Only</h3>
        <p>
          We are a STAR station and can smog test nearly all cars, trucks, vans, SUVs, and hybrids vehicles.
        </p>
        <p>
          We are fast and friendly, providing the best smog check service in Milpitas!
        </p>
        <ul>
          <li>Pass or free retest for 2000 and newer model vehicles </li>
          <li>1999 and older model vehicles by appointment only</li>
        </ul>
        <b>Services</b>
        <ul>
          <li>Regular biennial California smog check</li>
          <li>Smog certification required at a STAR station</li>
          <li>Change of ownership</li>
          <li>Out of state initial registration</li>
        </ul>
      `;
      break;
      case 'About Us': article.innerHTML = `
      <h3>About Milpitas Smog Test Only</h3>
        <p>
          We are a family-owned business and have been serving the greater Milpitas and San Jose communities since 2004 from our easy access location on South Main Street.
        </p>

        <img src="./images/tool_dynamometer.jpg" alt="">
        <strong>Dynamometer</strong>
        <p>
          BAR-certified smog test equipment required for 
          two-wheel drive or part-time four-wheel drive, light duty vehicles up to 9,999 pound GVWR. Alternate test will be done for full-time four-wheel drive vehicles.
        </p>
        <ul>
          <li>Installed in the ground for faster set up and test</li>
          <li>Securely controls the vehicle during the smog test </li>
          <li>Easy drive-up procedure for rear-wheel drive vehicles</li>
          <li>Better for low-profile vehicles</li>
        </ul>
        <img src="./images/tool_DelphiEVAP2010.jpg" alt="">
        <b>Delphi EVAP 2010 Low Pressure Fuel Evaporative Tester </b>
        <p>Measures evaporative emissions caused by leaks
          in the fuel tank or associated evaporative hoses 
          and devices for 1976-1995 model year vehicles.
        </p>
      `;
      break;
      case 'FAQ': article.innerHTML = `
      <h3>Frequently Asked Questions</h3>
        <b>Is my vehicles subject to a smog check?</b>
        <ol>
          <li>
            <b>Bienniel Smog Check for Registration Renewals</b>
            <ul>
              <li>
                Gas powered-vehicles from model year 1976 and newer are subject to the smog check program with the following exceptions:
              </li>
              <p>
                i. Gas-powered vehicles six model years and newer are exempt from the biennial smog check inspection requirement. 
              </p>
              <p>
                ii. Two-cylinder vehicles, electric-powered vehicles, two-cycle-powered vehicles (not including rotary engines), and motorcycles are exempt from the biennial smog check inspection requirement.
              </p>
              <li>
                Diesel-powered vehicles 1998 and newer, up to 14,000 pounds gross vehicles weight rating are subject to smog check program. However, the gas-powered exemptions (see above) do not apply to diesel-powered vehicles.
              </li>
            </ul>
          </li>
          <li>
            <b>Change of Ownership</b>
            <p>
              A valid smog certificate is required, if you are selling or buying a vehicle. Smog certifications are good for 90 days from the date of issuance.
            </p>
          </li>
          <li>
            <b>Initial Registration for Out-of-State Vehicles</b>
            <p>
              All 1976 to current year vehicles are required to obtain a smog check certificate of compliance prior to initial registration in California. Vehicles being initially registered in California that were previously registered in another state are exempt from the biennial smog check inspection requirements, if the vehicle is a 1975 or older model.
            </p>
          </li>
        </ol>

        <b>
          My Registration Renewal Notice says “Smog Certification Required at a STAR Station”.  What does it mean?
        </b>
        <p>
          STAR stations are smog check stations that meet higher performance standards established by the Bureau of Automotive Repair (BAR).  In order to comply with state law, BAR directs a portion of the vehicles registered in Enhanced Smog Check Areas to STAR stations. Enhanced Areas are those parts of the state with "serious", "severe", or "extreme" ozone pollution problems.  Directed Vehicles must have their smog check done at one of these stations.
        </p>

        <b>
          If my Registration Renewal Notice says "Smog Certification Required” (not Directed Vehicles), can I have smog check done at a STAR Test-Only Station?
        </b>
        <p>
          Yes, you can. STAR Test-Only facilities are licensed smog check stations that are allowed to perform any type of smog check for hybrid, gas- or diesel-powered vehicles.
        </p>
        <b>What is an "EVAP" Test?</b>
        <p>
          The Low-Pressure Fuel Evaporative Test (LPFET) checks for leaks in the fuel tank or associated evaporative system hoses and devices.  As of December 2007, the state of California requires this test during a smog check for 1976 to 1995 model year vehicles, including all pre-OBDII vehicles.
        </p>

        <p>Exemptions: </p>
        <ul class="mb-5">
          <li>
            Vehicles not originally equipped, and not required by state or federal law to be equipped, with a fuel evaporation control system;
          </li>
          <li>
            Vehicles with two or more fully operational fuel tanks;
          </li>
          <li>
            Vehicles powered exclusively by compressed natural gas (CNG), liquid natural gas (LNG) or liquid petroleum gas( LPG);
          </li>
          <li>
            Vehicles for which there are no filler neck adapters;
          </li>
          <li>
            Vehicles in their original factory configuration, with a fuel evaporative canister and fuel vapor hoses that are not accessible or would require the partial dismantling of the vehicle in order to gain access to them for testing.
          </li>
        </ul>
      `;
      break;
      case 'Coupons' : article.innerHTML = `
      <h3>Miplitas Smog Test Only Coupon</h3>
      <h1>Coupon coming soon!</h1>
      
      `;
      break;
      case 'Directions': article.innerHTML = `
      <section class="directions">
        <h3>Location and Directions</h3>
        <p>1638 S. Main Street</p>
        <p>Milpitas, CA 95035</p>
        <p>(408) 262-9885</p>
        <br>
        <b>Hours</b>
        <p>Mon - Sat: 9:00AM - 5:00PM</p>
        <p>Thurs: CLOSED</p>
        <p>Sun: 10:00AM - 3:30PM</p>
        <br>

        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.2668698040757!2d-121.90446298545348!3d37.40716664099814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc94ca43f9ae9%3A0x351e895631f099bb!2sMilpitas%20Smog%20Test%20Only!5e0!3m2!1sen!2sus!4v1681059302149!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      
      `;
      
      ;

      
      break;
    }
  } )
})