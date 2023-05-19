import className from 'classnames'

function ButtonCard({ title, icon: Icon, onClick,homepage}) {
  const buttonStyle = className('hover:bg-indigo-600 rounded-lg shadow-md items-center justify-center flex flex-col',
   {'md:p-4 md:mx-2 w-1/5 max-w-xs transition duration-300  transparent small ease-in-out p-2 ': homepage}
  );
  
  return (
    <button
      className={buttonStyle}
      onClick={onClick}
    >
      <Icon className="text-5xl mb-2 text-white " />
      <h3 className="text-base font-semibold text-center text-white">{title}</h3>
    </button>
  );
}
export default ButtonCard;
