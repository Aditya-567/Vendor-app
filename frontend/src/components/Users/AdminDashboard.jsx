import { faHandshake, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import AcceptedBids from "../QS/AcceptedBids";
import AllRFQs from "../QS/AllRFQs"; // Assuming this component exists
import RejectedRFQs from "../QS/RejectedRFQs";
import ReviewRFQs from "../QS/ReviewRFQs";

const AdminDashboard = () => {
    const [activeComponent, setActiveComponent] = useState("AllRFQs");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [allrfqs, setAllRFQs] = useState([]);

    const handleCreateRFQ = (rfq) => {
        setAllRFQs([...allrfqs, rfq]);
        setActiveComponent("AllRFQs");
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case "AllRFQs":
                return <AllRFQs rfqs={allrfqs} />;
            case "ReviewRFQs":
                return <ReviewRFQs />;
            case "AcceptedBids":
                return <AcceptedBids />;
            case "RejectedRFQs":
                return <RejectedRFQs />;
            default:
                return <AllRFQs rfqs={allrfqs} />;
        }
    };

    return (
        <div className="pl-2 pt-8 mx-10 pb-10">
            <div className="mx-16 bg-white shadow-2xl rounded-lg p-6">
                <div className="flex justify-between border-b pb-4 mb-4">
                    <div className="flex space-x-4">
                        <button
                            className={`px-4 py-2 ${activeComponent === "AllRFQs" ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
                            onClick={() => setActiveComponent("AllRFQs")}
                        >
                            All RFQs
                        </button>
                        <button
                            className={`px-4 py-2 ${activeComponent === "ReviewRFQs" ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
                            onClick={() => setActiveComponent("ReviewRFQs")}
                        >
                            Review RFQs
                        </button>
                        <button
                            className={`px-4 py-2 ${activeComponent === "AcceptedBids" ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
                            onClick={() => setActiveComponent("AcceptedBids")}
                        >
                            Accepted Bids
                        </button>
                        <button
                            className={`px-4 py-2 ${activeComponent === "RejectedRFQs" ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
                            onClick={() => setActiveComponent("RejectedRFQs")}
                        >
                            Rejected RFQs
                        </button>
                    </div>
                    <div className="flex justify-end space-x-4 ">
                        <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-2">
                            <i className="fas fa-user-plus"></i>
                            <span><FontAwesomeIcon icon={faUserPlus} /> Invite Vendors</span>
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-2">
                            <i className="fas fa-users"></i>
                            <span><FontAwesomeIcon icon={faHandshake} /> Vendors Onboard</span>
                        </button>
                    </div>
                </div>
                <div>{renderComponent()}</div>
            </div>
        </div>
    );
};

export default AdminDashboard;
