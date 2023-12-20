import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'
import './basket.css'
function Basket() {
    const { basket, RemoveFromBasket, increaseCount, decreaseCount, count } = useContext(BasketContext)
    return (
        <>
            <div className='productsBasket'>
                <div className='thead'>
                    <div className='product'>Product</div>
                    <div className='price'>Price</div>
                    <div className='quantity'>Quantity</div>
                    <div className='subtotal'>Subtotal</div>
                </div>
                {basket.slice(0, 16).map((item) => (

                    <div className='products'>
                        <div className='imgName'>
                            <i onClick={()=>{RemoveFromBasket(item)}} class="fa-solid fa-circle-xmark"></i>
                            <div className="image">
                                <img src={item.image} alt="" />
                            </div>

                            <h4>{item.name}</h4>

                        </div>
                        <div className='pricee'>
                            <div className='priceB'>{item.price}</div>
                            <div className='countB'>
                                <div className='border'>
                                    {item.count}
                                    <div className='iconCount'>
                                        <i onClick={() => { increaseCount(item) }} class="fa-solid fa-caret-up"></i>
                                        <i onClick={() => { decreaseCount(item) }} class="fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='oldPriceB'>{item.price * item.count}</div>
                        </div>
                    </div>


                ))}
            </div>




            {/* {basket.slice(0, 16).map((x) => (
                    <div className='card'>
                        <div className='wishBg'>
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div className='detailBg'>
                            <i class="fa-regular fa-eye"></i>
                        </div>
                        <div className='add'>
                            <div onClick={() => { RemoveFromBasket(x) }} className='addToCard'><p>Remove from Basket</p></div>
                            <img src={x.image} alt="" />
                        </div>
                        <li className='name'>{x.name}</li>
                        <div className='prices'>
                            <li className='price'>${x.price*x.count}</li>
                            <li className='oldPrice'>{x.oldPrice} </li>
                            <button onClick={() => { decreaseCount(x) }}>-</button>
                            <li>{x.count}</li>
                            <button onClick={() => { increaseCount(x) }}>+</button>
                        </div>
                        <div className='startsC'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <li className='comment'>({x.comments})</li>
                        </div>
                    </div>
                ))} */}
        </>
    )
}

export default Basket