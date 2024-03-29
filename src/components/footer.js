import React from 'react'
import './footer.scss'
import Image from 'next/image'
import Logo from '../images/Logo.svg'

export default function footer() {
    return (
        <div className='footer-sec'>
            <div className='container'>
                <div className='footer1-wrapper'>
                    <div className='footer-block'>
                        <div><h3>Be the first to know</h3>
                            <p>Sign up for updates from mettā muse.</p>
                            <div className='subscribe-block'>
                                <input placeholder='Enter your e-mail...' />
                                <button>Subscribe</button>
                            </div></div>

                    </div>
                    <div className='footer-info-block'>
                        <h3>CONTACT US</h3>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                        <h3>Currency</h3>
                        <p>USD</p>
                        <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
                <div className='footer2-wrapper'>
                    <div className='footer-block'>
                        <div className='footer-menu'><h3>mettā muse</h3>
                            <p>About Us</p>
                            <p>Stories</p>
                            <p>Artisans</p>
                            <p>Boutiques</p>
                            <p>Contact Us</p>
                            <p>EU Compliances Docs</p></div>
                        <div className='footer-menu'><h3>Quick Links</h3>
                            <p>Orders & Shipping</p>
                            <p>Join/Login as a Seller</p>
                            <p>Payment & Pricing</p>
                            <p>Return & Refunds</p>
                            <p>FAQs</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p></div>

                    </div>
                    <div className='footer-info-block'>
                        <h3>Follow Us</h3>
                        <div className='fotter-image'>
                            <Image
                                src={Logo}
                                width={'36px'}
                                height={'36px'}
                                alt="Picture of the author"
                            />  <Image
                                src={Logo}
                                width={'36px'}
                                height={'36px'}
                                alt="Picture of the author"
                            />
                        </div>

                        <h3>mettā muse Accepts</h3>
                        <div className='fotter-image'>
                            <Image
                                src={Logo}
                                width={'36px'}
                                height={'36px'}
                                alt="Picture of the author"
                            />  <Image
                                src={Logo}
                                width={'36px'}
                                height={'36px'}
                                alt="Picture of the author"
                            />  <Image
                                src={Logo}
                                width={'36px'}
                                height={'36px'}
                                alt="Picture of the author"
                            />  <Image
                                src={Logo}
                                width={'36px'}
                                height={'36px'}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
