// ***** Logout function for Roost News used on Navigation bar *****

import { useHistory } from "react-router-dom";

function Logout(props) {

  const history = useHistory();
  fetch ("/api/logout", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  })
  .then(res => res.json())
  .then(data => {
    if (data === '{"success": true}') {
      localStorage.setItem("isLoggedIn", false);
      console.log(localStorage.getItem("isLoggedIn"));
      alert("Thank you for visiting us. Please come again!");
      props.setLoggedInState(false);
      history.pushState("/login");
    }
  })
  .catch(err => err);
}

export default Logout
