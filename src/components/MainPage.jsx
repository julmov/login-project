import React from "react";
import UsersList from "../components/UsersList";


const MainPage = () => {
  return (
    <div>
      <h2>Welcome to the Main Page!</h2>
      <p>You are successfully logged in.</p>
      <h3>List of Users:</h3>
      <UsersList />
    </div>
  );
};

export default MainPage;
