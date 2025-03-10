import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router';
// #E8F0FE
const SignUpForm = () => {
    const [mail, setMail] = useState('')
    const [mailError, setMailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [show, setShow] = useState(false);
    const navigate = useNavigate()


    const checkMail = () => {
        let regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!mail || !mail.match(regEx)) {
            setMailError(true)
        }else setMailError(false)
    }

    const checkPassword = () => {
        if(!password || password.length < 0) {
            setPasswordError(true)
        }else setPasswordError(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(mail == '' || mail.length < 0 || password == '' || password.length < 0){
            alert('Invalid Inputs')
        }else{
            let details = {
                email: mail,
                password: password
            }

            localStorage.setItem('userDetails', JSON.stringify(details))
        }

        setMail('');
        setPassword('');
        navigate('/login')
    }

  return (
    <div className='flex flex-col items-center gap-4'>
        <header  className='self-start p-4 text-3xl font-bold text-[#0A66C2]'>
            <h1>Linked<span className='bg-[#0A66C2] text-amber-50 px-1 py-0'>in</span></h1>
        </header>
        <h1 className='text-3xl'>Make the most of your professional life</h1>
        <form 
        action="" 
        className={`w-[450px] min-w-[400px] mx-auto md:shadow-2xl p-4 rounded space-y-6`}
        onSubmit={handleSubmit}
        >
            {/* EmailField */}
            <div className="mail my-8">
                <label htmlFor="email" className='text-[0.75rem] font-bold text-[#333]'>Email or phone number</label>
                <div className={`border rounded ${mailError && 'border-red-600'}`}>
                    <input 
                    type="text" 
                    name="email" 
                    id="email"  
                    placeholder='Email' 
                    className=' w-full px-4 py-1.5 outline-0'
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    onFocus={() => setMailError(false)}
                    onBlur={checkMail}
                    />
                </div>
                <p className={ mailError ? 'text-red-600 text-[0.75rem]' : 'hidden' }>Please enter your email address or mobile number.</p>
            </div>

            {/* passwordField */}
            <div className="password">
                <label htmlFor="password" className='text-[0.75rem] font-bold text-[#333]'>Password</label>
                <div className={`border rounded px-2 flex ${passwordError && 'border-red-600'}`}>
                    <input 
                    type={show ? 'text' : 'password'} 
                    name="password" 
                    id="password"  
                    placeholder='Password' 
                    className=' w-full px-4 py-1.5 outline-0'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    onFocus={() => setPasswordError(false)}
                    onBlur={checkPassword}
                    />
                    <button 
                    type='button' 
                    className='text-[#0A66C2] font-bold'
                    onClick={() => setShow(!show)}
                    >{show ? 'Hide' : 'Show'}</button>
                </div>
                <p className={ passwordError ? 'text-red-600 text-[0.75rem]' : 'hidden' }>Please enter your password.</p>
            </div>

            {/* checkbox */}
            <div className="check flex">
                <input type="checkbox" name="remeber" id="remember" className='w-[20px] h-[20px] bg-green-700 mr-2'/>
                <label htmlFor="remeber">Remember me</label>
            </div>

            <div className="policy">
                <p className='text-[0.75rem] text-center'>By clicking Agree & Join or Continue, you agree to the LinkedIn 
                <a className='text-[#0A66C2] font-bold'>User Agreement, </a>
                 <a href="" className='text-[#0A66C2] font-bold'>Privacy Policy,</a>  and <a className='text-[#0A66C2] font-bold'>Cookie Policy.</a></p>
            </div>

            <div className='border bg-[#0A66C2] flex justify-center py-3 rounded-full text-amber-50 font-bold'>
                <button type='submit' className='w-full'>Agree & Join</button>
            </div>

            {/* divider */}
            <hr className='my-10'/>

            {/* google sign up */}
            <div>
            <div className='border rounded-4xl flex justify-center items-center gap-2 py-3'>
                <FcGoogle />
                <p>Continue with Google</p>
            </div>
            </div>

            {/* Already signed in */}
            <div className='text-center text-[0.8rem]'>
                <p>Already on LinkedIn?<a href="" className='text-[#0A66C2] font-bold'> Sign in</a></p>
            </div>
        </form> {/* Form end */}

        <div>
            <p>Looking to create a page for a business?<a href="" className='text-[#0A66C2] font-bold text-[0.8rem]'> Get help</a></p>
        </div>
    </div>
  )
}

export default SignUpForm