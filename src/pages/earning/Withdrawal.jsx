import React, { useState } from "react";
import DataTable from "react-data-table-component";

import { FaEye } from "react-icons/fa";
import EarningStats from "../../components/earning-stats/earningStats";
import { LuQrCode } from "react-icons/lu";
import { MyWithDrawSkeleton } from "../../components/Skeleton/Skeleton";



const earningDetails = [
    { id: 1, method: "bkash", charge: "MTLV68454", amount: 450, status: "pending" },
    { id: 2, method: "nagad", charge: "MTLV35975", amount: 450, status: "success" },
    { id: 3, method: "rocket", charge: "MTLV68454", amount: 50, status: "pending" },
    { id: 4, method: "bkash", charge: "MTLV35975", amount: 300, status: "success" },
    { id: 5, method: "nagad", charge: "MTLV68454", amount: 200, status: "pending" },
    { id: 6, method: "rocket", charge: "MTLV35975", amount: 400, status: "success" },
];

const columns = [
    {
        name: "SN",
        selector: (row, index) => `0${index + 1}.`,
        width: "100px",
    },
    {
        name: "method",
        selector: (row) => row.method,
        sortable: true,
    },
     {
        name: "Amount",
        selector: (row) => row.amount,
        sortable: true,
      
    },
    {
        name: "charge",
        selector: (row) => row.charge,
        sortable: true,
    },
   {
  name: "Status",
  cell: (row) => {
    const statusColor =
      row.status === "success"
        ? "bg-[#FF6600] leading-5 text-white"
        : "bg-yellow-700 leading-5 text-white";

    return (
      <span
        className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColor}`}
      >
        {row.status}
      </span>
    );
  },
  sortable: true,
}
,
   
    {
        name: "Action",
        cell: (row) => (
            <button className="cursor-pointer">
                <img className="h-5" src="/image/Vector.svg" alt="delete" />
            </button>
        ),
        center: true,

    },
];
const customStyles = {
    header: {
        style: {
            border: "1px solid #E5E7EB",
            borderRadius: "6px 6px 0 0",

        },
    },
    headCells: {
        style: {
            fontWeight: "600",
            fontSize: "14px",
            color: "#6B7280",


        },
    },
    rows: {
        style: {
            minHeight: "64px",
            borderBottom: "1px solid #E5E7EB",
        },
    },
    cells: {
        style: {
            paddingTop: "14px",
            paddingBottom: "14px",
        },
    },
};

const Earning = () => {
    const [loading, setLoading] = useState(false);
    return (
        <div classmethod="p-4 space-y-6  ">
            {/* Stats Summary */}
            <EarningStats />

            {/* Data Table */}
            <div className="font-poppins">
               <h2 className="text-lg  font-semibold text-[#8B8B8B] my-3">Earning Details</h2>
               {
                loading ? (
                   <MyWithDrawSkeleton/>
                ) : (
                    <DataTable
                        columns={columns}
                        data={earningDetails}
                        customStyles={customStyles}
                        pagination
                        highlightOnHover
                        pointerOnHover
                    />
                )
               }

            </div>
        </div>
    );
};

export default Earning;
