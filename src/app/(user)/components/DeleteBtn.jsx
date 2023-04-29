"use client";
import { AiOutlineDelete } from "react-icons/ai";

const handleDelete = async (id) => {
  // const data = {
  //   id,
  // };
  console.log(JSON.parse(id));
  const response = await fetch(`/api/hello?id=${id}`, {
    method: "DELETE",
    headers:{
      "Content-Type": "application/json"
    }
  });
  console.log(response);
};
const DeleteBtn = ({ id }) => {
  
  return <AiOutlineDelete size={20} onClick={() => handleDelete(id)} />;
};

export default DeleteBtn;
