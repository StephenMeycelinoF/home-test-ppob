
function Error() {
  return (
    <div className="flex items-center justify-center h-screen bg-red-500 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p className="text-lg mt-4">
          Something went wrong or the page doesn’t exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-white text-red-500 px-4 py-2 rounded-lg font-medium hover:bg-gray-200"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}

export default Error;
