import { Link } from "react-router-dom"

function login() {
    return <>
        <div className='mainDiv w-full h-screen flex justify-center items-center'>
            <div className="formDiv p-5 md:w-3/6 w-full lg:w-1/3 py-8 rounded-2xl border-0 md:border-2">
                <h1 className="text-center text-4xl">Budget Tracker</h1>
                <div className="text-center mt-4">
                    <span>Welcome back to budget tracker</span>
                </div>
                <form action="" className="mt-7">
                    <div className="my-3">
                        <input type="email" name="username" id="username" className="input" placeholder="Enter email" required />
                    </div>
                    <div className="my-3">
                        <input type="password" name="password" id="password" className="input" placeholder="Enter password" required />
                    </div>
                    <div className="my-3">
                        <input type="checkbox" name="remember" id="remember" required />
                        <label htmlFor="remember" className="checkboxDiv">
                        <input type="checkbox" />
                        <span className="checkbox-checkmark"></span>
                            remember me</label>
                    </div>
                    <div className="my-3 text-right text-primary">
                        <span><Link to={'/'}>Forgot password?</Link></span>
                    </div>
                    <div className="mt-7 text-center">
                        <button type="button" className="btn btn-primary over-padding">Login</button>
                    </div>
                    <div className="my-4 text-center ">
                        <span>Don't have an account? <Link to={'/register'} className="text-primary">Register</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default login