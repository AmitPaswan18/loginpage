// import { useEffect, useState } from "react";

// import axios from "axios";

// function App() {
//   const [username, setUserName] = useState([]);
//   const [first_name, setFirstName] = useState([]);
//   const [email, setEmail] = useState([]);
//   const [password, setPassword] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/")
//       .then((response) => {
//         console.log(response.data);
//         // setUserName(response.data);
//         // setFirstName(response.data);
//         // setEmail(response.data);
//         // setPassword(response.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleUsernameChange = (event) => {
//     setUserName(event.target.value);
//   };

//   const handlefirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };
//   const handleemailChange = (event) => {
//     setEmail(event.target.value);
//   };
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   return (
//     <>
//       <div className="flex justify-end bg-blue-300">
//         {/* making of a form  */}
//         <div className="w-[50%]">
//           <form

//             action="http://localhost:4000/api/users"
//             method="post">
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={handleUsernameChange}
//             />
//             <input
//               type="text"
//               placeholder="first_name"
//               value={first_name}
//               onChange={handlefirstNameChange}
//             />
//             <input
//               type="text"
//               placeholder="email"
//               value={email}
//               onChange={handleemailChange}
//             />
//             <input
//               type="password"
//               value={password}
//               placeholder="Password"
//               onChange={handlePasswordChange}
//             />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//         <div>
//           {/* <div className="justify-end w-[50%]">
//             {username.map((res) => (
//               <li className="list-none" key={crypto.randomUUID()}>
//                 {res.email}
//               </li>
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/users", {
        username,
        first_name,
        email,
        password,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setUsername("");
    setFirstName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex justify-center h-[100vh] bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800">
      <div></div>
      <div className="w-[50%] bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <form
          className="flex justify-center items-center gap-2 flex-col"
          onSubmit={handleSubmit}>
          <input
            className="rounded-sm h-6 my-1 w-[30%] "
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            className="rounded-sm h-6 my-1 w-[30%] "
            type="text"
            placeholder="First Name"
            value={first_name}
            onChange={handleFirstNameChange}
          />
          <input
            className="rounded-sm h-6 my-1 w-[30%] "
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="rounded-sm h-6 my-1 w-[30%]"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
