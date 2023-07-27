import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isloggedIn && (
        <input type="password" placeholder="confirm password" />
      )}
      {/* //yaha pe agr pahla wala false ho jata
     hai to && ke baad bala run hi nahi hota hai agar true hua to && ke baad wala run karega and confirm password likh dega */}
      <button type="submit">
        {props.isloggedIn == false ? "register" : "Login"}
      </button>
    </form>
  );
}

export default Form;
