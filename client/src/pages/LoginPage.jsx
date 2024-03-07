import React from "react";
import styles from "../styles";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import {ToastContainer,toast} from"react-toastify"
function LoginPage() {
  const handleLogin = async (data) => {
    const results = await axios.post(
      "https://coolcicks.onrender.com/api/coolcicks/v1/user_login",
      data
    );
    return results;
  };
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector(".loginForm");
    const formValues = new FormData(form);
    const email = formValues.get("email");
    const password = formValues.get("password");
    console.log(email, password);
    let data = {
      email: email,
      password: password,
    };
    await handleLogin(data)
      .then((results) => {
        console.log(results);
        toast.success("user log in success");
sessionStorage.setItem("token",results.data?.token)
        setTimeout(() => {
          navigate("/admin")
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message)
      });
  };
  return (
    <div className={` ${styles.flexCenter}   min-h-dvh bg-gray-100`}>
      <ToastContainer
        position={"top-center"}
        closeOnClick={false}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        autoClose={3000}
      />
      <div>
        <form
          onSubmit={handleSubmit}
          className=" loginForm border-2 rounded-xl shadow-xl min-h-[600px] min-w-[500px] items-center flex flex-col j"
        >
          <div>
            <h1 className=" py-3 text-2xl font-semibold ">Login</h1>
          </div>
          <div className="py-2">
            <div>
              <label htmlFor="email" className=" text-2xl py-5">
                Email
              </label>
            </div>
            <input
              type="text"
              name="email"
              className="border px-2  border-gray-400 py-3 rounded-xl"
            />
          </div>
          <div className="py-2">
            <div>
              <label htmlFor="email" className=" text-2xl ">
                password
              </label>
            </div>
            <input
              type="password"
              name="password"
              className="border px-2 border-gray-400 py-3 rounded-xl"
            />
          </div>
          <div className="py-5">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-3 rounded-full text-white hover:bg-gradient-to-l min-w-40">
              submit
            </button>
          </div>
          <div>
            <p>
             Don't Have an account ?{" "}
              <Link to={"/register"} className=" text-blue-600">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
