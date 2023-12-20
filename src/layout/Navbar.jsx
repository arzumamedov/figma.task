import React, { useContext } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { BasketContext } from '../context/BasketContext'
function Navbar() {
    const { basket } = useContext(BasketContext)

    return (
        <>
            <div className='navOne'>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span>Shop Now</span></p>
                <div className='language'>
                    <p>English</p>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
            <div className='navTwo'>
                <div className='navTwoLeft'>
                    <h2>Exclusive</h2>
                </div>
                <div className='navTwoCenter'>
                    <Link to={'/'}><p>Home</p></Link>
                    <p>Contact</p>
                    <p>About</p>
                    <p>Sign Up</p>
                </div>
                <div className='navTwoRight'>
                    <input type="text" placeholder='What are you looking for' />
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-regular fa-heart"></i>
                    <Link to={"/basket"}><i class="fa-solid fa-cart-shopping"> <sup>{basket.length}</sup></i></Link>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Navbar