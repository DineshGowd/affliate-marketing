import DealCard from '@/app/(user)/components/DealCard';
import '../../../style/adddeal.scss'
const getData = async () => {
  const response = await fetch('http://localhost:3000/api/hello', {
    next: { revalidate: 60 },
  });
  const deals = await response.json();
  return deals;
};

const DeleteDeal = async () => {
  const deals = await getData();
  console.log(deals);
  return (
    <div className="dealList">
      <DealCard deals={deals.data} deleteIcon={true} />
    </div>
  );
};

export default DeleteDeal;
