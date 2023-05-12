import React, {useEffect}  from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if(!token) {
      navigate("/");
    }
  }, [navigate, token]);

  return (
    <>
     <h1>Admin Dashborad</h1>
    </>
  );
};

export default Dashboard;
