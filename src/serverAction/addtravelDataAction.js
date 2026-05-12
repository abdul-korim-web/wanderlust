import axios from "axios";

export const addtravelDataAction = async (fromData) => {
  "use server";
 try {
  const data  = Object.fromEntries(fromData.entries())
  // console.log(`${process.env.SERVER_URL}/traveldata`);
  const res = await axios.post(`${process.env.SERVER_URL}/traveldata`,data)

   return {
      success: true,
      message: res?.data?.message,
    };

 } catch (error) {
  return {
      success: false,
      message:
        error?.response?.data?.message || error.message,
    };
  
 }
};