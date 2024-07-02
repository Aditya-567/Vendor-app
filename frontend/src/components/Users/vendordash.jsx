import React, { useState } from "react";
import MyQuotations from "../vendor/MyQuotations";
import RequestForQuotations from "../vendor/RequestForQuotations";
import SaveForLater from "../vendor/SaveForLater";

const VendorDashboard = () => {
    const [activeComponent, setActiveComponent] = useState("RequestForQuotations");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [requestForQuotations, setRequestForQuotations] = useState([]);

    const handleCreateRFQ = (rfq) => {
        setRequestForQuotations([...requestForQuotations, rfq]);
        setActiveComponent("RequestForQuotations");
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case "RequestForQuotations":
                return <RequestForQuotations />;
            case "MyQuotations":
                return <MyQuotations />;
            case "SaveForLater":
                return <SaveForLater />;
            default:
                return <RequestForQuotations />;
        }
    };

    return (
        <div className="pl-2 pt-2 mx-10">
            <div className="mx-16 bg-white shadow-2xl rounded-lg p-6">
                <div className=" flex justify-between ">
                    <button
                        className={`px-4 py-2 ${activeComponent === "RequestForQuotations" ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
                        onClick={() => setActiveComponent("RequestForQuotations")}
                    >
                        Request For Quotations
                    </button>
                    <button
                        className={`px-4 py-2 ${activeComponent === "MyQuotations" ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
                        onClick={() => setActiveComponent("MyQuotations")}
                    >
                        My Quotations
                    </button>
                    <button
                        className={`px-4 py-2 ${activeComponent === "SaveForLater" ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
                        onClick={() => setActiveComponent("SaveForLater")}
                    >
                        Save For Later
                    </button>


                </div>
                <div className="border-t border-gray-200 my-4"></div>


                <div>{renderComponent()}</div>
            </div>
        </div>
    );
};

export default VendorDashboard;
