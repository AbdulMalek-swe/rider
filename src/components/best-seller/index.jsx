import React from 'react';
import DataTable from 'react-data-table-component';
import { FaArrowRight } from 'react-icons/fa';

// Sample data
const bestSellers = [
  {
    id: 1,
    image: '/image/login-profile.svg',
    name: 'Deco accessory',
    price: '$21.19',
    sold: 409,
    profit: '$1822.87',
  },
  {
    id: 2,
    image: '/image/login-profile.svg',
    name: 'Pottery Vase',
    price: '$14.18',
    sold: 396,
    profit: '$8545.25',
  },
  {
    id: 3,
    image: '/image/login-profile.svg',
    name: 'Rose Holdback',
    price: '$18.15',
    sold: 243,
    profit: '$7287.01',
  },
  {
    id: 4,
   image: '/image/login-profile.svg',
    name: 'Flowering Cactus',
    price: '$74.16',
    sold: 636,
    profit: '$9325.47',
  },
  {
    id: 4,
   image: '/image/login-profile.svg',
    name: 'Flowering Cactus',
    price: '$74.16',
    sold: 636,
    profit: '$9325.47',
  },
  {
    id: 4,
   image: '/image/login-profile.svg',
    name: 'Flowering Cactus',
    price: '$74.16',
    sold: 636,
    profit: '$9325.47',
  },
  {
    id: 4,
   image: '/image/login-profile.svg',
    name: 'Flowering Cactus',
    price: '$74.16',
    sold: 636,
    profit: '$9325.47',
  },
];

// Define columns
const columns = [
  {
    name: 'Product',
    selector: row => row.name,
    sortable: true,
    cell: row => (
      <div className="flex items-center gap-2">
        <img src={row.image} alt={row.name} className="w-8 h-8 rounded-full object-cover" />
        <span>{row.name}</span>
      </div>
    ),
    grow: 2,
  },
  {
    name: 'Price',
    selector: row => row.price,
    sortable: true,
  },
  {
    name: 'Sold',
    selector: row => row.sold,
    sortable: true,
  },
  {
    name: 'Profit',
    selector: row => row.profit,
    sortable: true,
  },
];
const customStyles = {
  headRow: {
    style: {
      backgroundColor: '#f3f4f6', // 
      fontWeight: '600',
    },
  },
  headCells: {
    style: {
      color: '#374151', // Tailwind's gray-700
      fontSize: '14px',
    },
  },
};


const BestSellersTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Best Sellers</h2>
        <a href="#" className="text-sm  text-gray-500 hover:underline flex items-center gap-5">
          More <span className="text-lg"> <FaArrowRight/>
 </span>
        </a>
      </div>

      <DataTable
        columns={columns}
        data={bestSellers}
        highlightOnHover
        responsive
        customStyles={customStyles} // ← add this line
      />
    </div>
  );
};

export default BestSellersTable;
