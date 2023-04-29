"use client";
import DealForm from '@/app/(user)/components/DealForm';
import '../../../style/adddeal.scss'

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
