import { useState } from "react";

const User = (props) => {
  const { name, location, contact } = props;
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h2>Count1: {count1}</h2>
      <h1>User Details</h1>
      <h2>Name: {name}</h2>
      <h2>Location: {location}</h2>
      <h2>Contact: {contact}</h2>
    </div>
  );
};

export default User;
