import React, { useEffect,useState } from 'react'
import { GiCrossMark } from "react-icons/gi";
import { Link,useLocation } from 'react-router-dom';
import Signin from '../Components/authentication/Signin';

const SignIn = () => {
  const [currentPath, setcurrentPath] = useState()
  const location = useLocation()
  useEffect(() => {
   setcurrentPath(location.pathname)
   
  }, [currentPath])
  
  
  return (
    <div className=' flex-col h-full w-full overflow-y-auto'>
      <div className='center' >

      <header className='p-5 pl-6 pr-6  mt-5 w-11/12 '>
        <div className='flex w-full justify-between'>
        <img src={'logo'} alt="Logo"  className='text-white'/>
        <Link to='/marketplace'>
        <GiCrossMark className ='text-white' size={24} />
        </Link>

        </div>
      </header>
      </div>
      <div className='h-full w-full '>
        <div className=' flex justify-start items-center flex-col  h-full pt-10 '>

     
        {/* sign in/up  */}
        <div>
          <Link className={`${currentPath =='/signin'?'text-navColor':'text-white'} transition-all   font-bold mr-3`}>
          SIGN IN
          </Link>
          <Link className={`${currentPath =='/signup'?'text-navColor':'text-white'} transition-all   font-bold mr-3`}>
          SIGN UP
          </Link>
        </div>
    {/* sign in form  */}
        
      <Signin/>
      </div>
      </div>
    </div>
  )
}

export default SignIn