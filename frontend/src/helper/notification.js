import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const handleSuccess = () => {
   toast.success("Operation successful!", { position: "top-right" });
 };

export const handleError = () => {
   toast.error("Operation failed!", { position: "top-right" });
 };