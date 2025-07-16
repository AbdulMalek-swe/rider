import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import { FaEye } from "react-icons/fa";
import EarningStats from "../../components/earning-stats/earningStats";
import { EarningsTableSkeleton } from "../../components/Skeleton/Skeleton";

const earningDetails = [
  { id: 1, name: "Men's Tshirt Sky Blue", orderId: "MTLV68454", amount: 450 },
  {
    id: 2,
    name: "Men's Tshirt Premium Blue",
    orderId: "MTLV35975",
    amount: 450,
  },
];

const columns = [
  {
    name: "SN",
    selector: (row, index) => `0${index + 1}.`,
    width: "100px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Order ID",
    selector: (row) => row.orderId,
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
    sortable: true,
    right: true,
  },
  {
    name: "Action",
    cell: (row) => (
      <button className="text-gray-600 hover:text-black">
        <FaEye size={16} />
      </button>
    ),
    center: true,
  },
];
const customStyles = {
  header: {
    style: {
      border: "1px solid #E5E7EB", // ✅ Full border around the entire header row
      borderRadius: "6px 6px 0 0", // (Optional) Rounded top corners
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

  useEffect(() => {
    document.title = "Admin | Earning ";
  }, []);
  return (
    <div className="">
      {/* Stats Summary */}
      <EarningStats />

      {/* Data Table */}
      <div className="font-poppins pt-5">
        <h2 className="text-lg  font-semibold text-[#8B8B8B] mb-3">
          Earning Details
        </h2>
        {loading ? (
          <EarningsTableSkeleton />
        ) : (
          <DataTable
            columns={columns}
            data={earningDetails}
            customStyles={customStyles}
            pagination
            highlightOnHover
            responsive
            dense
            noHeader
          />
        )}
      </div>
    </div>
  );
};

export default Earning;
