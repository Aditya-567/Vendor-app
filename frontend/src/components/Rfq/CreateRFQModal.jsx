import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CreateRFQModal = ({ isOpen, onRequestClose, onSubmit }) => {
    const [rfqItems, setRfqItems] = useState([
        {
            room: "",
            category: "",
            subCategory: "",
            designSKU: "",
            details: "",
            uom: "",
            materialDescription: "",
            qty: "",
            size: "",
            twoDD: "",
            designerPrice: "",
            qsPrice: "",
            comment: "",
        },
    ]);

    const [file, setFile] = useState(null);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newRfqItems = [...rfqItems];
        newRfqItems[index][name] = value;
        setRfqItems(newRfqItems);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleAddRow = () => {
        setRfqItems([
            ...rfqItems,
            {
                room: "",
                category: "",
                subCategory: "",
                designSKU: "",
                details: "",
                uom: "",
                materialDescription: "",
                qty: "",
                size: "",
                twoDD: "",
                designerPrice: "",
                qsPrice: "",
                comment: "",
            },
        ]);
    };

    const handleRemoveRow = (index) => {
        const newRfqItems = rfqItems.filter((item, i) => i !== index);
        setRfqItems(newRfqItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(rfqItems);
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Create RFQ"
            className="fixed inset-0 flex items-center justify-center p-4"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
            <div className="relative w-full max-w-7xl p-8 bg-white rounded-lg shadow-lg">
                <button
                    onClick={onRequestClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-700"
                >
                    <FaTimes size={24} />
                </button>

                <form onSubmit={handleSubmit}>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border text-[12px] border-gray-300 mb-4">
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
                                {rfqItems.map((item, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-2 px-4 border-r">
                                            <input type="text" name="room" value={item.room} onChange={(e) => handleChange(index, e)} className="border p-1 w-full" placeholder="Living Room" />
                                        </td>
                                        <td className="py-2 px-4 border-r">
                                            <input type="text" name="category" value={item.category} onChange={(e) => handleChange(index, e)} className="border p-1 w-full" placeholder="Carpentry" />
                                        </td>
                                        <td className="py-2 px-4 border-r">
                                            <input type="text" name="subCategory" value={item.subCategory} onChange={(e) => handleChange(index, e)} className="border p-1 w-full" placeholder="Door Refurbishment" />
                                        </td>
                                        <td className="py-2 px-4 border-r">
                                            <input type="text" name="designSKU" value={item.designSKU} onChange={(e) => handleChange(index, e)} className="border p-1 w-full" placeholder="Door Refurbishment Enamel Paint" />
                                        </td>
                                        <td className="py-2 px-4 border-r">
                                            <input type="text" name="details" value={item.details} onChange={(e) => handleChange(index, e)} className="border p-1 w-full" placeholder="Removing existing paint + Surface Cleaning + Surface Base preparation + Repainting with Enamel paint." />
                                        </td>
                                        <td className="py-2 px-4 border-r">
                                            <input type="text" name="uom" value={item.uom} onChange={(e) => handleChange(index, e)} className="border p-1 w-full" placeholder="Nos." />
                                        </td>
                                        <td className="py-2 px-4 border-r">
                                            <input type="text" name="materialDescription" value={item.materialDescription} onChange={(e) => handleChange(index, e)} className="border p-1 w-full" placeholder="Non-Branded- ISI Graded Plywood, Laminate- Merino or Equivalent" />
                                        </td>
                                        <td className="py-2 px-4 border-r">
                                            <input type="number" name="qty" value={item.qty} onChange={(e) => handleChange(index, e)} className="border p-1 w-full" placeholder="10" />
                                        </td>
                                        <td className="py-2 px-4 border-r">
                                            <input type="text" name="size" value={item.size} onChange={(e) => handleChange(index, e)} className="border p-1 w-full" placeholder="100*100*100" />
                                        </td>
                                        <td className="py-2 px-4 border-r">
                                            <select name="twoDD" value={item.twoDD} onChange={(e) => handleChange(index, e)} className="border p-1 w-full">
                                                <option value="livingroom-2dd">Livingroom-2dd</option>
                                                <option value="bedroom-2dd">Bedroom-2dd</option>
                                                <option value="kitchen-2dd">Kitchen-2dd</option>
                                            </select>
                                        </td>
                                        <td className="py-2 px-4 border-r">
                                            <input type="number" name="designerPrice" value={item.designerPrice} onChange={(e) => handleChange(index, e)} className="border p-1 w-full" placeholder="100" />
                                        </td>
                                        <td className="py-2 px-4 border-r">
                                            <input type="number" name="qsPrice" value={item.qsPrice} onChange={(e) => handleChange(index, e)} className="border p-1 w-full" placeholder="100" />
                                        </td>
                                        <td className="py-2 px-4 border-r">
                                            <input type="text" name="comment" value={item.comment} onChange={(e) => handleChange(index, e)} className="border p-1 w-full" placeholder="Write comments here" />
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between text-[10px] mb-4">
                        <div className="flex space-x-4">
                            <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
                            <label htmlFor="file-upload" className="bg-gray-200 px-4 py-2 cursor-pointer">Upload Site Images</label>
                            <button className="bg-gray-200 px-4 py-2">Upload Site Inspection Report</button>
                            <button className="bg-gray-200 px-4 py-2">Masking Date</button>
                            <button className="bg-gray-200 px-4 py-2">Handover Date</button>
                        </div>
                        <div className="flex space-x-4">
                            <button type="button" onClick={handleAddRow} className="bg-gray-200 px-4 py-2">Add another Item</button>
                            <button type="submit" className="bg-red-500 text-white px-4 py-2">Add RFQ Price to Quote</button>
                            <button type="button" onClick={handleSubmit} className="bg-red-500 text-white px-4 py-2">Send For Review</button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default CreateRFQModal;
