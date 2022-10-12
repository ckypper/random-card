export default function Home() {
  const removeElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.visibility = "hidden";
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 8 }).map((item, index) => (
              <div
                id={`red-${index}`}
                key={index}
                onClick={() => removeElement(`red-${index}`)}
                className="py-6 px-4 bg-red-600 rounded-md shadow-md text-white cursor-pointer select-none"
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 8 }).map((item, index) => (
              <div
                id={`blue-${index}`}
                key={index}
                onClick={() => removeElement(`blue-${index}`)}
                className="py-6 px-4 bg-blue-600 rounded-md shadow-md text-white cursor-pointer select-none"
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 8 }).map((item, index) => (
              <div
                id={`yellow-${index}`}
                key={index}
                onClick={() => removeElement(`yellow-${index}`)}
                className="py-6 px-4 bg-yellow-600 rounded-md shadow-md text-white cursor-pointer select-none"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
