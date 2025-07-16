import React, { useCallback, useEffect, useState } from "react";
import InventoryComponent from "../../components/inventory/Inventory";
import { NetworkServices } from "../../network";
import { networkErrorHandeller } from "../../utils/helpers";

const Inventory = () => {
  // const [selectedOrder, setSelectedOrder] = useState(null);

  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  console.log("data", data);

  const handlePageChange = (page) => {
    if (!loading) {
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (newPerPage, page) => {
    setPerPage(newPerPage);
    setCurrentPage(page);
  };

  // Fetch categories from API
  const fetchInventory = useCallback(async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      queryParams.append("page", currentPage);
      queryParams.append("per_page", perPage);
      // if (search) {
      //   queryParams.append("search", search);
      // }
      const response = await NetworkServices.Inventory.index(
        queryParams.toString()
      );
      console.log("response", response);

      if (response?.status === 200) {
        setData(response?.data?.data?.data || []);
        setTotalRows(response?.data?.data?.total || 0);
      }
    } catch (error) {
      console.log(error);
      networkErrorHandeller(error);
    }
    setLoading(false);
  }, [currentPage, perPage]);

  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  useEffect(() => {
    document.title = "Vendor | Inventory ";
  }, []);

  return (
    <div>
      <InventoryComponent
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        totalRows={totalRows}
        data={data}
        loading={loading}
        perPage={perPage}
        currentPage={currentPage}
        fetchInventory={fetchInventory}
      />
    </div>
  );
};

export default Inventory;
