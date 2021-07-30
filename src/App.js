  
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyRegisterComponent />
    </div>
  );
}

function MyRegisterComponent() {
  let [userList, setUserList] = useState([
    { id: 2, name: "rahul", email: "rahul@gmail.com", mobile: "212121" },
    { id: 1, name: "sachin", email: "sachin@gmail.com", mobile: "212121" },
  ]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");


  const usernameChangeHandler = (e) => setUsername(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);
  const emailChangeHandler = (e) => setEmail(e.target.value);
  const mobileChangeHandler = (e) => setMobile(e.target.value);


  const addNewUser = () => {
    const newuser = {
      id: userList.length + 1,
      name: username,
      password: password,
      email,
      mobile,
    };

  }
}