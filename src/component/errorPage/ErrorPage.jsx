import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-6">
      <div className="text-center max-w-lg">
        
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-400">
          The page you’re looking for doesn’t exist or has been moved.
          Please check the URL or go back to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
          >
            Go Back
          </button>

          <a
            href="/"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
          >
            Home
          </a>
        </div>

        {/* Decorative Element */}
        <div className="mt-10 opacity-20 text-sm">
          Error Code: 404_NOT_FOUND
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;