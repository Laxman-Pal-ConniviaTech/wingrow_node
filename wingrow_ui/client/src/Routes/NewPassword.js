import React, { useState, useEffect } from "react";

export default function NewPassword() {

  const [data, setData] = useState({
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const resetPassword = (e)=>{
    e.preventDefault();

    const phoneNumber = "+91" + data.phone
    console.log(phoneNumber)
  }


  return (
    <div>
      <form onSubmit={resetPassword}>
        <input type="number" name="phone"  value={data.phone} onChange={handleChange} placeholder="Phone Number"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
