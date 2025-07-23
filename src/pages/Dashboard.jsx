import React from "react";

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to your Dashboard!</h1>
      <p className="mt-4 text-gray-600">This page is protected and only visible to logged-in users.</p>
    </div>
  );
};

export default Dashboard;
