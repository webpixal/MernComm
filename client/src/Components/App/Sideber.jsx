import {React, useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import Sidesvg from '../App/asset/sidebar.svg';
/* Imported Component for drop down menu */
import Dropdown from './props/Dropdown';
/*Import Assets */
import Bell from '../App/asset/bell.svg';
import message from '../App/asset/message.svg';
import Vector from '../App/asset/Vector.svg';
import world from '../App/asset/world.svg';
import Image from '../App/asset/imgp.jpg';
const Sideber = () => {

/* Logout Factionality */
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
      labelLink:'/brand',
    },
    {
      label:'Category',
      labelLink:'/category',
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
      labelLink:'/products',
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

// User Toggle
const [isProfile, setProfile] = useState("false");

const profileToggle = () => {
  setProfile(!isProfile);
}
  /* End --> List for options of Customers */
  return (
    <>
    <div className="w-40 sm:w-72 bg-secoundery h-full fixed overflow-hidden">
  </div>
  <div className="w-40 sm:w-72 bg-secoundery  absolute">
    <div className="flex flex-col w-40 sm:w-72 bg-secoundery min-h-screen text-white  ">
      <div className="flex items-center justify-center h-20 ">
        <div className="bg-primary rounded p-2"><img src={Sidesvg} className=" h-6 sm:h-7" alt=" Logo" /></div>
        <h2 className="ml-1 text-2xl text-primary">e<strong className="text-white">comce</strong></h2>
      </div>
      <ul className="flex flex-col">
        <li>
          <Link to="/dashboard" className="flex flex-row items-center h-10 rounded transition duration-75 text-white hover:bg-primary">
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
    <div className="ml-40 sm:ml-80  max-w-full bg-white overflow-x-hidden">
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-secoundery">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="./" className="flex items-center">
          <img src={world} alt=""/><h3 className="px-2 text-primary font-semibold">Browse Frontend</h3>
        </Link>
        <div className="flex items-center md:order-2">
          <Link to="./"><img className="px-3 py-1 mt-1" src={message} alt=""/></Link>
          <Link to="./"><img className="px-3" src={Bell} alt=""/></Link>
          <h4 className="font-bold px-2">{JSON.parse(auth).name}</h4>
          <button type="button" onClick={profileToggle}
          className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only" />
            <img className="w-12 h-12 rounded-full" src={Vector} alt="" />
          </button>
          {/* Messages Dropdown menu */}
          <div className="hidden absolute w-96 right-52 top-12 z-50 my-2 text-base list-none bg-white rounded divide-y divide-gray-100 shadow-2xl dark:bg-gray-700 dark:divide-gray-600">
            <div className="py-1 px-4">
              <span className="block text-sm font-semibold text-center text-primary dark:text-white">Messages</span>
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
          <div className={`${isProfile ? "hidden" : "block"} absolute right-4 top-12 z-50 my-3 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
            <Link to="./" >
              <div className="py-3 px-4">
                <span className="block text-sm font-semibold text-secoundery dark:text-white">{JSON.parse(auth).name}</span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{JSON.parse(auth).email}</span>
              </div>
            </Link>
            <ul className="py-1"  aria-labelledby="user-menu-button">
              <li>
                <Link to="./" className="block py-2 px-4 text-sm text-gray-700 hover:bg-primary hover:text-white dark:text-gray-200 dark:hover:text-white">Profile</Link>
              </li>
              <li>
                { auth ? <Link onClick={logout} to="/login" className="block py-2 px-4 text-sm text-gray-700 hover:bg-primary hover:text-white dark:text-gray-200 dark:hover:text-white">Logout</Link>:<Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-primary hover:text-white dark:text-gray-200 dark:hover:text-white">login</Link> }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
    </>
  )
}

export default Sideber