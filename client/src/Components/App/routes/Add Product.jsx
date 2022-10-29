import React, {useState} from 'react'
import Sideber from '../Sideber'

const Add_Product = () => {
  
  return (
    <>
      <Sideber/>  
        <div className='mb-1 ml-40 sm:ml-80  max-w-full bg-white"'>
            
              {/*---Row table  */}
              <div className="px-2 py-1 mb-1">
                <div className="flex lg:flex-row flex-col">
                  <div className=" lg:w-2/4 m-1">
                    <div href="#" className="block bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="mt-1 mb-4">
                        <h5 className="font-bold">Product Information</h5>
                      </div>   
                      <div className=" ">
                        <form>
                          <div className="mb-2">
                            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Product Name</label>
                            <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                          </div>
                          <div className="grid gap-3 mb-4 md:grid-cols-2">  
                            <div>
                              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Category</label>
                              <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                            </div>
                            <div>
                              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Subcategory</label>
                              <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                            </div>
                            <div>
                              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Brand</label>
                              <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                            </div>
                            <div>
                              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Units</label>
                              <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                            </div>
                            <div>
                              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Tags</label>
                              <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                            </div>
                            <div>
                              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Subcategory</label>
                              <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                            </div>    
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>  
                  <div className=" lg:w-2/4 m-1">
                    <div href="#" className="block bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="mt-1 mb-4">
                        <h5 className="font-bold">Product Descrpition</h5>
                      </div>   
                      <div className="mb-4 ">                   
                        <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">Enter Product Descrpition</label>
                        <textarea id="message" rows={11} className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." defaultValue={""} />
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
              {/*---Row table  */}
              <div className="px-2 py-1 mb-1">
                <div className="flex lg:flex-row flex-col">
                  <div className=" lg:w-2/4 m-1">
                    <div href="#" className="block bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="mt-1 mb-4">
                        <h5 className="font-bold">Product Images</h5>
                      </div>   
                      <div className="grid gap-3 mb-4 md:grid-cols-5">
                        <div className="mb-2">
                          <div className="flex  w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-20 h-20 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                              <div className="flex flex-col justify-center items-center pt-3 pb-4">
                                <svg aria-hidden="true" className="m-2 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                              </div>
                              <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                          </div> 
                          <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gallery Image</label>
                        </div>
                        <div className="mb-2 ">
                          <div className="flex  w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-20 h-20 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                              <div className="flex flex-col justify-center items-center pt-3 pb-4">
                                <svg aria-hidden="true" className="m-2 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                              </div>
                              <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                          </div> 
                          <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thumbnail Image (290*300)</label>
                        </div>
                        <div className="mb-2">
                          <div className="flex  w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-20 h-20 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                              <div className="flex flex-col justify-center items-center pt-3 pb-4">
                                <svg aria-hidden="true" className="m-2 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                              </div>
                              <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                          </div> 
                          <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">Featured (290*300)</label>
                        </div>
                        <div className="mb-2">
                          <div className="flex  w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-20 h-20 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                              <div className="flex flex-col justify-center items-center pt-3 pb-4">
                                <svg aria-hidden="true" className="m-2 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                              </div>
                              <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                          </div> 
                          <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">Flash Deal (290*300)</label>
                        </div>
                        <div className="mb-2 ">
                          <div className="flex  w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-20 h-20 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                              <div className="flex flex-col justify-center items-center pt-3 pb-4">
                                <svg aria-hidden="true" className="m-2 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                              </div>
                              <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                          </div>
                          <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">PDF Specification</label> 
                        </div>   
                      </div>
                      <div className="mb-2">
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Video Provider</label>
                        <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                      </div>
                      <div className="mb-2">
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">URL</label>
                        <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                      </div> 
                    </div>
                  </div>  
                  <div className=" lg:w-2/4 m-1">
                    <div href="#" className="block bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="mt-1 mb-4">
                        <h5 className="font-bold">SEO Meta Tags</h5>
                      </div>   
                      <div className="mb-2">
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Meta Title</label>
                        <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                      </div>
                      <div className="mb-2">
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Descrpition</label>
                        <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                      </div>
                      <div className="mb-2">
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Meta Image</label>
                        <div className="flex  w-full">
                          <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center mx-2 my-1 w-32 h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col justify-center items-center pt-3 pb-4">
                              <svg aria-hidden="true" className="m-2 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                          </label>
                        </div> 
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
              {/*---Row table  */}
              <div className="px-2 py-1 mb-1">
                <div className="flex lg:flex-row flex-col">
                  <div className=" lg:w-2/4 m-1">
                    <div href="#" className="block bg-white px-3 py-2 rounded-lg border h-96 border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="mt-1 mb-4">
                        <h5 className="font-bold -translate-y-1 inline-flex mr-3">Product Variation</h5>
                        <label className="inline-flex relative items-center cursor-pointer">
                          <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
                          <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />    
                        </label>
                      </div>   
                      <div className=" ">
                        <form>
                          <div className="mb-2">
                            <label className=" mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 -translate-y-1 inline-flex mr-2">Colors</label>
                            <label className="inline-flex relative items-center cursor-pointer">
                              <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
                              <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />    
                            </label>
                            <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                          </div>
                          <div className="mb-2">
                            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Attribute</label>
                            <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                          </div>
                        </form>
                        <p className="text-sm mb-3 mt-1">Choose the attributes of this product and then input values of each attribute</p>
                      </div>
                    </div>
                  </div>  
                  <div className=" lg:w-2/4 m-1">
                    <div href="#" className="block bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="mt-1 mb-3">
                        <h5 className="font-bold">Product Price , Stock &amp; Shipping</h5>
                      </div>   
                      <div className="grid gap-3 mb-4 md:grid-cols-2">  
                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Unit Price</label>
                          <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                        </div>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Purchase Price</label>
                          <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                        </div>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Tax</label>
                          <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                        </div>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Discount</label>
                          <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                        </div>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                          <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                        </div>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Shipping Cost</label>
                          <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder required />
                        </div> 
                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Shipping</label>
                          <div className="py-3">
                            <label className="inline-flex relative items-center cursor-pointer">
                              <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
                              <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />    
                              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Free</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex relative items-center cursor-pointer">
                              <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
                              <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />    
                              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Flat</span>    
                            </label>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
              {/*---Row table  */}
              <div className="px-2 py-1 mb-1">
                <div className="flex lg:flex-row flex-col">
                  <div className=" lg:w-full m-1">
                    <div href="#" className="block bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <table className="order-collapse border-slate-400 table-auto w-full my-3 border-collapse border ">
                        <thead>
                          <tr className="text-center border-b-2">
                            <th className=" border border-slate-300 p-3">Variant</th>
                            <th className=" border border-slate-300  p-3">Variant Price</th>
                            <th className=" border border-slate-300  p-3">SKU </th>
                            <th className=" border border-slate-300  p-3">Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center ">
                            <td className="border border-slate-300">Blue--</td>
                            <td className="border border-slate-300 p-3"><input type="text" className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={0} required /></td>
                            <td className="border border-slate-300 p-3">
                              <select className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500">
                                <option>Blue--</option>
                                <option>Blue--</option>
                                <option>Blue--</option>
                              </select>
                            </td>
                            <td className="border border-slate-300 p-3"><input type="text" className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={0} required /></td>
                          </tr>
                          <tr className="text-center ">
                            <td className="border border-slate-300">Blue--</td>
                            <td className="border border-slate-300 p-3"><input type="text" className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={0} required /></td>
                            <td className="border border-slate-300 p-3">
                              <select className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500">
                                <option>Blue--</option>
                                <option>Blue--</option>
                                <option>Blue--</option>
                              </select>
                            </td>
                            <td className="border border-slate-300 p-3"><input type="text" className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={0} required /></td>
                          </tr>
                          <tr className="text-center ">
                            <td className="border border-slate-300">Green--</td>
                            <td className="border border-slate-300 p-3"><input type="text" className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={0} required /></td>
                            <td className="border border-slate-300 p-3">
                              <select className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500">
                                <option>Blue--</option>
                                <option>Blue--</option>
                                <option>Blue--</option>
                              </select>
                            </td>
                            <td className="border border-slate-300 p-3"><input type="text" className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={0} required /></td>
                          </tr>
                          <tr className="text-center ">
                            <td className="border border-slate-300">Orange--</td>
                            <td className="border border-slate-300 p-3"><input type="text" className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={0} required /></td>
                            <td className="border border-slate-300 p-3">
                              <select className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500">
                                <option>Blue--</option>
                                <option>Blue--</option>
                                <option>Blue--</option>
                              </select>
                            </td>
                            <td className="border border-slate-300 p-3"><input type="text" className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={0} required /></td>
                          </tr>
                          <tr className="text-center ">
                            <td className="border border-slate-300">Red--</td>
                            <td className="border border-slate-300 p-3"><input type="text" className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={0} required /></td>
                            <td className="border border-slate-300 p-3">
                              <select className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500">
                                <option>Blue--</option>
                                <option>Blue--</option>
                                <option>Blue--</option>
                              </select>
                            </td>
                            <td className="border border-slate-300 p-3"><input type="text" className="block p-2 w-full text-gray-900 rounded border border-gray-400 sm:text-xs focus:ring-b-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={0} required /></td>
                          </tr>
                        </tbody>
                      </table> 
                    </div>
                  </div>       
                </div>
              </div>
              <div className="w-full text-center mt-3 mb-5 items-center">
                <button type="button" className="py-3 px-6 text-base font-medium text-center text-black bg-[#57BB46] rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Changes</button>
              </div>
            

        </div>

    </>
  )
}

export default Add_Product