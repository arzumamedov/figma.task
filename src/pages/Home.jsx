import React, { useContext, useEffect, useState } from 'react'
import './home.css'
import { BasketContext } from '../context/BasketContext'
function Home() {

  const { addBasket } = useContext(BasketContext)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
      .then((res) => res.json())
      .then((api) => setData(api))
  }, [])

  return (
    <>
      <div className='section1'>
        <div className='section1Left'>
          <div className='leftIcon'>
            <p>Woman's Fashion</p>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div className='leftIconn'>
            <p>Men's Fashion</p>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby's & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </div>
        <div className='section1Right'>
          <div className='rightText'>
            <div className='imgP'>
              <img width={50} src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1703462400&Signature=Ehc6r~QIMMYJt8QLVDfUs8VIY4el~esNY7mbbDhFI0B47RHrpjHJlCktxQE0MNvv~i08cM-JHGG0Sq4PFlHlXl3NWjedT~51T0d5PMkfY0IfO651hTzbDRjqLhmgOQZLoz1Bn6LIzU-uCKLQgkrbLx6PjRnCPb-knvLJKm5OnWA5rxQ2FFSFSykW2GCi~Nj-d6BT1dwHJOwV4bgDNhuqVVMCSJSi7AHGc2t26qYYSn23PAo~5Pe3pcY4eSxW8Zc~Dxzmdu9qTh3XICQAPwl1FS6zYbaLHuwFCewordykdmKcqYD8jpeeMlGbK~wT7QWTWPdY1sF1OKXGhPYX94fw4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              <p className='p1'>Iphone 14 Series</p>
            </div>
            <h2>Up to 10% off Voucher</h2>
            <div className='iconP'>
              <p className='p2'>Shop Now</p>
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
          <div className='rightImg'>
            <img src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1703462400&Signature=ko36RgioWSRNeKD~P2xV4W6NJYSC8OHYlnjNWOsBUkhS0zKbfyg2GCfUF3W1gPRgV1cuG7G8AcS3nDB-4ZaKUW8s5BjDve-5qoQRORRtq1BGZLEEtgzPi7bdhdr8djxfT9am~c-EYB4S3Gx6TKZo6s8GEVN9Q7OzZuMFUH21T3s7HzMUgHWDqMOqBVRlhlAM~FpFinlPhPmjsi89Ls1fkHWuHX9rksABYQd~Ve8omf8E1J~LK7OGYCqDRqCvD0oQCX2Wcn1hyeOaer7htTeejrKxD6qlACCop9utRtUV1AYGi2wYdD5uQ-Uh54EgI10WPymykVjfcbn~UAX-iQsoWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
        </div>
      </div>



      <div className='flashSales'>
        <div className='flashSalesTop'>
          <div className='salesTime'>
            <h1>Flash Sales</h1>
            <div className='timeSale'>
              <div className='day'>
                <p className='pDay'>Days</p>
                <p className='pNum'>03</p>
              </div>
              <div className='dayIcon'>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
              </div>
              <div className='day'>
                <p className='pDay'>Hours</p>
                <p className='pNum'>23</p>
              </div>
              <div className='dayIcon'>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
              </div>
              <div className='day'>
                <p className='pDay'>Minutes</p>
                <p className='pNum'>19</p>
              </div>
              <div className='dayIcon'>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
              </div>
              <div className='day'>
                <p className='pDay'>Seconds</p>
                <p className='pNum'>56</p>
              </div>
            </div>
          </div>
          <div className='iconsBG'>
            <div className='iconBg'>
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div className='iconBg'>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='flashSalesBottom'>
          {data.slice(4, 8).map((x) => (
            <div className='card'>
              <div className='wishBg'>
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className='detailBg'>
                <i class="fa-regular fa-eye"></i>
              </div>
              <div className='add'>
                <div onClick={() => { addBasket(x) }} className='addToCard'><p>Add to Card</p></div>
                <img src={x.image} alt="" />
              </div>
              <li className='name'>{x.name}</li>
              <div className='prices'>
                <li className='price'>${x.price}</li>
                <li className='oldPrice'>${x.oldPrice} </li>
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
          ))}
        </div>
      </div>



      <div className='browseByCategory'>
        <div className='browseByCategoryTop'>
          <h1>Browse By Category</h1>
          <div className='iconsBG'>
            <div className='iconBg'>
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div className='iconBg'>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='browseByCategoryBottom'>
          <div className='category1'>
            <div className='categroyText'>
              <i class="fa-solid fa-mobile-screen-button"></i>
              <p>Phones</p>
            </div>
          </div>
          <div className='category1'>
            <div className='categroyText'>
              <i class="fa-solid fa-display"></i>
              <p>Computers</p>
            </div>
          </div>
          <div className='category1'>
            <div className='categroyText'>
              <i class="fa-solid fa-microchip"></i>
              <p>SmartWatch</p>
            </div>
          </div>
          <div className='category1'>
            <div className='categroyText'>
              <i class="fa-solid fa-camera"></i>
              <p>Camera</p>
            </div>
          </div>
          <div className='category1'>
            <div className='categroyText'>
              <i class="fa-solid fa-headphones"></i>
              <p>HeadPhones</p>
            </div>
          </div>
          <div className='category1'>
            <div className='categroyText'>
              <i class="fa-solid fa-gamepad"></i>
              <p>Gaming</p>
            </div>
          </div>
        </div>
        <hr color='gainsboro' />
      </div>

      <div className='bestSellingProducts'>
        <div className='bestSellingProductsTop'>
          <h1>Best Selling Products</h1>
          <button>View All</button>
        </div>
        <div className='bestSellingProductsBottom'>
          {data.slice(0, 4).map((x) => (
            <div className='card'>
              <div className='wishBg'>
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className='detailBg'>
                <i class="fa-regular fa-eye"></i>
              </div>
              <div className='add'>
                <div onClick={() => { addBasket(x) }} className='addToCard'><p>Add to Card</p></div>
                <img src={x.image} alt="" />
              </div>
              <li className='name'>{x.name}</li>
              <div className='prices'>
                <li className='price'>${x.price}</li>
                <li className='oldPrice'>{x.oldPrice} </li>
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
          ))}
        </div>
      </div>


      <div className='music'>
        <div className='musicLeft'>
          <p>Categories</p>
          <h2>Enhance Your Music Experience</h2>
          <div className='time'>
            <div className='timeBg'>
              <p className='number'>23</p>
              <p className='timeText'>Hours</p>
            </div>
            <div className='timeBg'>
              <p className='number'>05</p>
              <p className='timeText'>Days</p>
            </div>
            <div className='timeBg'>
              <p className='number'>59</p>
              <p className='timeText'>Minutes</p>
            </div>
            <div className='timeBg'>
              <p className='number'>35</p>
              <p className='timeText'>Seconds</p>
            </div>
          </div>
          <button>Buy Now!</button>
        </div>
        <div className='musicRight'>
          <div className='image'>
            <img src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1703462400&Signature=LwgvMKT11ng-1VTfkz~I7wcxlaUSEHB4Mh2uRnbDEJVGVUQA46NFf57SzM9ykOpkZlSy5IpgSFcTIMdcwCSFFktMScgab5H2Vb5htUycLp07plx59U6DQpM~fucs0qvl6wagJ9-vjCAcLPZg2VLU0R2fjUzEX0o8XopnFoLnTtkjTBOFGCoBK~1t8j-1ath-dyMFpBm-Ghr9N76paPhBobt8SrU3Knmxl47RLZZNqWNY3rlxzqyBZwW-j3Tem53PZ4lyS9cjZB4ySBlcsHHtjc1RoVY3OcI04jv09NfkJt1jHYiteHwWIUtC4h8N9dlVrYrvmKsBVjFBjwHNnsNSkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
        </div>
      </div>



      <div className='exploreOurProducts'>
        <div className='exploreOurProductsTop'>
          <h1>Explore Our Products</h1>
          <div className='iconsBG'>
            <div className='iconBg'>
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div className='iconBg'>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='exploreOurProductsBottom'>
          {data.slice(8, 16).map((x) => (
            <div className='card'>
              <div className='wishBg'>
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className='detailBg'>
                <i class="fa-regular fa-eye"></i>
              </div>
              <div className='add'>
                <div onClick={() => { addBasket(x) }} className='addToCard'><p>Add to Card</p></div>
                <img src={x.image} alt="" />
              </div>
              <li className='name'>{x.name}</li>
              <div className='prices'>
                <li className='price'>${x.price}</li>
                <li className='oldPrice'>{x.oldPrice} </li>
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
          ))}
        </div>
      </div>



      <div className='NewArrival'>
        <div className='NewArrivalText'>
          <h2>New Arrival</h2>
        </div>
        <div className='NewArrivalImg'>
          <div className='NewArrivalImgLeft'>
            <div className='NewArrivalImgLeftText'>
              <h3>PlayStation 5</h3>
              <p className='little'>Black and White version of the PS5 coming out on sale.</p>
              <p className='shopNow'>Shop Now</p>
            </div>
          </div>
          <div className='NewArrivalImgRight'>
            <div className='NewArrivalImgRightTop'>
              <div className='Text'>
                <h3>Women’s Collections</h3>
                <p className='little'>Featured woman collections that give you another vibe.</p>
                <p className='shopNow'>Shop Now</p>
              </div>
            </div>
            <div className='NewArrivalImgRightBottom'>

              <div className='NewArrivalImgRightBottomLeft'>
                <div className='Text1'>
                  <h3>Speakers</h3>
                  <p className='little'>Featured woman collections that give you another vibe.</p>
                  <p className='shopNow'>Shop Now</p>
                </div>
              </div>
              <div className='NewArrivalImgRightBottomRight'>
                <div className='Text2'>
                  <h3>Speakers</h3>
                  <p className='little'>Featured woman collections that give you another vibe.</p>
                  <p className='shopNow'>Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='logo'>
        <div className='logo1'>
          <div className='logoBG'>
            <div className='logoBg'>
              <i class="fa-solid fa-truck-fast"></i>
            </div>
          </div>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className='logo1'>
          <div className='logoBG'>
            <div className='logoBg'>
              <i class="fa-solid fa-headset"></i>
            </div>
          </div>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className='logo1'>
          <div className='logoBG'>
            <div className='logoBg'>
              <i class="fa-solid fa-shield-halved"></i>
            </div>
          </div>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
    </>
  )
}

export default Home