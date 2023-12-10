import { LiaEdit } from "react-icons/lia";
import user from "../../assets/user.jpg"
import {FaPhoneAlt, FaVideo } from "react-icons/fa";





const Dashboard = () => {
    return (
        <div className='w-screen flex'>
            <div className='w-[25%] border h-screen p-10 overflow-auto'>
                <div className='flex mb-5 justify-between items-center'>
                    <h3 className='text-3xl font-bold'>Safichat</h3>
                    <LiaEdit className='text-3xl'></LiaEdit>
                </div>
                <div>
                    <input type="search" name="search" placeholder='Search Your Friends...' className='p-3 border w-full rounded-full' id="" />
                </div>
                <div className="flex flex-col gap-3 mt-5">
                    <div className="flex items-center gap-4 border p-1 rounded">
                        <img src={user} className="w-[60px] rounded-full border" alt="" />
                        <div>
                            <h3 className="text-xl font-bold">safi miazi</h3>
                            <p className="text-zinc-700">active</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border p-1 rounded">
                        <img src={user} className="w-[60px] rounded-full border" alt="" />
                        <div>
                            <h3 className="text-xl font-bold">safi miazi</h3>
                            <p className="text-zinc-700">active</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border p-1 rounded">
                        <img src={user} className="w-[60px] rounded-full border" alt="" />
                        <div>
                            <h3 className="text-xl font-bold">safi miazi</h3>
                            <p className="text-zinc-700">active</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border p-1 rounded">
                        <img src={user} className="w-[60px] rounded-full border" alt="" />
                        <div>
                            <h3 className="text-xl font-bold">safi miazi</h3>
                            <p className="text-zinc-700">active</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border p-1 rounded">
                        <img src={user} className="w-[60px] rounded-full border" alt="" />
                        <div>
                            <h3 className="text-xl font-bold">safi miazi</h3>
                            <p className="text-zinc-700">active</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-[50%] border h-screen p-10'>
                <div className="bg-slate-200 px-2 py-1 rounded-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={user} className="w-[50px] rounded-full border-2" alt="" />
                        <h4 className="text-lg font-bold">safi miazi</h4>
                    </div>
                    <div className="flex items-center gap-5">
                        <FaPhoneAlt className="text-xl"></FaPhoneAlt>
                        <FaVideo className="text-xl"></FaVideo>
                        <IoIosSettings className="text-2xl"></IoIosSettings>
                    </div>
                </div>
                <div className="border rounded-md mt-5 h-[80%] border-red-600 w-full overflow-auto">
                    <div className="h-[1000px] px-10 py-14 border">
                        <div className=" mb-4 max-w-[50%] rounded-md border-2 bg-cyan-300 p-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className=" mb-4 max-w-[50%] mt-4 rounded-md border-2 bg-gray-400 ml-auto p-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className=" mb-4 max-w-[50%] rounded-md border-2 bg-cyan-300 p-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className=" mb-4 max-w-[50%] mt-4 rounded-md border-2 bg-gray-400 ml-auto p-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex gap-2">
                    <input type="search" name="search" placeholder='Type Here...' className='p-3 shadow-md border w-full rounded-full' id="" />
                    <button type="submit" className='p-3 border rounded-full font-bold bg-cyan-400 shadow-md'>Send</button>
                </div>
            </div>


            <div className='w-[25%] border h-screen p-10'>
                <div className=" border-2">
                    <img src={user} className="w-[150px] mx-auto mb-3 rounded-full border-2" alt="" />
                    <h3 className="text-2xl text-center font-bold">Md Safi Miazi</h3>
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;