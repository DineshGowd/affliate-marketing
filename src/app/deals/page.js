import DealCard from "../components/DealCard";

export const metadata = {
  title: 'Deals Page',
};

const getData = async () => {
  // console.log(data);
  const response = await fetch('http://localhost:3000/api/hello');
  const data = await response.json();
  return data;
};

const Deals = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="dealList">
      <DealCard data={data} />
    </div>
  )
}

export default Deals