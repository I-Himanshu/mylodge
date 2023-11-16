import React from "react";

export default function LodgeCard() {
  return (
    <div className="flex flex-col relative max-w-md shadow-xl overflow-hidden bg-slate-200 rounded-sm">
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt=""
      />
      <div className="p-5 -mt-8 rounded-2xl bg-white relative">
        <div className="flex flex-row items-center space-x-1">
          <p className="font-bold text-xl">Lodge Shri Dev</p>
          <div className="text-yellow-500 flex flex-row">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-row space-x-1 text-blue-600 my-2">
          <p className=" font-semibold text-xs">
            Feb 18 - 25, 2022, 2 adults, 1 room
          </p>
          <svg
            className="h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </div>
        <div className="flex flex-row items-center space-x-2 mb-2">
          <p className="font-bold">4.0</p>
          <img
            className="h-4"
            src="http://cdn.onlinewebfonts.com/svg/img_424257.png"
            alt=""
          />
        </div>
        <div className="flex flex-row space-x-1">
          <div className="bg-gray-100 px-3 py-1 rounded-lg flex space-x-2 flex-row">
            <svg
              className="h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
              <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"></path>
              <path d="M5 18v2"></path>
              <path d="M19 18v2"></path>
            </svg>
            <p className="text-xxsm">Cleanliness 4.5/5</p>
          </div>
          <div className="bg-green-100 px-3 py-1 rounded-lg flex space-x-2 flex-row">
            <svg
              className="h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 10v12"></path>
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
            </svg>
            <p className="text-xxsm">Location 4.5/5</p>
          </div>
        </div>
        <div className="text-grey-500 flex flex-row space-x-1 py-4 border-t border-b border-gray-200 my-4">
          <svg
            className="h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p className="text-xs">Station Raod, Dedaur, Bakhtiyarpur</p>
        </div>
        <p className="mt-4">
          {" "}
          <strong>Lowest price</strong> for 1 Month
        </p>
        <div className="bg-gray-100 p-4 mt-2">
          <div className="flex flex-row justify-between">
            <img
              src="https://logos-download.com/wp-content/uploads/2016/08/Agoda_logo.png"
              className="h-5"
              alt=""
            />
            <div className="text-right">
              <p className="text-2xl font-bold">$47.00</p>
              <p className="text-xxsm text-gray-400">
                Taxes and fees not included.
              </p>
              <p className="text-xxsm">Negotiateable</p>
            </div>
          </div>
          <button className="rounded-lg w-full py-2 mt-5 text-white font-bold bg-[#bab709]">
            Book Lodge
          </button>
        </div>
      </div>
    </div>
  );
}
