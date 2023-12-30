'use client'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
        <p className="text-gray-800">Sorry, the page you are looking for does not exist.</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => router.push('/')}
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;