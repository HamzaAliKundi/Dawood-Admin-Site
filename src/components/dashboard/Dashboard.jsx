import React, {useEffect}  from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Dashboard.css";
// import ceodawoodproud2 from "./Assets/Images/ceodawoodproud2.png"
import logo from "./Assets/Images/logo.png"
import jwtDecode from "jwt-decode";

const Dashboard = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if(!token) {
      navigate("/");
    }
  }, [navigate, token]);

  const userToken = localStorage.getItem("token");
  const jwt = jwtDecode(userToken);

  return (
    <>
       <div className='font-inter'>
            <div className='text-black bg-[white] grid grid-cols-12 min-h-screen '>
                <div className='w-full flex flex-col justify-between items-center bg-[#001e2b]  text-white col-span-2 '>
                    <div className='w-full p-3 text-base font-bold  space-y-8'>
                        <div className=' mx-auto '>
                            <img src={logo} alt="logo" />
                        </div>
                        <div div className='mt-6 text-xl md:text-2xl lg:text-2xl font-bold abdal_color mx-auto'>
                            <h1>Admin Pannel</h1>
                            <hr className='w-full h-[1px] text-[gray] mt-3' />
                        </div>

                        <ul className='mt-12 space-y-4'>
                            <li className='flex justify-start items-center gap-2 text-lg'>
                                {/* <MdAdminPanelSettings size={20} /> */}
                                <Link to="/"  >
                                    Dashbroad
                                </Link>
                            </li>
                            <li className='flex justify-start items-center gap-2 text-lg'>
                                {/* <FaUser size={20} className="text-[white]" /> */}
                                <Link to="/clients/info">
                                    Client Info
                                </Link>
                            </li>
                            <li className='flex justify-start items-center gap-2 text-lg'>
                                {/* <BsFillPersonLinesFill size={20} className="text-[white]" /> */}
                                <Link to="/candidates/info" >
                                    Applicant Info
                                </Link>
                            </li>
                           
                        </ul>
                    </div>

                    {/* log out button */}

                    <button
                        onClick={onclick}
                        className=' flex gap-2 items-center justify-center py-2 self-start ml-2 font-semibold'>
                        <p>Log out </p>
                        {/* <HiOutlineLogout size={15} /> */}
                    </button>
                </div>
                {/* <DashBoardSidebar /> */}
                <div className="flex flex-col justify-start col-span-10 w-full">
                    <div className=' flex justify-between items-center bg-[white] border-b border-[gray]/50 h-[64px] w-full  mx-auto px-4'>
                        <div className='text-xl text-[gray] font-semibold'>
                            Welcome to Admin Pannel
                        </div>
                     
                          {/* <img src="./Assets/Images/ceodawoodproud2.png" alt="dawood" /> */}
                      <div>  <span style={{ color: "dimgray" }} >  Logged in as : </span> <b style={{ fontFamily: "koHo" }} > {jwt.name} </b> </div>
                       
                    </div>
                    <div className='mx-auto w-full'>
                        <h1>Content Dashbord</h1>
                        <div class="container mx-auto">
                            <div className="row"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Dashboard;
