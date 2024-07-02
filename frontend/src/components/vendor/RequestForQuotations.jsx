import React from 'react'

const RequestForQuotations = () => {
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
                    {[...Array(10)].map((_, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-2 px-4 border-r">{index + 1}</td>
                            <td className="py-2 px-4 border-r"></td>
                            <td className="py-2 px-4 border-r"></td>
                            <td className="py-2 px-4 border-r"></td>
                            <td className="py-2 px-4 border-r"></td>
                            <td className="py-2 px-4 flex justify-center space-x-2">
                                <button className="bg-red-500 text-white py-1 px-2 rounded">Bid</button>
                                <button className="bg-red-500 text-white py-1 px-2 rounded">Save</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RequestForQuotations


// import React from 'react'

// const RequestForQuotations = ({ data }) => {
//     return (
//         <div className="p-4">
//             <p className="mb-4">Please click on the "Bid" button to place your bid.</p>
//             <table className="min-w-full bg-white border border-gray-200">
//                 <thead>
//                     <tr className="w-full bg-gray-100 border-b">
//                         <th className="py-2 px-4 border-r">S. No.</th>
//                         <th className="py-2 px-4 border-r">RFQ No.</th>
//                         <th className="py-2 px-4 border-r">Category</th>
//                         <th className="py-2 px-4 border-r">Sub-Category</th>
//                         <th className="py-2 px-4 border-r">Units</th>
//                         <th className="py-2 px-4">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item, index) => (
//                         <tr key={index} className="border-b">
//                             <td className="py-2 px-4 border-r">{index + 1}</td>
//                             <td className="py-2 px-4 border-r">{item.rfqNo}</td>
//                             <td className="py-2 px-4 border-r">{item.category}</td>
//                             <td className="py-2 px-4 border-r">{item.subCategory}</td>
//                             <td className="py-2 px-4 border-r">{item.units}</td>
//                             <td className="py-2 px-4 flex space-x-2">
//                                 <button className="bg-red-500 text-white py-1 px-2 rounded">Bid</button>
//                                 <button className="bg-red-500 text-white py-1 px-2 rounded">Save</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default RequestForQuotations