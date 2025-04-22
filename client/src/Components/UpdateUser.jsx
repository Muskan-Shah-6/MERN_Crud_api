/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const UpdateUser = () => {
    const { id } = useParams()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUsers/' + id)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)

            })
            .catch(err => console.log(err))
    }, [])

    const update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3001/updateUser/"+id, {
            name, email, age
        }).then(
            result => console.log(result),
            Swal.fire({
                icon: "success",
                title: "Updated",
                text: "User Updated successfully!"
            }).then(
                navigate('/')
            )


        ).catch(err => console.log(err))
    }
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-500">
                <form onSubmit={update} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">User Update form</h2>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="age" className="block text-gray-600 mb-1">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your age"
                            onChange={(e) => setAge(e.target.value)}
                            value={age}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                    >
                        Update
                    </button>
                </form>
            </div>
        </>
    )
}

export default UpdateUser
