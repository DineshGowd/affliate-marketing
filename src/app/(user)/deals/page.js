import DealCard from "../components/DealCard";

export const metadata = {
  title: 'Deals Page',
};

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/hello', {
    next: { revalidate: 2 },
    cache:'no-cache'
  });
  const deals = await response.json();
  return deals;
};  

const Deals = async () => {
  const deals = await getData();
  console.log(deals);
  return (
    <div className="dealList">
      <DealCard deals={deals.data} />
    </div>
  )
}

export default Deals