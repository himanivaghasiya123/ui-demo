import React from 'react'
import Logo from '../images/Logo.svg'
import SearchNormal from '../images/search-normal.svg'
import Heart from '../images/heart.svg'
import ShoppingBag from '../images/shopping-bag.svg'
import Profile from '../images/profile.svg'
import Image from 'next/image'
import './header.scss'

export default function Header() {
    return (
        <div className='header-sec'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='header-block'>
                    <Image
                        src={Logo}
                        width={'36px'}
                        height={'36px'}
                        alt="Picture of the author"
                    />
                    </div>
                    
                    <h1>LOGO</h1>
                    <div className='header-block'>
                    <Image
                        className='header-icon'
                        src={SearchNormal}
                        width={'24px'}
                        height={'24px'}
                        alt="Picture of the author"
                    />
                    <Image
                    className='header-icon'
                        src={Heart}
                        width={'24px'}
                        height={'24px'}
                        alt="Picture of the author"
                    />
                    <Image
                    className='header-icon'
                        src={ShoppingBag}
                        width={'24px'}
                        height={'24px'}
                        alt="Picture of the author"
                    />
                    <Image
                    className='header-icon'
                        src={Profile}
                        width={'24px'}
                        height={'24px'}
                        alt="Picture of the author"
                    />
                    
                    </div>
                </div>
                <div className='header-nav-wrapper'>
                   <ul>
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                   </ul>
                </div>
            </div>
        </div>
    )
}
