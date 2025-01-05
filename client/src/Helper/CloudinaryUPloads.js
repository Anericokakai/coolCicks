import axios from "axios";

// Set up axios
const uploadAxios = axios.create({
  withCredentials: false,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  baseURL: import.meta.env.VITE_CLOUDIMAGE_API,
});
export const UploadimageToCloudinary = async (file,setPercentage) => {
console.log(file)
  const images = new FormData();
  images.append("file", file);
  images.append("upload_preset", import.meta.env.VITE_SECRETE_KEY_CLOUDINARY);
  const result = await uploadAxios({
    method: "POST",
    onUploadProgress:(progressEvent)=>{
        const {loaded,total}=progressEvent;
const percentageCompleted=Math.round((loaded*100)/total)
setPercentage(percentageCompleted)
    },
    data: images,
  });
  return result;
};
