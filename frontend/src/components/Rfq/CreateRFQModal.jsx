import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CreateRFQModal = ({ isOpen, onRequestClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        customerName: "",
        customerId: "",
        city: "",
        showroom: "",
        projectAddress: "",
        r2pPlannedDate: "",
        designerName: "",
        contactNo: "",
        communityManager: "",
        cmContactNo: "",
        cmMailId: "",
        projectManager: "",
        roomArea: "",
        category: "",
        subCategory: "",
        designOptions: "",
        uom: "",
        materialSpecification: "",
        overallQuantity: "",
        overallSizes: "",
        drawingImagesLink: "",
        // Add other fields as necessary
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
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
            <div className="relative w-full max-w-6xl p-8 bg-white rounded-lg shadow-lg">
                <button
                    onClick={onRequestClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-700"
                >
                    <FaTimes size={24} />
                </button>
                <h2 className="text-xl font-bold mb-4 text-center">Customer Detail:</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <input
                            type="text"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            placeholder="Customer Name"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="customerId"
                            value={formData.customerId}
                            onChange={handleChange}
                            placeholder="Customer Id"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="showroom"
                            value={formData.showroom}
                            onChange={handleChange}
                            placeholder="Showroom"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="projectAddress"
                            value={formData.projectAddress}
                            onChange={handleChange}
                            placeholder="Project Address"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="r2pPlannedDate"
                            value={formData.r2pPlannedDate}
                            onChange={handleChange}
                            placeholder="R2P Planned Date"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="designerName"
                            value={formData.designerName}
                            onChange={handleChange}
                            placeholder="Designer Name"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleChange}
                            placeholder="Contact No."
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="communityManager"
                            value={formData.communityManager}
                            onChange={handleChange}
                            placeholder="Community Manager"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="cmContactNo"
                            value={formData.cmContactNo}
                            onChange={handleChange}
                            placeholder="CM Contact No."
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="cmMailId"
                            value={formData.cmMailId}
                            onChange={handleChange}
                            placeholder="CM Mail Id"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="projectManager"
                            value={formData.projectManager}
                            onChange={handleChange}
                            placeholder="Project Manager"
                            className="border p-2"
                        />
                    </div>
                    <h2 className="text-xl font-bold mb-4 text-center">Our Team:</h2>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <input
                            type="text"
                            name="roomArea"
                            value={formData.roomArea}
                            onChange={handleChange}
                            placeholder="Room / Area"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="Category"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="subCategory"
                            value={formData.subCategory}
                            onChange={handleChange}
                            placeholder="Sub Category"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="designOptions"
                            value={formData.designOptions}
                            onChange={handleChange}
                            placeholder="Design / Finish Type"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="uom"
                            value={formData.uom}
                            onChange={handleChange}
                            placeholder="UOM"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="materialSpecification"
                            value={formData.materialSpecification}
                            onChange={handleChange}
                            placeholder="Material Specification"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="overallQuantity"
                            value={formData.overallQuantity}
                            onChange={handleChange}
                            placeholder="Overall Quantity"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="overallSizes"
                            value={formData.overallSizes}
                            onChange={handleChange}
                            placeholder="Overall Sizes (Total L,B,H)"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            name="drawingImagesLink"
                            value={formData.drawingImagesLink}
                            onChange={handleChange}
                            placeholder="Drawing / Images Link"
                            className="border p-2"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button type="button" className="bg-gray-200 px-4 py-2">
                            Add another Item
                        </button>
                        <button type="submit" className="bg-red-500 text-white px-4 py-2">
                            Send To QS
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default CreateRFQModal;
