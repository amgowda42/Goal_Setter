import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <button
        onClick={handleGoHome}
        className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition cursor-pointer"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
