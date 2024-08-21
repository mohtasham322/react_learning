import { Link } from "react-router-dom"

function register() {
    return <>
        <div className='mainDiv w-full h-screen flex justify-center items-center'>
            <div className="formDiv p-5 md:w-3/6 w-full lg:w-1/3 py-8 rounded-2xl border-0 md:border-2">
                <h1 className="text-center text-4xl">Budget Tracker</h1>
                <div className="text-center mt-4">
                    <span>Create a free account</span>
                </div>
                <form action="" className="mt-7">
                    <div className="my-3">
                        <input type="text" name="name" id="name" className="input" placeholder="Enter name" required />
                    </div>
                    <div className="my-3">
                        <input type="email" name="email" id="email" className="input" placeholder="Enter email" required />
                    </div>
                    <div className="my-3">
                        <input type="password" name="password" id="password" className="input" placeholder="Enter password" required />
                    </div>
                    <div className="my-3">
                        <input type="password" name="confirm_password" id="confirm_password" className="input" placeholder="Confirm password" required />
                    </div>
                    <div className="mt-7 text-center">
                        <button type="button" className="btn btn-primary over-padding">Register</button>
                    </div>
                    <div className="my-4 text-center ">
                        <span>Already have an account? <Link to={'/login'} className="text-primary" >Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default register