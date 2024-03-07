import React, { useEffect, useRef, useState } from "react";
import "./AddPost.css";

import "./navigation.css";
import { submitPostByUser } from "../Helper/SubmitPost";
import { LinearProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UploadimageToCloudinary } from "../Helper/CloudinaryUPloads";
import CircularProgressWithLabel from "../components/CircularProgressWihLabel";

function CreatePost({ showPost }) {
  // multiple images upload to
  const [images, setImages] = useState([]);
  // percentage for the post being uploaded
  const [percentage, setPercentage] = useState(0);
  const [postProgress, setPostProgress] = useState(0);
  const navigate = useNavigate();

  // ! change image
  const changeImageOnChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageArray = Array.from(e.target.files);

      const imagesDataUrl = await Promise.all(
        imageArray.map((image) => {
          const reader = new FileReader();
          reader.readAsDataURL(image);
          return new Promise((resolve) => {
            reader.onload = (e) => {
              resolve(e.target.result);
            };
          });
        })
      );

      setImages([...images, ...imagesDataUrl]);
    }
  };

  // ! form submission
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    // !check if the user is logged in
    const userId = localStorage.getItem("id");
    const token = sessionStorage.getItem("token");
    // if (!token || !userId) {
    //   return  Redirects(navigate);
    // }
    const form = document.querySelector("form");
    const formValues = new FormData(form);
    const postDesc = formValues.get("post");
    let tags = [];
    let selectedTag = formValues.get("selectedTag");
    tags.push(selectedTag);
    formValues.append("tags", tags);
    let uploadedImages = [];
    let toSubmitJson;

    if (images) {
      for (let i = 0; i < images.length; i++) {
        try {
          setPercentage(0);
          const res = await UploadimageToCloudinary(images[i], setPercentage);
          setPercentage(0);
          const { public_id, secure_url } = res.data;
          const data = {
            image: {
              public_id: public_id,
              url: secure_url,
            },
          };
          uploadedImages.push(data);
        } catch (error) {
          console.log(error);
        }
      }
      console.log(uploadedImages);
      console.log("all the images have been uploaded");

      formValues.append("images", JSON.stringify(uploadedImages));

      toSubmitJson = {
        post_description: postDesc,
        images: uploadedImages,
      };
    }
    //
    // !submit post

    submitPostByUser(formValues, setPostProgress)
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
        toast.error(error?.response?.data?.message);
      });
  };
  //   name,description,price,images,tags,color,inStock,category,brand
  return (
    <div className="flex items-center justify-center min-h-dvh bg-gray-100">
      <ToastContainer
        position={"top-center"}
        closeOnClick={false}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        autoClose={3000}
      />

      <div className="PostForm">
        {postProgress != 0 && (
          <div className="submitPostPreloader">
            <LinearProgress variant="determinate" value={postProgress} />
          </div>
        )}

        <div className="upperPost">
          <div className="userProfilePicInPostForm">
            <div className="userNavImage ">
              <img
                src="https://i.pinimg.com/564x/f6/ee/13/f6ee1311d121ea0cef159ff502d21720.jpg"
                alt=""
              />
            </div>
            <div className="postOption">
              <h3>Anerico kakai </h3>
              <small> post to anyone</small>
            </div>
          </div>
        </div>
        <div className="lowerPost border rounded-xl shadow-sm sm:px-10 px-5">
          <form
            action=""
            onSubmit={handlePostSubmit}
            className="flex flex-col gap-4"
          >
            <div>
              <label htmlFor="" className="font-semibold sm:text-xl">
                {" "}
                Product Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className=" w-full rounded-xl py-3 px-2 border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold sm:text-xl">
                {" "}
                Product Description
              </label>
              <textarea
                name="description"
                className="postDesc"
                placeholder="Add the description of the product"
              ></textarea>
            </div>
            <div>
              <label htmlFor="" className="font-semibold sm:text-xl">
                {" "}
                Product Price
              </label>
              <input
                type="text"
                name="price"
                placeholder=" ksh 5000"
                className=" w-full rounded-xl py-3 px-2 border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold sm:text-xl">
                {" "}
                Product Color
              </label>
              <input
                type="text"
                name="color"
                placeholder="red"
                className=" w-full rounded-xl py-3 px-2 border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold sm:text-xl">
                {" "}
                Product brand
              </label>
              <input
                type="text"
                placeholder="Nike"
                className=" w-full rounded-xl py-3 px-2 border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold sm:text-xl">
                category
              </label>

              <div className="flex gap-3 flex-wrap">
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="trending"
                    class="form-radio text-indigo-600"
                  />
                  <span class="ml-2 text-gray-700">trending</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="teens"
                    class="form-radio text-indigo-600"
                  />
                  <span class="ml-2 text-gray-700">teens</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="casual"
                    class="form-radio text-indigo-600"
                  />
                  <span class="ml-2 text-gray-700">casual</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="women"
                    class="form-radio text-indigo-600"
                  />
                  <span class="ml-2 text-gray-700">women</span>
                </label>
           
              </div>
            </div>
            <div>
              <label htmlFor="" className="font-semibold sm:text-xl">
                {" "}
                In Stock
              </label>
              <input
                type="number"
                name="inStock"
                placeholder="10"
                className=" w-full rounded-xl py-3 px-2 border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold sm:text-xl">
                {" "}
                Tag
              </label>
              <input
                type="text"
                name="selectedTag"
                placeholder="trending,featured"
                className=" w-full rounded-xl py-3 px-2 border border-gray-300"
              />
            </div>

            <input
              type="file"
              id="selectImage"
              multiple={true}
              onChange={changeImageOnChange}
            />
            <label htmlFor="selectImage" className="selectImgPlaceHolder">
              <i className="fa-solid fa-image"></i>{" "}
            </label>
            <div className="selectedImagesContainer ">
              {images.map((image, i) => {
                return (
                  <img
                    className="selectedImages"
                    key={i}
                    src={image}
                    alt={`Selected image ${i}`}
                  />
                );
              })}
            </div>

            <input type="submit" id="PostSubmit" />
            <label
              className={`border w-32 ${
                percentage === 0 && "py-2"
              }  my-5 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-10   text-white hover:bg-gradient-to-l" htmlFor="postSubmit`}
            >
              {percentage === 0 ? (
                <button>post</button>
              ) : (
                <CircularProgressWithLabel
                  value={percentage}
                ></CircularProgressWithLabel>
              )}
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
