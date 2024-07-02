import React from 'react';

const ReviewRFQs = () => {
    return (
        <div className="p-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded mb-4">Download</button>
            <div className=" border p-4 rounded-lg">
                <div className='flex justify-between '>
                    <h2 className="text-xl font-semibold mb-2">Request For Quotation</h2>
                    <p><strong>Order Receiving Date :</strong> 11/06/24 10:00 AM</p></div>
                <div className="flex justify-between mb-4">
                    <p className="mb-2"><strong>Bid Id :</strong> 001</p>
                    <p><strong>Estimated Completion Date :</strong> 16/07/24</p>
                </div>
                <table className="min-w-full bg-white border mb-4">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border">S. No.</th>
                            <th className="py-2 px-4 border">Item</th>
                            <th className="py-2 px-4 border">Product Description</th>
                            <th className="py-2 px-4 border">Units</th>
                            <th className="py-2 px-4 border">UOM</th>
                            <th className="py-2 px-4 border">QS Price</th>
                            <th className="py-2 px-4 border">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border">1.</td>
                            <td className="py-2 px-4 border">Customizable Chair</td>
                            <td className="py-2 px-4 border"></td>
                            <td className="py-2 px-4 border">5</td>
                            <td className="py-2 px-4 border"></td>
                            <td className="py-2 px-4 border"></td>
                            <td className="py-2 px-4 border"></td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border">2.</td>
                            <td className="py-2 px-4 border">Sliding Window</td>
                            <td className="py-2 px-4 border"></td>
                            <td className="py-2 px-4 border">10</td>
                            <td className="py-2 px-4 border"></td>
                            <td className="py-2 px-4 border"></td>
                            <td className="py-2 px-4 border"></td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-end mb-4">
                    <p className="mr-4"><strong>Grand Total :</strong></p>
                </div>
                <div className="flex justify-between">
                    <div></div>
                    <div className="space-x-4">
                        <button className="bg-red-500 text-white px-4 py-2 rounded">Accept RFQ</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded">Reject RFQ</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded">Publish RFQ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewRFQs;
