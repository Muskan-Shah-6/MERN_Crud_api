import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const CreateUser = () => {
    // STATES TO STORE THE FORM DATA
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        // Calling the api
        axios.post("http://localhost:3001/createUser", {
            name, email, age
        }).then(
            result => console.log(result),
            Swal.fire({
                icon: "success",
                title: "Done",
                text: "User added successfully!"
            }).then(
                navigate('/')
            )


        ).catch(err => console.log(err))

    }
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-500">
                <form onSubmit={submit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">User Form</h2>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
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
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
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
                            onChange={(e) => {
                                setAge(e.target.value);
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
            {/* <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> */}
        </>
    )
}

export default CreateUser
