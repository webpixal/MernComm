import React from 'react'
import {Link } from 'react-router-dom'
import { Chart } from "react-google-charts";
// import Asset for Dashboadrd 
import Card from '../App/asset/card.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import cardBlack from '../App/asset/cardblack.svg';
import Category from '../App/asset/Categor.svg';
import Confrim from '../App/asset/confirmed.svg';
import Customer from '../App/asset/custumer.svg';

import People from '../App/asset/people.svg';
import ProOrder from '../App/asset/procorder.svg';
import Ship from '../App/asset/shipping-truck.svg'
import Invo from '../App/asset/invo.svg';
import totalProduct from '../App/asset/totalpro.svg';
import Brand from '../App/asset/brand.svg'
import Orders from '../App/asset/toO.svg'

import Sidebar from './Sideber'
const Dash = () =>{
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
   const options = {
    colors: ["#57b846", "#101920"],
   };

  return (


<div className="min-h-screen">
      {/* Sidebar*/}
      <Sidebar/>
      {/*Navbar*/}

      <div className="ml-40 sm:ml-80  max-w-full bg-white">

              {/*---Row 1  */}
              <div className="px-2 py-1 mb-1">
                <div className="flex lg:flex-row flex-col">
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={Card} alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={cardBlack} alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={Card} alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={cardBlack} alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={Card} alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/*---Row 2  */}
              <div className="px-2 py-1 mb-1">
                <div className="flex lg:flex-row flex-col">
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={Customer} alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={totalProduct} alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={Invo} alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={Category} alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={Brand} alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/*---Row 3  */}
              <div className="px-2 py-1 mb-1">
                <div className="flex lg:flex-row flex-col">
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={Orders} alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={Confrim}alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={ProOrder} alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={Ship} alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="basis-full sm:basis-1/5 m-1">
                    <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex">
                        <div className="flex-auto w-3/4 ">
                          <h5 className="mb-1 text-sm font-bold tracking-tight text-primary dark:text-white">Today Sales</h5>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secoundery dark:text-white">$20.4k</h5>
                          <p className=" text-xs font-medium tracking-tight text-primary dark:text-white">We have Sold 123 Items</p>     
                        </div>
                        <div className="flex-auto w-1/4 self-center p-1">
                          <img src={People} alt=""/>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/*---Row 4  */}
              <div className="px-2 py-1 mb-1">
                <div className="flex lg:flex-row flex-col">
                  <div className=" lg:w-3/5 m-1">
                    <Link to="./" className="block bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="rounded-lg overflow-hidden">
                        <div className="py-3 px-5 font-bold">Total Revenue</div>
                        <Chart
                          chartType="Bar"
                          data={data}
                          options={options}
                          width={"100%"}
                          height={"500px"}
                        />
                      </div>
                      {/* Required chart.js */}
                      
                      {/* Chart bar */}
                    </Link>
                  </div>
                  <div className=" lg:w-2/5 m-1">
                    <Link to="./" className="block  bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className=" rounded-lg overflow-hidden">
                        <div className="py-2 px-4 font-bold ">Profit chart</div>
                        <div className="px-12 ">
                        <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"500px"}
                      />
                        </div>
                      </div>
                      {/* Required chart.js */}
                            
                      {/* Chart pie */}
                    </Link>
                  </div>
                </div>
              </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
</div>


  )
}

export default Dash;