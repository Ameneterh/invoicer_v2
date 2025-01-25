export const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-3">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-4 text-green-500" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200"
      />
    </div>
  );
};

export const InvInput = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-3">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-4 text-green-500" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-white bg-opacity-50 rounded-lg border border-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-gray-600 placeholder-gray-400 transition duration-200 text-sm"
      />
    </div>
  );
};
