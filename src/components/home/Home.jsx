import React, { useState } from "react";
import "./Assets/css/home.css"

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };


  return (
    <div>
      <div className="min-h-screen backGroundImageDesign">
        <div className="flex flex-col justify-center items-center space-y-1 h-screen">
          <p className="font-extrabold text-[32px] sm:text-[36px] md:text-[40px] xl:text-[48px] abdal_color">
            Welcome Mr Dawood Hussain
          </p>
          <div className="w-[80px] h-[80px] relative mx-auto">
            {/* <Image src={"/Images/logo.png"} fill alt='logo' className='object-contain' /> */}
          </div>
          <div className="grid grid-cols-1 w-full px-6 py-4 bg-white shadow-md sm:max-w-md sm:rounded-lg mx-auto">
            <form onSubmit={handleLogin}>
            <div className="mt-4">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-[#616161]"
                >
                  Username
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="username"
                    name="username"
                    className=" w-full mt-1 border-[1px] p-2  border-[#E0E0E0] rounded-md shadow-sm focus:border-[#7986CB] focus:ring focus:ring-[#9FA8DA] focus:ring-opacity-50"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-[#616161]"
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password"
                    className=" w-full mt-1 border-[1px] p-2  border-[#E0E0E0] rounded-md shadow-sm focus:border-[#7986CB] focus:ring focus:ring-[#9FA8DA] focus:ring-opacity-50"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-[#139dff] mt-8 text-white rounded-sm py-2 mb-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
