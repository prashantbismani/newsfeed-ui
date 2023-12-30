const Loader = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500">Fetching headlines...</p>
      </div>
    );
  };
  
  export default Loader;