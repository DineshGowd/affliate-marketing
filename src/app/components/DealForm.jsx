"use client";
import React, { useState } from "react";
import "../style/adddeal.scss";

const DealForm = ({onSubmit }) => {
//   console.log(params);
  const [title, setTitle] = useState();
  const [status, setStatus] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [imagelink, setImageLink] = useState();
  const [dimername, setDimerName] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      title,
      status,
      category,
      description,
      imagelink,
      dimername,
      id: 2,
    };
    onSubmit(data);
    // const response = await fetch("/api/hello", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
    // console.log(response);
  };

  return (
    <form onSubmit={handleSubmit} className="add-deal">
      <div>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Status
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Category
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Imagelink
          <input
            type="text"
            value={imagelink}
            onChange={(e) => setImageLink(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Dimername
          <input
            type="text"
            value={dimername}
            onChange={(e) => setDimerName(e.target.value)}
          />
        </label>
      </div>
      <input type="submit" value='Add'/>
    </form>
  );
};

export default DealForm;
