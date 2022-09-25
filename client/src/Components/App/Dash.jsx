import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Chart } from "react-google-charts";
// import Asset for Dashboadrd 
import Card from '../App/asset/card.svg';
import Bell from '../App/asset/bell.svg';
import message from '../App/asset/message.svg';
import Sidebar from '../App/asset/sidebar.svg';
import Vector from '../App/asset/Vector.svg';
import world from '../App/asset/world.svg';
import cardBlack from '../App/asset/cardblack.svg';
import Category from '../App/asset/Categor.svg';
import Confrim from '../App/asset/confirmed.svg';
import Customer from '../App/asset/custumer.svg';
import Image from '../App/asset/imgp.jpg';
import People from '../App/asset/people.svg';
import ProOrder from '../App/asset/procorder.svg';
import Ship from '../App/asset/shipping-truck.svg'
import Invo from '../App/asset/invo.svg';
import totalProduct from '../App/asset/totalpro.svg';
import Brand from '../App/asset/brand.svg'
import Orders from '../App/asset/toO.svg'
/* Imported Component for drop down menu */
import Dropdown from './props/Dropdown';
const Dash = () => {
// logout auth

const auth = localStorage.getItem('user');
const navigate =useNavigate();
const logout = () =>{
  localStorage.clear();
  navigate('/')
}
  /* Start --> List for options of Products */
  const products=[
    {
      label:'Brand',
      labelLink:'./brand',
    },
    {
      label:'Category',
      labelLink:'./category',
    },
    {
      label:'Subcategory',
      labelLink:'./sc',
    },
    {
      label:'Sub Subcategory',
      labelLink:'./ssc',
    },
    {
      label:'Products',
      labelLink:'./Products',
    },
    {
      label:'User Discount Product',
      labelLink:'./udp',
    },
    {
      label:'Classified Products',
      labelLink:'./cp',
    },
    {
      label:'Digital Proucts',
      labelLink:'./dp',
    },
    {
      label:'Bulk Import',
      labelLink:'./bi',
    },
    {
      label:'Bulk Export',
      labelLink:'./be',
    },
    {
      label:'Product Reviews',
      labelLink:'./about',
    },
  ];
  /* End --> List for options of Products */

  /* Start --> List for options of Invoices */
  const invoices=[
    {
      label:'Paid Invoice',
      labelLink:'/about',
    },
    {
      label:'Paid Invoice',
      labelLink:'/about',
    },
  ];
  /* End --> List for options of Invoices */

  /* Start --> List for options of Customers */
  const Customers=[
    {
      image:'../App/asste/card.svg',
      label:'Customers list',
      labelLink:'/about',
    },
    {
      label:'Customers Packages',
      labelLink:'/about',
    },
  ];
  /* End --> List for options of Customers */
  
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

   const [isUser, setUser] = useState("false");

   const userToggle = () => {
     setUser(!isUser);
   };


  return (


<div className="min-h-screen">
  {/* Sidebar*/}
  <div className="w-40 sm:w-72 bg-secoundery h-full fixed overflow-hidden">
  </div>
  <div className="w-40 sm:w-72 bg-secoundery min-h-full absolute">
    <div className="flex flex-col w-40 sm:w-72 bg-secoundery min-h-screen text-white  ">
      <div className="flex items-center justify-center h-20 ">
        <div className="bg-primary rounded p-2"><img src={Sidebar} className=" h-6 sm:h-7" alt=" Logo" /></div>
        <h2 className="ml-1 text-2xl text-primary">e<strong className="text-white">comce</strong></h2>
      </div>
      <ul className="flex flex-col">
        <li>
          <Link to="./" className="flex flex-row items-center h-10 rounded transition duration-75 text-white hover:bg-primary">
            <span className="inline-flex items-center justify-center h-10 w-10 text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
        </li>
        <li>  
        {/* Start --> Component called for Menu of Products */}
        <Dropdown title={"Products"} data={products} />
        {/* End --> Component called for Menu of Products */}
        </li>
        <li>
          <Link to="./" className="flex flex-row items-center h-10 text-white hover:bg-primary">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-sm font-medium ">Flash Deal</span>
          </Link>
        </li>
        <li>
          <Link to="./" className="flex flex-row items-center h-10 text-white hover:bg-primary">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-sm font-medium ">Orders</span>
            <span className="ml-auto mr-3 text-sm font-semibold bg-white rounded-full px-2 py-px text-primary">18</span>
          </Link>
        </li>
        <li>
          {/* Start --> Component called for Menu of Invoices */}
        <Dropdown title={"Invoices"} data={invoices}/>
        {/* End --> Component called for Menu of Invoices */}
        </li>
        <li>
          <Link to="./" className="flex flex-row items-center h-10 text-white hover:bg-primary">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-sm font-medium ">Pick-up Point Order</span>
          </Link>
        </li>
        <li>
          {/* Start --> Component called for Menu of Customers */}
        <Dropdown title={"Customer"} data={Customers}/>
        {/* End --> Component called for Menu of Products */}
        </li>
       
        <li>
          {/* Start --> Component called for Menu of Customers */}
        <Dropdown title={"Report"} data={Customers}/>
        {/* End --> Component called for Menu of Products */}
        </li>
        <li>
          {/* Start --> Component called for Menu of Customers */}
        <Dropdown title={"Business Setup"} data={Customers}/>
        {/* End --> Component called for Menu of Products */}
        </li>
        <li>
          {/* Start --> Component called for Menu of Customers */}
        <Dropdown title={"Frontend Setup"} data={Customers}/>
        {/* End --> Component called for Menu of Products */}
        </li>
        <li>

          {/* Start --> Component called for Menu of Customers */}
        <Dropdown  title={"E-Commerce Setup"} data={Customers}/>
        {/* End --> Component called for Menu of Products */}
        </li>
        <li>
          {/* Start --> Component called for Menu of Customers */}
        <Dropdown title={"Staffs"} data={Customers}/>
        {/* End --> Component called for Menu of Products */}
        </li>
        <li>
          <Link to="./" className="flex flex-row items-center h-10 text-white hover:bg-primary">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-sm font-normal">Support Ticket</span>
          </Link>
        </li>
        <li>
          <Link to="./" className="flex flex-row items-center h-10 text-white hover:bg-primary">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-sm font-normal">Blog</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  {/*Navbar*/}
  <div className="ml-40 sm:ml-80  max-w-full bg-white min-h-screen overflow-x-hidden">
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-secoundery">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="./" className="flex items-center">
          <img src={world} alt=""/><h3 className="px-2 text-primary font-semibold">Browse Frontend</h3>
        </Link>
        <div className="flex items-center md:order-2">
          <Link to="./"><img className="px-3 py-1 mt-1" src={message} alt=""/></Link>
          <Link to="./"><img className="px-3" src={Bell} alt=""/></Link>
          <h4 className="font-bold px-2">Abubakar</h4>
          <button type="button" 
          className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only" />
            <img className="w-12 h-12 rounded-full" src={Vector} alt="" />
          </button>
          {/* Messages Dropdown menu */}
          <div className="hidden absolute w-96 right-52 top-12 z-50 my-2 text-base list-none bg-white rounded divide-y divide-gray-100 shadow-2xl dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div className="py-1 px-4">
              <span className="block text-sm font-semibold text-center text-[#57BB46] dark:text-white">Messages</span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li className=" shadow mb-2 rounded hover:bg-secoundery hover:text-white">
                <Link to="./">
                  <div className="flex flex-row ">
                    <div className="basis-1/4 p-1">
                      <img src={Image} className="rounded w-20 h-16 object-cover" alt="" />
                    </div>
                    <div className="basis-3/4 px-1">
                      <h6 className=" font-semibold pt-1">Abubakar</h6>
                      <p className="text-sm ">Lorem ipsum dolor sit amet, cons  dolor sit amet, cons</p>
                    </div> 
                  </div>
                </Link>
              </li>
              <li className=" shadow mb-2 rounded hover:bg-secoundery hover:text-white">
                <Link to="./">
                  <div className="flex flex-row ">
                    <div className="basis-1/4 p-1">
                      <img src={Image} className="rounded w-20 h-16 object-cover" alt="" />
                    </div>
                    <div className="basis-3/4 px-1">
                      <h6 className=" font-semibold pt-1">Abubakar</h6>
                      <p className="text-sm ">Lorem ipsum dolor sit amet, cons  dolor sit amet, cons</p>
                    </div> 
                  </div>
                </Link>
              </li>
              <li className=" shadow mb-2 rounded hover:bg-secoundery hover:text-white">
                <Link to="./">
                  <div className="flex flex-row ">
                    <div className="basis-1/4 p-1">
                      <img src={Image} className="rounded w-20 h-16 object-cover" alt="" />
                    </div>
                    <div className="basis-3/4 px-1">
                      <h6 className=" font-semibold pt-1">Abubakar</h6>
                      <p className="text-sm ">Lorem ipsum dolor sit amet, cons  dolor sit amet, cons</p>
                    </div> 
                  </div>
                </Link>
              </li>
              <li className=" shadow mb-2 rounded hover:bg-secoundery hover:text-white">
                <Link to="./">
                  <div className="flex flex-row ">
                    <div className="basis-1/4 p-1">
                      <img src={Image} className="rounded w-20 h-16 object-cover"  alt=""/>
                    </div>
                    <div className="basis-3/4 px-1">
                      <h6 className=" font-semibold pt-1">Abubakar</h6>
                      <p className="text-sm ">Lorem ipsum dolor sit amet, cons  dolor sit amet, cons</p>
                    </div> 
                  </div>
                </Link>
              </li>
              <li className=" shadow mb-2 rounded hover:bg-secoundery hover:text-white">
                <Link to="./">
                  <div className="flex flex-row ">
                    <div className="basis-1/4 p-1">
                      <img src={Image} className="rounded w-20 h-16 object-cover" alt=""/>
                    </div>
                    <div className="basis-3/4 px-1">
                      <h6 className=" font-semibold pt-1">Abubakar</h6>
                      <p className="text-sm ">Lorem ipsum dolor sit amet, cons  dolor sit amet, cons</p>
                    </div> 
                  </div>
                </Link>
              </li>
              <div className="py-1 px-3">
                <Link href><span className="block text-sm font-semibold text-center text-black dark:text-white">See More</span></Link> 
              </div>
            </ul>
          </div>
          {/*User Profile Dropdown menu */}
          <div className="absolute right-4 top-12 z-50 my-3 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown" onClick={userToggle}>
            <Link to="./" >
              <div className="py-3 px-4">
                <span className="block text-sm font-semibold text-secoundery dark:text-white">Abubakar Aziz</span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">abubakar@example.com</span>
              </div>
            </Link>
            <ul className={`py-1 `} aria-labelledby="user-menu-button">
              <li>
                <Link to="./" className="block py-2 px-4 text-sm text-gray-700 hover:bg-[#57BB46] hover:text-white dark:text-gray-200 dark:hover:text-white">Profile</Link>
              </li>
              <li>
                { auth ? <Link onClick={logout} to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-[#57BB46] hover:text-white dark:text-gray-200 dark:hover:text-white">Logout</Link>:<Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-[#57BB46] hover:text-white dark:text-gray-200 dark:hover:text-white">login</Link> }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
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
</div>


  )
}

export default Dash