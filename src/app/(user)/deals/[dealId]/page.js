import { notFound } from 'next/navigation';
import React from 'react'

const fetchDealId = async (dealId) => {
    const res = await fetch(
        `http://localhost:3000/api/hello/${dealId}`,
        { cache: 'no-cache' }
    );
    const deal = await res.json();
    console.log("This is the deal:", deal);
    return deal;
};

const SingleDeal = async ({ params: { dealId } }) => {
    console.log('dealId', dealId)
    const deal = await fetchDealId(dealId);
    if (!deal.id) return notFound();
    return (
        <div>
            <p>dealPage: {deal.id}</p>
            <p>dealtitle: {deal.title}</p>
            <p>dealPage: {deal.description}</p>
            <p>dealPage: {deal.imagelink}</p>
        </div>
    )
}

export default SingleDeal;