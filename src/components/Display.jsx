import React, { useState, useEffect } from "react";
import axios from "axios";


const Display = () => {
  const [data, setData] = useState();
   //console.log(data)
  useEffect(() => {
    const getdata = async () => {
      let res = await axios.get(`http://localhost:8080/data`);
      setData(res.data);
    };
    getdata();
  }, []);
  return (
    <div>
   
      
  {data.map(e=>(
    <>
    <div key={e.id} > 
      {e.id} {e.first_name}:{e.last_name}</div>
      <img src={e.avatar}/>
   </>
  ))}
    </div>
  );
};

export default Display;
