function ButtonCard({ title, icon: Icon, onClick }) {
  return (
    <button className="bg-white shadow-lg rounded-full flex flex-col items-center justify-center transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white p-12" 
    onClick={onClick}>
      <Icon className="text-6xl mb-4" />
      <h3 className="text-2xl font-semibold text-center">{title}</h3>
    </button>
  );
}
export default ButtonCard;