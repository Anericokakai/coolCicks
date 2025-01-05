import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import styles from "../styles";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Registration() {
  const [loading, setloading] = useState(false);
  const submitToDb = async (data) => {
    const result = await axios.post(
      "http://localhost:7001/api/coolcicks/v1/add_user",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result;
  };
  const navigate = useNavigate();
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

    setloading(true);
    await submitToDb(data)
      .then((res) => {
        console.log(res);
        setloading(false);
        toast.success(res.data?.message);

        setTimeout(() => {
          return navigate("/login");
        }, 900);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
        toast.error(error?.response?.data?.message);
      });
  };
  // mofanuwox@mailinator.com
  return (
    <div className={`${styles.flexCenter} min-h-dvh bg-gray-100`}>
      <ToastContainer
        position={"top-center"}
        closeOnClick={false}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        autoClose={3000}
      />
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
            disabled={loading}
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
