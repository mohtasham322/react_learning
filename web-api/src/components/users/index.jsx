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
        <table className="table-auto w-full">
            <thead className='table-header-group'>
                <tr className='table-row bg-orange-400'>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody className='table-row-group'>
                {users.map((user)=>(
                    <tr key={user.id} className='table-row'>
                    <td className='text-center'>{user.name}</td>
                    <td className='text-center'>{user.email}</td>
                    <td className='text-center'>{user.phone}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
    )

};

export default Users