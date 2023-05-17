
function MenuBar() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex">
          <a href="#" className="text-white font-semibold mr-6">Help</a>
          <a href="#" className="text-white font-semibold mr-6">News</a>
          <a href="#" className="text-white font-semibold">Currency Exchange Rate</a>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;