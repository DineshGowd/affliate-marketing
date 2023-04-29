"use client";
import DealForm from '@/app/(user)/components/DealForm';
import '../../../style/adddeal.scss';

const AddDeal = () => {
  const handleSubmit = async (data) => {
    console.log(data);
    const response = await fetch('/api/hello', { method: "POST", body: JSON.stringify(data) })
    console.log(response)
  };

  return (
    <>
      <DealForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddDeal;
