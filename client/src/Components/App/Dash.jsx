import React, {useState , createRef} from 'react'
import {Link} from 'react-router-dom'
import Card from '../App/asset/card.svg'
import Bell from '../App/asset/bell.svg'
import message from '../App/asset/message.svg'

const Dash = () => {
  const [isProduct, setIsProduct] = useState("false");

  const productToggle = () => {
    setIsProduct(!isProduct);
  };
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
    
  return (
<section className="min-h-screen">
  {/* Sidebar*/}
  <div className="w-40 sm:w-72 bg-[#101920] h-full fixed overflow-hidden">
  </div>
  <div className="w-40 sm:w-72 bg-[#101920] min-h-full absolute">
    <div className="flex flex-col w-40 sm:w-72 bg-[#101920] min-h-screen text-white  ">
      <div className="flex items-center justify-center h-20 ">
        <div className="bg-[#57B846] rounded p-2"><img src="img/sidebar.svg" className=" h-6 sm:h-7" alt=" Logo" /></div>
        <h2 className="ml-1 text-2xl text-[#57B846]">e<strong className="text-white">comce</strong></h2>
      </div>
      <ul className="flex flex-col">
        <li>
          <Link to="./" className="flex flex-row items-center h-10 rounded transition duration-75 text-white hover:bg-[#57B846]">
            <span className="inline-flex items-center justify-center h-10 w-10 text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
        </li>
        <li>
          <button type="button" onClick={productToggle}
           className="flex items-center pr-3 w-full text-base font-normal text-white rounded transition duration-75 hover:bg-[#57B846]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-white"><i className="bx bx-home" /></span>
            <span className="flex-1 text-left text-sm font-medium whitespace-nowrap" sidebar-toggle-item>Products</span>
            <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <ul className={isProduct ? "block" : "hidden"}>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">Brand</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Category</Link>
            </li>
            <li>
              <Link to ="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Subcategory</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Sub Subcategory</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Products</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                User Discount Product</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Classified Products</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Digital Products</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Bulk Import</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Bulk Export</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Product Reviews</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="./" className="flex flex-row items-center h-10 text-white hover:bg-[#57B846]">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-sm font-medium ">Flash Deal</span>
          </Link>
        </li>
        <li>
          <Link to="./" className="flex flex-row items-center h-10 text-white hover:bg-[#57B846]">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-sm font-medium ">Orders</span>
            <span className="ml-auto mr-3 text-sm font-semibold bg-white rounded-full px-2 py-px text-[#57B846]">18</span>
          </Link>
        </li>
        <li>
          <button type="button" className="flex items-center pr-3 w-full text-base font-normal text-white rounded transition duration-75 hover:bg-[#57B846]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-white"><i className="bx bx-home" /></span>
            <span className="flex-1 text-left text-base font-medium whitespace-nowrap" sidebar-toggle-item>Invoice</span>
            <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <ul id className="hidden space-y-2">
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Pending Invoice</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Paid Invoice</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="./" className="flex flex-row items-center h-10 text-white hover:bg-[#57B846]">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-sm font-medium ">Pick-up Point Order</span>
          </Link>
        </li>
        <li>
          <button type="button" className="flex items-center pr-3 w-full text-base font-normal text-white rounded transition duration-75 hover:bg-[#57B846]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-white"><i className="bx bx-home" /></span>
            <span className="flex-1 text-left text-base font-medium whitespace-nowrap" sidebar-toggle-item>Customers</span>
            <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <ul id="mydropside" className="hidden space-y-2">
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Customers list</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Customers Packages</Link>
            </li>
          </ul>
        </li>
        <li>
          <button type="button" className="flex items-center pr-3 w-full text-base font-normal text-white rounded transition duration-75 hover:bg-[#57B846]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-white"><i className="bx bx-home" /></span>
            <span className="flex-1 text-left text-base font-medium whitespace-nowrap" sidebar-toggle-item>Reports</span>
            <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <ul id="mydropside" className="hidden space-y-2">
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Customers list</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Customers Packages</Link>
            </li>
          </ul>
        </li>
        <li>
          <button type="button" className="flex items-center pr-3 w-full text-base font-normal text-white rounded transition duration-75 hover:bg-[#57B846]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-white"><i className="bx bx-home" /></span>
            <span className="flex-1 text-left text-base font-medium whitespace-nowrap" sidebar-toggle-item>Business Settings</span>
            <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <ul id="mydropside" className="hidden space-y-2">
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Customers list</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Customers Packages</Link>
            </li>
          </ul>
        </li>
        <li>
          <button type="button" className="flex items-center pr-3 w-full text-base font-normal text-white rounded transition duration-75 hover:bg-[#57B846]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-white"><i className="bx bx-home" /></span>
            <span className="flex-1 text-left text-base font-medium whitespace-nowrap" sidebar-toggle-item>Front End Setup</span>
            <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <ul id="mydropside" className="hidden space-y-2">
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Customers list</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Customers Packages</Link>
            </li>
          </ul>
        </li>
        <li>
          <button type="button" className="flex items-center pr-3 w-full text-base font-normal text-white rounded transition duration-75 hover:bg-[#57B846]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-white"><i className="bx bx-home" /></span>
            <span className="flex-1 text-left text-base font-medium whitespace-nowrap" sidebar-toggle-item>E-Commerce Setup</span>
            <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <ul id="mydropside" className="hidden space-y-2">
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Customers list</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Customers Packages</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="./" className="flex flex-row items-center h-10 text-white hover:bg-[#57B846]">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-base font-medium">Payment Gateway</span>
          </Link>
        </li>
        <li>
          <Link to="./" className="flex flex-row items-center h-10 text-white hover:bg-[#57B846]">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-base font-medium">Support Ticket</span>
          </Link>
        </li>
        <li>
          <Link to="./" className="flex flex-row items-center h-10 text-white hover:bg-[#57B846]">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-base font-medium">Blog</span>
          </Link>
        </li>
        <li>
          <button type="button" className="flex items-center pr-3 mb-10 w-full text-base font-normal text-white rounded transition duration-75 hover:bg-[#57B846]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-white"><i className="bx bx-home" /></span>
            <span className="flex-1 text-left text-base font-medium whitespace-nowrap" sidebar-toggle-item>Staffs</span>
            <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <ul id="mydropside" className="hidden space-y-2">
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Customers list</Link>
            </li>
            <li>
              <Link to="./" className="flex items-center p-1 pl-16 w-full text-base font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">
                Customers Packages</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  {/*Navbar*/}
  <div className="ml-40 sm:ml-80  max-w-full bg-white min-h-screen overflow-x-hidden">
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="./" className="flex items-center">
          <img src="img/world.svg" /><h3 className="px-2 text-[#57B846] font-semibold">Browse Frontend</h3>
        </Link>
        <div className="flex items-center md:order-2">
          <Link to="./"><img className="px-3 py-1 mt-1" src="img/message.svg" /></Link>
          <Link to="./"><img className="px-3" src="img/bell.svg" /></Link>
          <h4 className="font-bold px-2">Abubakar</h4>
          <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only" />
            <img className="w-12 h-12 rounded-full" src="img/Vector.svg" alt="user photo" />
          </button>
          {/* Messages Dropdown menu */}
          <div className="hidden absolute w-96 right-52 top-12 z-50 my-2 text-base list-none bg-white rounded divide-y divide-gray-100 shadow-2xl dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div className="py-1 px-4">
              <span className="block text-sm font-semibold text-center text-[#57BB46] dark:text-white">Messages</span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li className=" shadow mb-2 rounded hover:bg-gray-900 hover:text-white">
                <Link to="./">
                  <div className="flex flex-row ">
                    <div className="basis-1/4 p-1">
                      <img src="img/imgp.jpg" className="rounded w-20 h-16 object-cover" />
                    </div>
                    <div className="basis-3/4 px-1">
                      <h6 className=" font-semibold pt-1">Abubakar</h6>
                      <p className="text-sm ">Lorem ipsum dolor sit amet, cons  dolor sit amet, cons</p>
                    </div> 
                  </div>
                </Link>
              </li>
              <li className=" shadow mb-2 rounded hover:bg-gray-900 hover:text-white">
                <Link to="./">
                  <div className="flex flex-row ">
                    <div className="basis-1/4 p-1">
                      <img src="img/imgp.jpg" className="rounded w-20 h-16 object-cover" />
                    </div>
                    <div className="basis-3/4 px-1">
                      <h6 className=" font-semibold pt-1">Abubakar</h6>
                      <p className="text-sm ">Lorem ipsum dolor sit amet, cons  dolor sit amet, cons</p>
                    </div> 
                  </div>
                </Link>
              </li>
              <li className=" shadow mb-2 rounded hover:bg-gray-900 hover:text-white">
                <Link to="./">
                  <div className="flex flex-row ">
                    <div className="basis-1/4 p-1">
                      <img src="img/imgp.jpg" className="rounded w-20 h-16 object-cover" />
                    </div>
                    <div className="basis-3/4 px-1">
                      <h6 className=" font-semibold pt-1">Abubakar</h6>
                      <p className="text-sm ">Lorem ipsum dolor sit amet, cons  dolor sit amet, cons</p>
                    </div> 
                  </div>
                </Link>
              </li>
              <li className=" shadow mb-2 rounded hover:bg-gray-900 hover:text-white">
                <Link to="./">
                  <div className="flex flex-row ">
                    <div className="basis-1/4 p-1">
                      <img src="img/imgp.jpg" className="rounded w-20 h-16 object-cover" />
                    </div>
                    <div className="basis-3/4 px-1">
                      <h6 className=" font-semibold pt-1">Abubakar</h6>
                      <p className="text-sm ">Lorem ipsum dolor sit amet, cons  dolor sit amet, cons</p>
                    </div> 
                  </div>
                </Link>
              </li>
              <li className=" shadow mb-2 rounded hover:bg-gray-900 hover:text-white">
                <Link to="./">
                  <div className="flex flex-row ">
                    <div className="basis-1/4 p-1">
                      <img src="img/imgp.jpg" className="rounded w-20 h-16 object-cover" />
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
          <div className="hidden absolute right-4 top-12 z-50 my-3 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <Link to="./">
              <div className="py-3 px-4">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">Abubakar Aziz</span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">abubakar@example.com</span>
              </div>
            </Link>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <Link to="./" className="block py-2 px-4 text-sm text-gray-700 hover:bg-[#57BB46] hover:text-white dark:text-gray-200 dark:hover:text-white">Profile</Link>
              </li>
              <li>
                <Link to="./" className="block py-2 px-4 text-sm text-gray-700 hover:bg-[#57BB46] hover:text-white dark:text-gray-200 dark:hover:text-white">Logout</Link>
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
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/card.svg" />
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-full sm:basis-1/5 m-1">
          <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
              <div className="flex-auto w-3/4 ">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/cardblack.svg" />
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-full sm:basis-1/5 m-1">
          <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
              <div className="flex-auto w-3/4 ">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/card.svg" />
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-full sm:basis-1/5 m-1">
          <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
              <div className="flex-auto w-3/4 ">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/cardblack.svg" />
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-full sm:basis-1/5 m-1">
          <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
              <div className="flex-auto w-3/4 ">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/card.svg" />
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
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/custumer.svg" />
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-full sm:basis-1/5 m-1">
          <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
              <div className="flex-auto w-3/4 ">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/totalpro.svg" />
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-full sm:basis-1/5 m-1">
          <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
              <div className="flex-auto w-3/4 ">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/totalorder.svg" />
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-full sm:basis-1/5 m-1">
          <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
              <div className="flex-auto w-3/4 ">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/Categor.svg" />
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-full sm:basis-1/5 m-1">
          <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
              <div className="flex-auto w-3/4 ">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/card.svg" />
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
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/card.svg" />
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-full sm:basis-1/5 m-1">
          <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
              <div className="flex-auto w-3/4 ">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/card.svg" />
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-full sm:basis-1/5 m-1">
          <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
              <div className="flex-auto w-3/4 ">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/procorder.svg" />
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-full sm:basis-1/5 m-1">
          <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
              <div className="flex-auto w-3/4 ">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/shipping-truck.svg" />
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-full sm:basis-1/5 m-1">
          <Link to="./" className="block max-w-lg bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex">
              <div className="flex-auto w-3/4 ">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-[#57B846] dark:text-white">Today Sales</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$20.4k</h5>
                <p className=" text-xs font-medium tracking-tight text-[#57B846] dark:text-white">We have Sold 123 Items</p>     
              </div>
              <div className="flex-auto w-1/4 self-center p-1">
                <img src="img/people.svg" />
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
          <Link to="./" className="block bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="rounded-lg overflow-hidden">
              <div className="py-3 px-5 font-bold">Total Revenue</div>
              <canvas className="p-10" id="chartBar" />
            </div>
            {/* Required chart.js */}
            {/* Chart bar */}
          </Link>
        </div>
        <div className=" lg:w-2/5 m-1">
          <Link to="./" className="block  bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className=" rounded-lg overflow-hidden">
              <div className="py-2 px-4 font-bold ">Profit chart</div>
              <div className="px-12 ">
                <canvas className="p-3 max-h-xs" id="chartPie" />
              </div>
            </div>
            {/* Required chart.js */}
            {/* Chart pie */}
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}

export default Dash