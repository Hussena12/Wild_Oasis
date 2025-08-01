import React from "react";
import Counter from "../components/Counter";

const page = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await data.json();
  console.log(res);

  return (
    <div>
      {res.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      <Counter res={res} />
    </div>
  );
};

export default page;
