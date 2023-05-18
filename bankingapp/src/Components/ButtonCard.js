function ButtonCard({ title, icon: Icon, onClick }) {
  return (
    <button className="bg-transparent shadow-none flex flex-col items-center justify-center transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white p-12 backdrop-filter backdrop-opacity-50" onClick={onClick} style={{ filter: "brightness(150%)" }}>
      <Icon className="text-6xl mb-4 text-blue-700" />
      <h3 className="text-2xl font-semibold text-center text-green-800">{title}</h3>
    </button>
  );
  }
export default ButtonCard;