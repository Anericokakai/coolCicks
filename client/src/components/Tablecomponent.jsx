import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./table.css";
import axios from "axios";
import { baseurl } from "../Helper/SubmitPost";

function Tablecomponent({ blogs, topic }) {
  const [loadDelete, setLoadDelete] = useState(false);
  const [id, setid] = useState("");

  function ArrayBuffer(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((bite) => (binary += String.fromCharCode(bite)));

    return window.btoa(binary);
  }
const deleteItem=async(id)=>{
  console.log(id)
  setLoadDelete(true)
  await axios.post(`${baseurl}/api/coolckicks/v1/deleteItem`,{id:id}).then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}
  console.log(blogs);
  // !function to delete blog

  return (
    <div className="table-container">
      
      <table class="styled-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Illustaration</th>
            <th>price</th>
            <th>image</th>

            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs &&
            blogs !== "]" &&
            blogs?.map((single) => {
              var base64flag = single?.Image?.contentType;

              const concatFunction = (str, n) => {
                return str?.length > n
                  ? str.substring(0, n - 1) + "....."
                  : str;
              };

              return (
                <tr>
                  <td>{concatFunction(single?.shoe_name,30)}</td>
                  <td>{concatFunction(single?.shoe_Description, 100)}</td>
                  <td>
                    <p  >{single?.price}</p>
                  </td>
                  <td>
                    <img src={single?.images[0]} alt="" width={60} height={60} />
                  </td>
                  <td>
                    <button
                    disabled={loadDelete}
                      className="Hide_border"
                      onClick={() =>deleteItem(single?._id)}
                    >
                      <i class="fa-solid fa-trash text-red-600"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* <div className="add_blog_container_btn">
        <Link
          to={`/admin/blogsform?endpoint_api=${add_blog_api}&&course=${page}`}
        >
          <button className="add_blog">add a new blog</button>
        </Link>
        <Link
          to={`/admin/blogsform/topic?endpoint_api=http://localhost:8000/api/add_topic&topic=${page}`}
        >
          <button className="add_blog gap">add a new topic</button>
        </Link>
      </div> */}
    </div>
  );
}

export default Tablecomponent;
