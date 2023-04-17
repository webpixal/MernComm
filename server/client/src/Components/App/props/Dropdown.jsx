import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <>
          <button type="button" onClick={() => setIsOpen(prev=>!prev)} 
          className="flex items-center pr-2 w-full text-base font-normal text-white 
          rounded transition duration-75 hover:bg-primary" aria-controls="dropdown-example"
           data-collapse-toggle="dropdown-example">
            <img src={props.img} alt="" />
            <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-white"><i className="bx bx-home" /></span>
            <span className="flex-1 text-left text-sm font-medium whitespace-nowrap">{props.title}</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <ul  className={`space-y-2 ` + (isOpen? 'block' :'hidden')}>
            {props.data.map((listItem,index)=>{
                return (<li key={index} >
                            
                    <Link to={listItem.labelLink} className="flex items-center p-1 pl-16 w-full text-sm font-normal text-gray-200 rounded transition duration-75  hover:bg-[#57BB46] dark:text-white dark:hover:bg-gray-700">{listItem.label}</Link>
                  </li>)
            })}
          </ul>
        </>
    </>
  )
}
export default Dropdown