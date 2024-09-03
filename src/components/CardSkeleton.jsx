
const CardSkeleton = () => {
  return (
    <div className="bg-gray-200 animate-pulse shadow-md rounded-lg overflow-hidden">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w]-3/4 mb-4"></div>
        <div className="flex items-center my-2">
          <div className="h-4 bg-gray-300 rounded w-1/4 mr-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  )
}

export default CardSkeleton