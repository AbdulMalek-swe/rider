import React, { useState } from "react";
import { FaCheckCircle, FaFilter, FaSortAmountDown, FaStar } from "react-icons/fa";

const RatingBar = ({ count, total, stars }) => {
  const percentage = (count / total) * 100;
  return (
    <div className="flex items-center space-x-2 text-sm">
      <div className="flex text-yellow-500 min-w-[50px]">
        {Array.from({ length: 5 }, (_, i) =>
          i < stars ? (
            <FaStar key={i} className="w-4 h-4" />
          ) : (
            <FaStar key={i} className="w-4 h-4 text-gray-200" />
          )
        )}
      </div>
      <div className="flex-1 h-2 bg-gray-200 rounded">
        <div
          className="h-full bg-yellow-500 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-gray-600 w-10 text-right">{count}</div>
    </div>
  );
};

const Setting = () => {
  const [filterRating, setFilterRating] = useState("all");

  const ratings = [
    { stars: 5, count: 5912 },
    { stars: 4, count: 707 },
    { stars: 3, count: 248 },
    { stars: 2, count: 84 },
    { stars: 1, count: 272 },
  ];
  const totalRatings = 7223;

  const reviews = [
    {
      id: 1,
      name: "S.M.A",
      date: "18 Nov 2024",
      rating: 1,
      verified: true,
      text: "বাজারের ফাঁদে পড়া / মজার আগল পড়েছে প্রোডাক্ট...",
      images: [1, 2, 3, 4, 5],
    },
    {
      id: 2,
      name: "John Doe",
      date: "10 Oct 2024",
      rating: 5,
      verified: true,
      text: "Excellent product. Great packaging!",
      images: [1, 2],
    },
    {
      id: 3,
      name: "Jane Smith",
      date: "5 Sep 2024",
      rating: 3,
      verified: false,
      text: "Average quality, could be better.",
      images: [],
    },
  ];

  const filteredReviews =
    filterRating === "all"
      ? reviews
      : reviews.filter((review) => review.rating === Number(filterRating));

  return (
    <div className="max-w-6xl mx-auto p-4  bg-gray-50">
      {/* Ratings Section */}
      <div className="bg-white rounded shadow">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 text-start bg-gray-100 p-2">
          Ratings & Reviews of Dettol Soap Original Pack of 3 (75gm X 3) Free Tiffin Box
        </h1>
        <div className="flex flex-wrap p-4 justify-between mt-4">
          <div className="flex flex-col items-center w-full sm:w-1/3 mb-4">
            <p className="text-4xl font-bold text-yellow-500">
              4.9 <span className="text-gray-300">/5</span>
            </p>
            <div className="flex text-yellow-500 mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-xl" />
              ))}
            </div>
            <span className="text-sm text-gray-600 mt-1">{totalRatings} Ratings</span>
          </div>
          <div className="flex-1 md:w-1/2 space-y-2">
            {ratings.map(({ stars, count }) => (
              <RatingBar key={stars} count={count} total={totalRatings} stars={stars} />
            ))}
          </div>
        </div>
      </div>

      {/* Filter and Sort */}
     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-gray-300 px-4 py-4 bg-white">
  {/* Title */}
  <h2 className="font-semibold text-gray-800 text-lg">Product Reviews</h2>

  {/* Sort & Filter Controls */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-600 w-full sm:w-auto">
    
    {/* Sort */}
    <div className="flex items-center space-x-2 w-full sm:w-auto">
      <span className="text-gray-700 font-medium">Sort:</span>
      <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition text-sm text-gray-800 font-semibold w-full sm:w-auto">
        <FaSortAmountDown className="w-4 h-4 text-gray-600" />
        Relevance
      </button>
    </div>

    {/* Filter */}
    <div className="flex items-center space-x-2 w-full sm:w-auto">
      <label htmlFor="starFilter" className="text-gray-700 font-medium flex items-center gap-1">
        <FaFilter className="text-gray-600 w-4 h-4" />
        Filter:
      </label>
      <select
        id="starFilter"
        className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-800 bg-white hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-auto"
        value={filterRating}
        onChange={(e) => setFilterRating(e.target.value)}
      >
        <option value="all">All Ratings</option>
        <option value="5">5 stars</option>
        <option value="4">4 stars</option>
        <option value="3">3 stars</option>
        <option value="2">2 stars</option>
        <option value="1">1 star</option>
      </select>
    </div>

  </div>
</div>


      {/* Filtered Reviews */}
      {filteredReviews.length > 0 ? (
        filteredReviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded shadow-sm">
            <div className="text-sm text-gray-700 space-y-3">
              <div className="flex items-center justify-between  pb-2">
                <span className="font-semibold flex items-center gap-1">
                  {review.name}
                  {review.verified && (
                    <span className="text-green-600 ml-1 inline-flex items-center">
                      <FaCheckCircle className="w-4 h-4 mr-1" />
                      Verified Purchase
                    </span>
                  )}
                </span>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>

              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`text-base ${
                      i < review.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-justify leading-relaxed">{review.text}</p>

              {review.images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {review.images.map((img, index) => (
                    <img
                      key={index}
                      src={`/image/products/image.svg`}
                      alt={`Review image ${img}`}
                      className="w-full h-24 object-cover rounded border"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 text-sm bg-white p-4 rounded">
          No reviews for this rating.
        </p>
      )}
    </div>
  );
};

export default Setting;
