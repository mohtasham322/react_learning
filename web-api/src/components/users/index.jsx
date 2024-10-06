import axios from 'axios';
import { useEffect, useState } from 'react';
function Users() {
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/users');
                setUsers(response.data);
            } catch (error) {
                setErrors(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (loading) return <div>Loading....</div>
    if (errors) return <div>Error: {errors}</div>

    return(
        <div className='lg:p-48 md:p-32'>
        <table className="table-auto w-full">
            <thead className='table-header-group'>
                <tr className='table-row bg-orange-400'>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='table-row-group'>
                {users.map((user)=>(
                    <tr key={user.id} className='table-row'>
                    <td className='text-center py-4'>{user.name}</td>
                    <td className='text-center'>{user.email}</td>
                    <td className='text-center'>{user.phone}</td>
                    <td className='text-center'>
                        <button className='px-3 py-2 rounded bg-blue-500 text-white'>edit</button>
                        <button className='px-3 py-2 rounded bg-red-500 text-white ms-5'>delete</button>
                    </td>
                </tr>
                ))}
                
            </tbody>
        </table>
        </div>
    )

};

export default Users