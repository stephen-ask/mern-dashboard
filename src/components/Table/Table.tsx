import React from "react";
import { User } from "../../models/user.model";

export const Table: React.FC<any> = (user) => {
  console.log(user.user._id);
  return (
    <div key={user.user._id}>
      <p>Username: {user.user.username}</p>
      <p>Phone: {user.user.phone}</p>
    </div>
  );
}