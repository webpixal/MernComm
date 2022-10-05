import React from 'react'
import Upload from '../asset/upload.svg'

function Add_Category_Modal({visible , onClose}) {
if(!visible) return null;

  return (
    <div className='fixed inset-0 bg-secoundery bg-opacity-60 backdrop-blur-lg z-50 flex justify-center items-center'> 
          <div className="w-full h-full max-w-md md:h-auto ">
            {/* Modal content */}
          <form action="#" className=" bg-white rounded-lg shadow-lg dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex justify-between items-start p-3 rounded-t  dark:border-gray-600">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Category Information
              </h4>
              <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="editUserModal">
                <svg  className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>  
              </button>
            </div>
            {/* Modal body */}
            <div className="px-5 py-1 space-y-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 sm:col-span-12 md:col-span-6">
                  <label className="block mb-1 text-sm font-normal text-gray-900 dark:text-gray-300">Name</label>
                  <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:ring-1 focus:ring-primary focus:outline-none" placeholder required />
                </div>
                <div className="col-span-6 sm:col-span-12 md:col-span-6">
                  <label className="block mb-1 text-sm font-normal text-gray-900 dark:text-gray-300">Cammition</label>
                  <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-1 focus:ring-primary focus:outline-none" placeholder required />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <div className="flex w-full">
                    <label className="block mb-1 text-sm font-normal text-gray-900 dark:text-gray-300 self-center mr-3">Category Icon</label>
                    <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-16 h-16 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col justify-center items-center pt-3 pb-4">
                        <img src={Upload} className="w-10 h-10" />
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div> 
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <div className="flex w-full">
                    <label className="block mb-1 text-sm font-normal text-gray-900 dark:text-gray-300 self-center mr-3">Category Banner</label>
                    <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-16 h-16 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col justify-center items-center pt-3 pb-4">
                        <img src={Upload} className="w-10 h-10 " />
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div> 
                </div>
                <div className="col-span-12 sm:col-span-12">
                  <label className="block mb-1 text-sm font-normal text-gray-900 dark:text-gray-300">Meta Title</label>
                  <input type="text" className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-1 focus:ring-primary focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder required />
                </div>
                <div className="col-span-6 sm:col-span-12">
                  <label className="block mb-1 text-sm font-normal text-gray-900 dark:text-gray-300">Descrpition</label>
                  <textarea className="block p-2 w-full text-gray-900 rounded-lg border border-gray-400 sm:text-xs focus:ring-1 focus:ring-primary focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " rows={5} defaultValue={"\n                            "} />
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="w-full text-center items-center p-3 rounded-b border-gray-200 dark:border-gray-600 space-y-20">
              <button type="button" className="py-1 px-4 text-base font-normal text-center text-secoundery bg-primary rounded-lg hover:bg-secoundery hover:text-white focus:ring-4 focus:outline-none">Save Changes</button>
            </div>
          </form>
</div>

    </div>

    
  );
}

export default Add_Category_Modal
