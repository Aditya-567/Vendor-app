import React from "react";

const RFQsInProgress = ({ rfqs }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">RFQs in Progress</h2>
            <ul>
                {rfqs.map((rfq, index) => (
                    <li key={index} className="mb-2 border p-2">
                        <p><strong>Customer Name:</strong> {rfq.customerName}</p>
                        <p><strong>Project Address:</strong> {rfq.projectAddress}</p>
                        <p><strong>City:</strong> {rfq.city}</p>
                        {/* Add other fields as necessary */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RFQsInProgress;
