export default function Modal({
  title,
  isOpen,
  onClose,
  children,
}: {
  title: string,
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 z-50 transition-all duration-300 translate-y-100   flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center border-b px-4 py-2">
          <h2 className="text-lg font-semibold text-black">Create {title} Data</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            ✖
          </button>
        </div>
        <div className="p-4">{children}</div>
        <div className="flex justify-end border-t px-4 py-2">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
