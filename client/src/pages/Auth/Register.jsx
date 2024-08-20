import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/img/logo.png'
import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"
import toast from "react-hot-toast"

const Register = () => {
  const navigate = useNavigate()
  const { createUser, user, setUser, updateUserProfile } = useContext(AuthContext);
  

  const handleSignUp = async (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    try{
      const result = await createUser(email, password)
      console.log(result);
      await updateUserProfile(name, photo)
      setUser({ ...user, photoURL:photo, displayName:name})
      toast.success('Account Created Successfully.')
      navigate('/')
    }
    catch(err){
      console.log(err)
      toast.error(err.message)
    }
  }


    return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-10'>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            <img
              className='w-auto h-7 sm:h-8'
              src={logo}
              alt='logo'
            />
          </div>

          <p className='mt-3 text-xl text-center text-gray-600 '>
            Get Your Free Account Now.
          </p>

          <form  onSubmit={handleSignUp}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Username
              </label>
              <input
                id='name'
                autoComplete='name'
                name='name'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
                required
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
                required
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
                required
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='password'
                required
              />
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  md:w-1/4'></span>

            <Link
              to='/login'
              className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or sign in
            </Link>

            <span className='w-1/5 border-b  md:w-1/4'></span>
          </div>
        </div>
        <div
          className='hidden bg-cover bg-center lg:block lg:w-1/2'
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Register