import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import user_img from '../assets/img/user_img.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
const Nav = () => {
   const {user, logOut} = useContext(AuthContext)
   return (
     <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
       <div className='flex-1'>
         <div className='flex gap-2 items-center'>
           <img className='w-auto h-7' src={logo} alt='' />
           <span className='font-bold'>SoloSphere</span>
         </div>
       </div>
       <div className='flex-none'>
         <ul className='menu menu-horizontal px-1'>
           <li>
             <Link to='/'>Home</Link>
           </li>
 
           <li>
             <Link to='/allJobs'>All Jobs</Link>
           </li>

           {
            !user && <li>
            <Link to='/login'>Login</Link>
          </li>
           }
         </ul>
 
         {
            user && <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full' title={user?.displayName}>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user.photoURL ? user.photoURL : user_img}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/addJob' className='justify-between'>Add Job</Link>
              </li>
              <li>
                <Link to='/postedJob'>My Posted Jobs</Link>
              </li>
              <li>
                <Link to='/myBid'>My Bids</Link>
              </li>
              <li>
                <Link to='/bidRequest'>Bid Requests</Link>
              </li>
              <li onClick={() => logOut()} className='mt-2'>
                <button className='bg-red-500 block text-center font-semibold text-white cursor-pointer'>Logout</button>
              </li>
            </ul>
          </div>
         }
       </div>
     </div>
   )
 }
 
 export default Nav;