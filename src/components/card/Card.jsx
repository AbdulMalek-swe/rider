import React from "react";

const Card = () => {
  const data = [
    {
      title: "New Orders",
      value: 5,
      color: "bg-gradient-to-r from-[#D623FE] to-[#A530F2]",
      img: "/image/dash/lock.svg",
    },
    {
      title: "Total Orders",
      value: 20,
      color: "bg-gradient-to-r from-[#FA6464] to-[#DC2626]",
      img: "/image/dash/lock.svg",
    },
    {
      title: "Shipped Orders",
      value: 12,
      color: "bg-gradient-to-r from-[#6BAAFC] to-[#305FEC]",
      img: "/image/dash/track.svg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {data.map((d, i) => (
        <div
          key={i}
          className={`${d.color} text-white rounded-lg p-6 shadow-md`}
        >
          <p className="text-lg font-semibold">{d.title}</p>

          <div className="flex justify-between">
            {" "}
            <img src={d?.img} alt="" />{" "}
            <p className="text-5xl font-bold mt-2">{d.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
