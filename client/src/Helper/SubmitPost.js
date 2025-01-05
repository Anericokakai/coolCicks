// ! function to submit users post

import axios from "axios";
export const baseurl = "http://localhost:7001";

const AxiosForPost = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const submitPostByUser = async (formValues, setPostProgress) => {
  const result = await axios.post(
    `http://localhost:7001/api/coolcicks/v1/add_newShoe`,
    formValues,
    {
      headers: {
        "Content-Type": "application/json",
      },
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        const uploadedPercentage = Math.round((loaded * 100) / total);
        setPostProgress(uploadedPercentage);
      },
    }
  );
  return result;
};

// !like users post
export const likeUsersPost = async (postId, userId) => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  const result = await AxiosForPost.post(
    `/user/like/${postId}`,
    {
      userId: userId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result;
};

export const fetchDataAdminCategory = async (parameter) => {
  const response = await axios.get(
    `http://localhost:7001/api/coolcicks/v1/categoryProduct?category=${parameter}`
  );
  return response.data;
};
