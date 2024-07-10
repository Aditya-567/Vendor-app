import React from "react";

const RFQsInProgress = ({ rfqs }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">RFQs in Progress</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 mb-4">
                    <thead>
                        <tr className="bg-gray-300 border-b">
                            <th className="py-2 px-4 border-r">Room</th>
                            <th className="py-2 px-4 border-r">Category</th>
                            <th className="py-2 px-4 border-r">Sub Category</th>
                            <th className="py-2 px-4 border-r">Design / SKU</th>
                            <th className="py-2 px-4 border-r">Details (Auto)</th>
                            <th className="py-2 px-4 border-r">UOM (Auto)</th>
                            <th className="py-2 px-4 border-r">Material Description</th>
                            <th className="py-2 px-4 border-r">Qty</th>
                            <th className="py-2 px-4 border-r">Size (L*W*H)</th>
                            <th className="py-2 px-4 border-r">2DD</th>
                            <th className="py-2 px-4 border-r">Designer Price</th>
                            <th className="py-2 px-4 border-r">QS Price</th>
                            <th className="py-2 px-4 border-r">Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rfqs.map((rfq, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2 px-4 border-r">{rfq.room}</td>
                                <td className="py-2 px-4 border-r">{rfq.category}</td>
                                <td className="py-2 px-4 border-r">{rfq.subCategory}</td>
                                <td className="py-2 px-4 border-r">{rfq.designSKU}</td>
                                <td className="py-2 px-4 border-r">{rfq.details}</td>
                                <td className="py-2 px-4 border-r">{rfq.uom}</td>
                                <td className="py-2 px-4 border-r">{rfq.materialDescription}</td>
                                <td className="py-2 px-4 border-r">{rfq.qty}</td>
                                <td className="py-2 px-4 border-r">{rfq.size}</td>
                                <td className="py-2 px-4 border-r">{rfq.twoDD}</td>
                                <td className="py-2 px-4 border-r">{rfq.designerPrice}</td>
                                <td className="py-2 px-4 border-r">{rfq.qsPrice}</td>
                                <td className="py-2 px-4 border-r">{rfq.comment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RFQsInProgress;
