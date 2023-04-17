import React, {useState} from 'react'
import Add_Category_Modal from '../props/Add_Category_Modal'
import Pen from '../asset/edit.svg'
import Bin from '../asset/bin_delete.svg'
import Icon from '../asset/imgp.jpg'
import Sideber from '../Sideber'
const Category = () => {
  const [catModal ,setCatModal ] = useState(false)
  const handelClose=() => setCatModal(false)
  return (
    <>
    <Sideber/>  
        <div className='mb-1 ml-40 sm:ml-80  max-w-full bg-white"'>
          <div className="px-2 py-1 mb-1">
              <div className="flex lg:flex-row flex-col">
                  <div className=" lg:w-full m-1">
                      <div href="#" className="block bg-white px-3 py-3 rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                           <div className="inline mx-3 ">
                               <button onClick={()=>setCatModal(true)} type="button" className="px-5 py-2 text-white bg-[#101920] hover:bg-gray-700 rounded-lg">Add New Category</button> 
                           </div>    
                            <table className="order-collapse border-slate-400 table-auto w-full my-5">
                              <thead>
                                <tr className="text-left border-b-2">
                                  <th>#</th>
                                  <th>Icon</th>
                                  <th>Banner</th>
                                  <th>Name</th>
                                  <th>Commition</th>
                                  <th>Featured</th>
                                  <th className="text-center">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="p-3 ">
                                  <td className="p-3">1</td>
                                  <td className="p-3"><img src={Icon} alt="p_img" className="w-14 h-14" /></td>
                                  <td className="p-3"><img src={Icon} alt="p_img" className="w-14 h-14" /></td>
                                  <td className="p-3">Camera DSLR</td>
                                  <td className="p-3">10.25 %</td>
                                  <td className="p-3">
                                    <label className="inline-flex relative items-center cursor-pointer">
                                      <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
                                      <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-1 peer-focus:ring-primary dark:peer-focus:ring-primary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />    
                                    </label>
                                  </td>
                                  <td className="p-3">
                                    <div className="inline">
                                      <a href className="inline-block"><img src={Pen} className="mr-1" /></a>
                                      <a href className="inline-block"><img src={Bin} className /></a>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="p-3 ">
                                  <td className="p-3">2</td>
                                  <td className="p-3"><img src={Icon} alt="p_img" className="w-14 h-14" /></td>
                                  <td className="p-3"><img src={Icon} alt="p_img" className="w-14 h-14" /></td>
                                  <td className="p-3">Camera DSLR</td>
                                  <td className="p-3">10.25 %</td>
                                  <td className="p-3">
                                    <label className="inline-flex relative items-center cursor-pointer">
                                      <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
                                      <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-1 peer-focus:ring-primary dark:peer-focus:ring-primary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />    
                                    </label>
                                  </td>
                                  <td className="p-3">
                                    <div className="inline">
                                      <a href className="inline-block"><img src={Pen} className="mr-1" /></a>
                                      <a href className="inline-block"><img src={Bin} className /></a>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="p-3 ">
                                  <td className="p-3">3</td>
                                  <td className="p-3"><img src={Icon} alt="p_img" className="w-14 h-14" /></td>
                                  <td className="p-3"><img src={Icon} alt="p_img" className="w-14 h-14" /></td>
                                  <td className="p-3">Camera DSLR</td>
                                  <td className="p-3">10.25 %</td>
                                  <td className="p-3">
                                    <label className="inline-flex relative items-center cursor-pointer">
                                      <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
                                      <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-1 peer-focus:ring-primary dark:peer-focus:ring-primary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />    
                                    </label>
                                  </td>
                                  <td className="p-3">
                                    <div className="inline">
                                      <a href className="inline-block"><img src={Pen} className="mr-1" /></a>
                                      <a href className="inline-block"><img src={Bin} className /></a>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="p-3 ">
                                  <td className="p-3">4</td>
                                  <td className="p-3"><img src={Icon} alt="p_img" className="w-14 h-14" /></td>
                                  <td className="p-3"><img src={Icon} alt="p_img" className="w-14 h-14" /></td>
                                  <td className="p-3">Camera DSLR</td>
                                  <td className="p-3">10.25 %</td>
                                  <td className="p-3">
                                    <label className="inline-flex relative items-center cursor-pointer">
                                      <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
                                      <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-1 peer-focus:ring-primary dark:peer-focus:ring-primary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />    
                                    </label>
                                  </td>
                                  <td className="p-3">
                                    <div className="inline">
                                      <a href className="inline-block"><img src={Pen} className="mr-1" /></a>
                                      <a href className="inline-block"><img src={Bin} className /></a>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="p-3 ">
                                  <td className="p-3">5</td>
                                  <td className="p-3"><img src={Icon} alt="p_img" className="w-14 h-14" /></td>
                                  <td className="p-3"><img src={Icon} alt="p_img" className="w-14 h-14" /></td>
                                  <td className="p-3">Camera DSLR</td>
                                  <td className="p-3">10.25 %</td>
                                  <td className="p-3">
                                    <label className="inline-flex relative items-center cursor-pointer">
                                      <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
                                      <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-1 peer-focus:ring-primary dark:peer-focus:ring-primary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />    
                                    </label>
                                  </td>
                                  <td className="p-3">
                                    <div className="inline">
                                      <a href className="inline-block"><img src={Pen} className="mr-1" /></a>
                                      <a href className="inline-block"><img src={Bin} className /></a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table> 
                          <div className="flex flex-col items-end">
          {/* Help text */}
                              <span className="text-sm text-gray-700 dark:text-gray-400">
                                Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">20</span> of <span className="font-semibold text-gray-900 dark:text-white">Total</span> Entries
                              </span>
                              {/* Buttons */}
                              <div className="inline-flex mt-2 xs:mt-0">
                                <button className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                  Previous
                                </button>
                                <button className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                  Next
                                </button>
                              </div>
                        </div>
                      </div>
                  </div>       
              </div>
          </div>
        </div>
    <Add_Category_Modal onClose={handelClose} visible={catModal}/>
    </>
  )
}

export default Category
