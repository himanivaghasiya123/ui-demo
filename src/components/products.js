import React from 'react'
import './product.scss'
import Image from 'next/image'
import Heart from '../images/heart.svg'
import Product from '../images/Rectangle 29438.svg'

export default function products() {
    return (
        <div className='products-sec'>
            <div className='container'>
                <div className='products-wrapper'>
                    <div className='filter-header-block'></div>
                    <div className='products-block'>
                        <div className='filter-block'></div>
                        <div className='product-block'>
                            <div className='product-info'>
                                <Image
                                    src={Product}
                                    width={'36px'}
                                    height={'36px'}
                                    alt="Picture of the author"
                                    className='product-img'
                                />
                                <h3>PRODUCT NAME</h3>
                                <div className='discription'><p>Sign in or Create an account to see pricing</p><Image
                                    src={Heart}
                                    width={'36px'}
                                    height={'36px'}
                                    alt="Picture of the author"
                                /></div>
                            </div>
                            <div className='product-info'>
                                <Image
                                    src={Product}
                                    width={'36px'}
                                    height={'36px'}
                                    alt="Picture of the author"
                                    className='product-img'
                                />
                                <h3>PRODUCT NAME</h3>
                                <div className='discription'><p>Sign in or Create an account to see pricing</p><Image
                                    src={Heart}
                                    width={'36px'}
                                    height={'36px'}
                                    alt="Picture of the author"
                                /></div>
                            </div>
                            <div className='product-info'>
                                <Image
                                    src={Product}
                                    width={'36px'}
                                    height={'36px'}
                                    alt="Picture of the author"
                                    className='product-img'
                                />
                                <h3>PRODUCT NAME</h3>
                                <div className='discription'><p>Sign in or Create an account to see pricing</p><Image
                                    src={Heart}
                                    width={'36px'}
                                    height={'36px'}
                                    alt="Picture of the author"
                                /></div>
                            </div>
                            <div className='product-info'>
                                <Image
                                    src={Product}
                                    width={'36px'}
                                    height={'36px'}
                                    alt="Picture of the author"
                                    className='product-img'
                                />
                                <h3>PRODUCT NAME</h3>
                                <div className='discription'><p>Sign in or Create an account to see pricing</p><Image
                                    src={Heart}
                                    width={'36px'}
                                    height={'36px'}
                                    alt="Picture of the author"
                                /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
