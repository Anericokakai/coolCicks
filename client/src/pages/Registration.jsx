import React from "react";
import "./Login.css";
import axios from "axios";
import styles from "../styles";
import { Link } from "react-router-dom";
function Registration() {
  const submitToDb = async (data) => {
    const result = await axios.post(
      "https://coolcicks.onrender.com/api/coolcicks/v1/add_user",
      data
    );
    return result;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector(".LoginCard");
    const formValues = new FormData(form);
    const name = formValues.get("name");
    const password = formValues.get("password");
    const email = formValues.get("email");
    const confirmPassword = formValues.get("con_password");
    const phone = formValues.get("phone");
    let data = {
      name: name,
      email: email,
      password: password,
      phone: phone,
    };
    await submitToDb(data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={`${styles.flexCenter} min-h-dvh bg-gray-100`}>
      <form
        onSubmit={handleSubmit}
        className=" LoginCard border px-20 py-20 rounded-2xl shadow-xl "
      >
        <h1 className=" text-3xl font-bold py-3">Registration page</h1>
        <div className="input">
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input type="text" name="name" />
        </div>
        <div className="input">
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input type="text" name="email" id="" />
        </div>
        <div className="input">
          <div>
            <label htmlFor="email">Phone</label>
          </div>
          <input type="text" name="phone" id="" />
        </div>
        <div className="input">
          <div>
            <label htmlFor="email">Password</label>
          </div>
          <input type="password" name="password" id="" />
        </div>
        <div className="input">
          <div>
            <label htmlFor="email"> Confirm Password</label>
          </div>
          <input type="password" name="con_password" id="" />
        </div>
        <div className="input py-7">
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-3 rounded-full text-white hover:bg-gradient-to-l min-w-40"
            id=""
          >
            Submit
          </button>
        </div>
        <div>
          <p>
            Have an account ?{" "}
            <Link to={"/login"} className=" text-blue-600">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Registration;
