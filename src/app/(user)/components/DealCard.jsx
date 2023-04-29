"use client";
import Image from "next/image";
import "../../style/dealcard.scss";
import moment from "moment/moment";
import DeleteBtn from "./DeleteBtn";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DealCard = ({ deals, deleteIcon = false }) => {
  return (
    <div className="dealcard-container">
      {deals?.map((deal) => (
        <div key={deal.id} className="dealcard">
          <div className="dealcard-header">
            <span className="dealcard-btn">{deal.category}</span>
            {deleteIcon && <DeleteBtn id={deal.id} />}
          </div>
          <div className="dealcard-body">
            <div className="dealcard-image">
              <Image
                src={`/amazon.png`}
                alt="amazon"
                height={65}
                width={65}
              ></Image>
            </div>
            <div className="dealcard-content">
              <Link href={`/deals/${deal.id}`}>
                <h5>{deal.title}</h5>
              </Link>
              <p>{deal.description}</p>
            </div>
          </div>
          <div className="dealcard-footer">
            <p className="dealcard-person">{deal.dimername}</p>
            <button className="dealcard-button">Grab Deal</button>
            <p className="dealcard-posted">
              {moment(deal.created_time).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealCard;
