import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { RiEditFill } from "react-icons/ri";

import InventorModal from "../modal/inventoryUpdate";
import { InventoryTableSkeleton } from "../Skeleton/Skeleton";


const Inventory = ({
  handlePageChange,
  handleRowsPerPageChange,
  totalRows,
  data,
  loading,
  perPage,
  currentPage,
  fetchInventory
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const columns = [
    {
      name: "SN",
      cell: (row, index) => (
        <span className="font-medium">
          {String(index + 1).padStart(2, "0")}.
        </span>
      ),
      width: "70px",
      center: true,
    },
    {
      name: "Name",
      selector: (row) => row.product_name,
      sortable: true,
    },
    {
      name: "SKU",
      selector: (row) => row.sku,
      sortable: true,
    },
    {
      name: "Stock",
      selector: (row) => `${row.stock} `,
      center: true,
    },
    {
      name: "Sold",
      selector: (row) => `${row.sold}`,
      center: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="text-blue-600 hover:underline"
          onClick={() => {
            setSelectedProduct(row);
            setIsOpen(true);
          }}
        >
          <RiEditFill className="h-5 w-5" />
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

  return (
    <div className="w-full  relative">
      {loading ? (
        <InventoryTableSkeleton />
      ) : (
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          pagination
          highlightOnHover
          responsive
          paginationServer
          paginationTotalRows={totalRows}
          paginationPerPage={perPage}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          paginationDefaultPage={currentPage}
        />
      )}

      {isOpen && selectedProduct && (
        <InventorModal
          isOpen={isOpen}
          fetchInventory={fetchInventory }
          product={selectedProduct}
          onClose={() => {
            setIsOpen(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
};

export default Inventory;
