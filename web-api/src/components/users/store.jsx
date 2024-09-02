function StoreUser() {
    return (
        <div className="p-10 md:p-40">
        <form>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Create User</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                    <div className="sm:col-span-4">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div className="mt-2">
                            <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div className="mt-2">
                            <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                        <div className="mt-2">
                            <input id="phone" name="phone" type="number" autoComplete="phone" className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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