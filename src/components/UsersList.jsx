import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const UsersList = ({ onUserSelect }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let token1 = JSON.parse(token);
    let tokenValue = token1.token;

    fetch("https://login-system-julmov-3ea0ad07bce0.herokuapp.com/api/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="usersList">
      <ul className="usersUl">
        {users.map((user) => (
          <li
            key={user.id}
            className="usersLi"
            onClick={() => onUserSelect(user)}
          >
            <FontAwesomeIcon icon={faUser} className="userIcon" />
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
