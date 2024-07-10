import React, { useState } from "react";
import AcceptedRFQs from "../Rfq/AcceptedRFQs";
import CreateRFQModal from "../Rfq/CreateRFQModal";
import RFQCreatedAndSaved from "../Rfq/RFQCreatedAndSaved";
import RFQsInProgress from "../Rfq/RFQsInProgress";
import ReadyForQuote from "../Rfq/ReadyForQuote";
import RejectedRFQs from "../Rfq/RejectedRFQs";

const DesignerDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("RFQsInProgress");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rfqsInProgress, setRfqsInProgress] = useState([]);

  const handleCreateRFQ = (rfqs) => {
    setRfqsInProgress([...rfqsInProgress, ...rfqs]);
    setActiveComponent("RFQsInProgress");
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "RFQsInProgress":
        return <RFQsInProgress rfqs={rfqsInProgress} />;
      case "RejectedRFQs":
        return <RejectedRFQs />;
      case "AcceptedRFQs":
        return <AcceptedRFQs />;
      case "RFQCreatedAndSaved":
        return <RFQCreatedAndSaved />;
      case "ReadyForQuote":
        return <ReadyForQuote />;
      default:
        return <RFQsInProgress rfqs={rfqsInProgress} />;
    }
  };

  return (
    <div className="pl-2 pt-8 mx-10">
      <div className="mx-8 bg-white shadow-2xl rounded-lg p-6">
        <div className="flex justify-end pl-10 mb-6">
          <button
            className="relative m-2 inline-flex items-center gap-x-1.5 rounded-md bg-red-500 px-4 py-2 text-[16px] font-semibold text-white"
            onClick={() => setModalIsOpen(true)}
          >
            Create RFQ
          </button>
        </div>
        <div className="flex justify-between border-b-2 border-gray-300 pb-2 mb-2">
          <button
            className={`px-4 py-2 ${activeComponent === "RFQsInProgress" ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
            onClick={() => setActiveComponent("RFQsInProgress")}
          >
            RFQs in Progress
          </button>
          <button
            className={`px-4 py-2 ${activeComponent === "RejectedRFQs" ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
            onClick={() => setActiveComponent("RejectedRFQs")}
          >
            Rejected RFQs
          </button>
          <button
            className={`px-4 py-2 ${activeComponent === "AcceptedRFQs" ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
            onClick={() => setActiveComponent("AcceptedRFQs")}
          >
            Accepted RFQs
          </button>
          <button
            className={`px-4 py-2 ${activeComponent === "RFQCreatedAndSaved" ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
            onClick={() => setActiveComponent("RFQCreatedAndSaved")}
          >
            RFQ Created and Saved
          </button>
          <button
            className={`px-4 py-2 ${activeComponent === "ReadyForQuote" ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
            onClick={() => setActiveComponent("ReadyForQuote")}
          >
            Ready For Quote
          </button>
        </div>
        <div>{renderComponent()}</div>
        <CreateRFQModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          onSubmit={handleCreateRFQ}
        />
      </div>
    </div>
  );
};

export default DesignerDashboard;
