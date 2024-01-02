import React from 'react';

const NoDataComponent = () => (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          No headlines for today.
        </h2>
        <p className="text-gray-500">
          Please check again later.
        </p>
      </div>
    </div>
  );

export default NoDataComponent;