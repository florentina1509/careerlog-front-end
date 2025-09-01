import { useEffect } from "react";

export default function Toast({ message, type = "info", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto close after 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  const base =
    "fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg text-white font-medium";

  const styles = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  };

  return (
    <div className={`${base} ${styles[type]}`}>
      {message}
    </div>
  );
}
