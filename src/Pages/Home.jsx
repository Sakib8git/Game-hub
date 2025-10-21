import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";


const Home = () => {
  const {user}=use(AuthContext)
  
  
  return <div>Home</div>;
};

export default Home;
