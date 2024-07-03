import React, { useState } from 'react';
import RFQReviewModal from './RFQReviewModal'; // Adjust the path if necessary

const ReviewRFQs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRFQ, setSelectedRFQ] = useState(null);

    const handleReviewClick = (rfq) => {
        setSelectedRFQ(rfq);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedRFQ(null);
    };

    const handleSaveQsPrice = (qsPrice) => {
        // Implement your save logic here
        console.log(`QS Price saved: ${qsPrice}`);
        handleCloseModal();
    };

    // Sample RFQ data
    const rfqs = [
        {
            rfqNo: 'RFQ001',
            category: 'Carpentry',
            subCategory: 'Door Refurbishment',
            units: 10,
            orderReceivingDate: '11/06/24',
            estimatedCompletionDate: '16/07/24',
            items: [
                {
                    room: 'Living Room',
                    category: 'Carpentry',
                    subCategory: 'Door Refurbishment',
                    designSKU: 'Enamel Paint',
                    details: 'Removing existing paint jnef cjbew cnweoinc ewiofnoew nwceoc ',
                    uom: 'Nos.',
                    materialDescription: 'Non-Branded...',
                    qty: 10,
                    size: '100*100*100',
                    designerPrice: 100,
                },
                // Add more items if needed
            ],
        },
        {
            rfqNo: 'RFQ002',
            category: 'Electrical',
            subCategory: 'Wiring',
            units: 15,
            orderReceivingDate: '12/06/24',
            estimatedCompletionDate: '17/07/24',
            items: [
                {
                    room: 'Kitchen',
                    category: 'Electrical',
                    subCategory: 'Wiring',
                    designSKU: 'Copper Wiring',
                    details: 'Installing new wiring...',
                    uom: 'Meters',
                    materialDescription: 'Branded Copper Wire...',
                    qty: 15,
                    size: '50*2*2',
                    designerPrice: 200,
                },
                // Add more items if needed
            ],
        },
    ];

    return (
        <div className="p-4">
            <p className="mb-4">Please click on the "Bid" button to place your bid.</p>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="w-full bg-gray-300 border-b">
                        <th className="py-2 px-4 border-r">S. No.</th>
                        <th className="py-2 px-4 border-r">RFQ No.</th>
                        <th className="py-2 px-4 border-r">Category</th>
                        <th className="py-2 px-4 border-r">Sub-Category</th>
                        <th className="py-2 px-4 border-r">Units</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rfqs.map((rfq, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-2 px-4 border-r">{index + 1}</td>
                            <td className="py-2 px-4 border-r">{rfq.rfqNo}</td>
                            <td className="py-2 px-4 border-r">{rfq.category}</td>
                            <td className="py-2 px-4 border-r">{rfq.subCategory}</td>
                            <td className="py-2 px-4 border-r">{rfq.units}</td>
                            <td className="py-2 px-4 flex justify-center space-x-2">
                                <button
                                    className="bg-red-500 text-white py-1 px-2 rounded"
                                    onClick={() => handleReviewClick(rfq)}
                                >
                                    Review RFQ
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {selectedRFQ && (
                <RFQReviewModal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    rfqData={selectedRFQ}
                    handleSave={handleSaveQsPrice}
                />
            )}
        </div>
    );
};

export default ReviewRFQs;
