"use client";
import '../../style/adddeal.scss'
import DealForm from "@/app/components/DealForm";

const EditDeal = () => {

  const handleSubmit = async (data) => {
    console.log(data);
    const response = await fetch('/api/hello', { method: "PUT", body: JSON.stringify(data) })
    console.log(response)
  };

  return (
    <>
      <DealForm onSubmit={handleSubmit} />
    </>
  );
};

export default EditDeal;
