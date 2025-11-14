import React from "react";
import UserCard from "./UserCard";

const UserExample = () => {
  const users = [
    {
      name: "Wanza Furniture",
      image: "https://via.placeholder.com/200",
      description: "We provide premium furniture and custom-made designs."
    },
    {
      name: "YeBuna Coffee",
      image: "https://via.placeholder.com/210",
      description: "Finest Ethiopian roasted coffee products."
    },
    {
      name: "Selam Tech",
      image: "https://via.placeholder.com/220",
      description: "High-quality electronics & accessories."
    },
    {
      name: "Ethio Fashion",
      image: "https://via.placeholder.com/230",
      description: "Modern clothing with Ethiopian cultural touches."
    }
  ];

  return (
<>
<div>
  <h1>our user </h1>
</div>
 <div 
      style={{ 
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        backgroundColor:'(0 78% 21% / 0.767)',
        marginTop:'18px'

      }}
    >
      
      {users.map((u, index) => (
        <UserCard user={u} key={index} />
      ))}
    </div>
</>
   
  );
};

export default UserExample;
