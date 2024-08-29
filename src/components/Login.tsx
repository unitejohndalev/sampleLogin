import loginImage from '../assets/login_pic.jpg'

const Login = () => {
    return (
        <div className='h-[95vh] w-full'>
            <div className='max-w-[1200px] h-full flex m-auto'>
                <div className='flex justify-between w-full pt-[5rem]'>
                    <div className='w-[60%]'>
                        <img className='w-full h-[35rem]' src={loginImage} alt="" />
                    </div>
                    <form action="" className='h-[20rem] flex'>
                        <div className='m-auto w-full h-[90%]'>
                            <input className='w-full outline-none placeholder:pl-2 border-[.1rem] border-black  shadow-sm p-2' type="text" placeholder='User name' />
                            <input className='w-full outline-none placeholder:pl-2 border-[.1rem] border-black  shadow-sm p-2 mt-5' type="password" name="" id="" placeholder='Password' />
                            <div className='w-full flex justify-between mt-2'>
                                <div className='flex'>
                                    <input className='cursor-pointer' type="checkbox" name="" id="" />
                                    <p className='pl-2'>Remember Me</p>
                                </div>
                                <p className='pl-2 text-black opacity-75 cursor-pointer'>Forgot Password?</p>
                            </div>
                            
                              
                              
                            <button className='mt-10 px-10 py-2 border-[.1rem] border-black  shadow-sm text-[1.1rem]'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <footer className='flex justify-center'>
                <div className='max-w-[1200px] '>
                © 2021 Tsukiden Global Solutions Inc.
                </div>
                </footer>
        </div>
    )
}

export default Login