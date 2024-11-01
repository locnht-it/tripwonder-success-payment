import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 text-center p-6">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mx-auto mb-6">
          {/* Larger Green Check Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2l4-4"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mt-3">
          Thank you for your payment. Your transaction has been completed
          successfully!
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
