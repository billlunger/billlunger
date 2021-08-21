import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
      <div className='footer-container'>
        {/* <section className="footer-subscription">
          <p className="footer-subscription-heading">
              Join the Adventure newsletter to receive our best vacation deals
          </p>
          <p className="footer-subscription-text">
              You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form>
              <input
              type='email'
              name='eamil'
              placeholder='Your Email'
              className='footer-input'
              />
              <Button
              buttonStyle='btn--outline'>Subscribe
              </Button>
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/'>Testimonials</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Destinations</Link>
              <Link to='/'>Sponsorships</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Videos</h2>
              <Link to='/'>Submit Video</Link>
              <Link to='/'>Ambassadors</Link>
              <Link to='/'>Agency</Link>
              <Link to='/'>Influencer</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div> */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              BILL LUNGER
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>BILL LUNGER © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/billnlunger/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/billlunger/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link> */}
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/billlunger/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Footer
