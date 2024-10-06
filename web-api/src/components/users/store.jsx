import axios from "axios";
import { useState } from "react"

function StoreUser() {
    const [formData, setFormData] = useState({
        'name': '',
        'email': '',
        'phone': '',
        'password': ''
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/users', formData)
            .then((response) => {
                setResponseMessage('user created successfully');
                setFormData({
                    'name' : '',
                    'email' : '',
                    'password' : '',
                    'phone' : ''
                });
                setTimeout(()=>{
                    setResponseMessage('');
                }, 3000);
            })

            .catch((error) => {
                setResponseMessage('error submitting the form')
                setTimeout(()=>{
                    setResponseMessage('');
                }, 3000)
            });

    }



    return (
        <div className="p-10 md:p-40">
            <form onSubmit={handleSubmit}>
                <div className="border-b border-gray-900/10 pb-12">
                    {responseMessage && <div className="px-7 mb-4 py-3 bg-green-600 text-white">{responseMessage}</div>}
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Create User</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                        <div className="sm:col-span-4">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div className="mt-2">
                                <input type="text" name="name" id="name" value={formData.name} autoComplete="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                    required />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" value={formData.email} autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required onChange={handleChange} />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" value={formData.password} autoComplete="password" className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required onChange={handleChange} />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                            <div className="mt-2">
                                <input id="phone" name="phone" type="number" value={formData.phone} autoComplete="phone" className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required onChange={handleChange} />
                            </div>
                        </div>

                    </div>
                </div>


                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>

        </div>
    )

}


export default StoreUser