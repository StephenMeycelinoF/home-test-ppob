import { Loader } from "lucide-react";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  isDisabled = false,
  isLoading = false,
  className = "",
}) {
  // Variasi styling button
  const variants = {
    primary: "bg-red-500 hover:bg-red-600 text-white",
    secondary: "bg-gray-400 hover:bg-gray-500 text-white",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={`p-3 rounded-md w-full font-medium ${variants[variant]} ${
        isDisabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <Loader className="animate-spin mr-2 w-6 " />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
