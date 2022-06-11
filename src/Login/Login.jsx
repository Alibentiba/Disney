import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className='Container' >
          <div className='Content'>
            <div className='CTA'>
              {/* <img className='CTALogoOne' src="/images/cta-logo-one.svg" alt="" /> */}
              <img className='CTALogoOne' src="/src/images/cta-logo-one.svg" alt="" />
              <div className='SignUp'>GET ALL THERE</div>
              <div className='Description'>
                Get Premier Access to Raya and the Last Dragon for an additional fee
                with a Disney+ subscription. As of 03/26/21, the price of Disney+
                and The Disney Bundle will increase by $1.
              </div>
              <img className='CTALogoTwo' src="/images/cta-logo-two.png" alt="" />
            </div>
            <div className='BgImage'/>
          </div>
        </div>
      );
}

export default Login

