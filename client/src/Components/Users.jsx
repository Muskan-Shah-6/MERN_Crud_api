import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const Users = () => {
    const [users, setUsers] = useState([])
    // console.log(setUsers(users))

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
            .then(res => {
                console.log(res)
                Swal.fire({
                    icon: "success",
                    title: "Deleted",
                    text: "Record Deleted successfully!"
                }).then(() => {
                    window.location.reload(); 
                });


            })
            .catch(errr => console.log(errr))
    }
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-500">
                <div className="w-full max-w-4xl bg-white rounded-lg p-6 shadow-md">
                    <Link to="/create" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">Add Users</Link>
                    <table className="w-full table-auto border border-gray-300 rounded-md overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left text-gray-600">Name</th>
                                <th className="px-4 py-2 text-left text-gray-600">Email</th>
                                <th className="px-4 py-2 text-left text-gray-600">Age</th>
                                <th className="px-4 py-2 text-left text-gray-600">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="border-t hover:bg-gray-50">
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">{user.age}</td>
                                    <td className="px-4 py-2 space-x-2">
                                        <Link to={`/update/${user._id}`} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm">
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDelete(user._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Users
