import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="h-screen flex  md:flex-row flex-col gap-10 justify-around items-center">
            <div className="card w-96 h-[500px] rounded bg-[#5C8374] p-10">
                <h3 className="text-3xl text-white text-center mb-4 font-bold">Welcome Safichat</h3>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Name</label>
                        <input type="text" id="name" name="name" placeholder="Type your name..." className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Email</label>
                        <input type="email" placeholder="Type your email..." className="mt-1 p-2 w-full rounded-md border" name="email" id="" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Password</label>
                        <input className="p-2 mt-1 rounded-md border w-full" placeholder="Type your pass..." type="password" name="password" id="" />
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="py-2 w-full  rounded-md bg-[#1B4242] text-white">Register</button>
                    </div>
                    <div>
                        <p className='text-white'>Already have an account please <Link to="/login"><span className='text-blue-500 underline'>Login</span></Link></p>
                    </div>
                </form>
            </div>
            <div>
                <h3 className="text-4xl font-bold">Register</h3>
            </div>


        </div>
    );
};

export default Register;