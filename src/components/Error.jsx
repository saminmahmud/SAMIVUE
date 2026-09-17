
export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-96">
      <p className="text-red-500">An error occurred while fetching movies.</p>
      <p className="text-gray-500">Please try again later.</p>
    </div>
  )
}
