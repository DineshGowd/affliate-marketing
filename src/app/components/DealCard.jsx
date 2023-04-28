import Image from "next/image";
import "../style/adddeal.scss";

const DealCard = () => {
  return (
    <div className="dealcard">
      <div className="dealcard-header">
        <span className="dealcard-btn">"data.data[0].title"</span>
      </div>
      <div className="dealcard-body">
        <div className="dealcard-image">
          <Image src="/amazon.png" alt="amazon" height={65} width={65}></Image>
        </div>
        <div className="dealcard-content">
          <h5>Puma Shoes</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
            laboriosam veritatis maiores dignissimos ex officiis mollitia beatae
            facere harum quis amet alias. Soluta pariatur vitae neque maxime
            fuga veritatis voluptatibus?
          </p>
        </div>
      </div>
      <div className="dealcard-footer">
        <p className="dealcard-person">Hanuman</p>
        <button className="dealcard-button">Grab Deal</button>
        <p className="dealcard-posted"> 2 days ago</p>
      </div>
    </div>
  );
};

export default DealCard;
