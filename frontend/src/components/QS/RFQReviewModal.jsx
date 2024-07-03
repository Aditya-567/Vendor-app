import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const RFQReviewModal = ({ isOpen, onRequestClose, rfqData, handleSave, handleReject, handleAccept }) => {
    const [qsPrices, setQsPrices] = useState({});
    const [grandTotal, setGrandTotal] = useState(0);

    const handleQsPriceChange = (e, index) => {
        const newQsPrices = { ...qsPrices, [index]: e.target.value };
        setQsPrices(newQsPrices);
    };

    const handleAcceptSubmit = () => {
        handleAccept(qsPrices, rfqData);
    };

    const handleRejectSubmit = () => {
        handleReject(rfqData);
    };

    useEffect(() => {
        const calculateGrandTotal = () => {
            let total = 0;
            rfqData.items.forEach((item, index) => {
                const qsPrice = parseFloat(qsPrices[index]) || 0;
                total += qsPrice;
            });
            setGrandTotal(total);
        };

        calculateGrandTotal();
    }, [qsPrices, rfqData.items]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Review RFQ"
            className="fixed inset-0 flex items-center justify-center p-4"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
            <div className="relative bg-white w-full max-w-7xl p-6 rounded-lg shadow-lg overflow-auto" style={{ height: '90%' }}>
                <button
                    onClick={onRequestClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <FaTimes size={24} />
                </button>
                <h2 className="text-xl font-semibold mb-4">Request For Quotation</h2>
                <div className="mb-4">
                    <div><p><strong>RFQ No :</strong> {rfqData.rfqNo}</p></div>
                    <div className="flex justify-end">
                        <p>Order Receiving Date: {rfqData.orderReceivingDate}</p>
                    </div>
                    <div className="flex justify-end">
                        <p>Estimated Completion Date: {rfqData.estimatedCompletionDate}</p>
                    </div>
                </div>
                <table className="min-w-full bg-white border border-gray-300 mb-4" style={{ height: '300px' }}>
                    <thead>
                        <tr className="w-full bg-gray-300 border-b">
                            <th className="py-2 px-4 border-r">Room</th>
                            <th className="py-2 px-4 border-r">Category</th>
                            <th className="py-2 px-4 border-r">Sub Category</th>
                            <th className="py-2 px-4 border-r">Design / SKU</th>
                            <th className="py-2 px-4 border-r">Details (Auto)</th>
                            <th className="py-2 px-4 border-r">UOM (Auto)</th>
                            <th className="py-2 px-4 border-r">Material Description</th>
                            <th className="py-2 px-4 border-r">Qty</th>
                            <th className="py-2 px-4 border-r">Size (L*W*H)</th>
                            <th className="py-2 px-4 border-r">Designer Price</th>
                            <th className="py-2 px-4">QS Price</th>
                        </tr>
                    </thead>
                    <tbody style={{ minHeight: '200px' }}>
                        {rfqData.items.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2 px-4 border-r">{item.room}</td>
                                <td className="py-2 px-4 border-r">{item.category}</td>
                                <td className="py-2 px-4 border-r">{item.subCategory}</td>
                                <td className="py-2 px-4 border-r">{item.designSKU}</td>
                                <td className="py-2 px-4 border-r">{item.details}</td>
                                <td className="py-2 px-4 border-r">{item.uom}</td>
                                <td className="py-2 px-4 border-r">{item.materialDescription}</td>
                                <td className="py-2 px-4 border-r">{item.qty}</td>
                                <td className="py-2 px-4 border-r">{item.size}</td>
                                <td className="py-2 px-4 border-r">{item.designerPrice}</td>
                                <td className="py-2 px-4">
                                    <input
                                        type="text"
                                        value={qsPrices[index] || ''}
                                        onChange={(e) => handleQsPriceChange(e, index)}
                                        className="border p-2 rounded w-full"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="border-t bg-gray-200">
                            <td colSpan="10" className="py-2 px-4 text-right font-semibold">Grand Total (Inc. of all Taxes):</td>
                            <td className="py-2 px-4">{grandTotal}</td>
                        </tr>
                    </tfoot>
                </table>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleAcceptSubmit}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" />  Accept and Publish RFQ

                    </button>
                    <button
                        onClick={handleRejectSubmit}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        <FontAwesomeIcon icon={faCircleXmark} size="lg" /> Reject RFQ
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default RFQReviewModal;
