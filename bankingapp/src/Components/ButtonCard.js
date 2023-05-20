import className from 'classnames'

function ButtonCard({ title, icon: Icon, onClick,homepage}) {
  const buttonStyle = className('hover:bg-indigo-600  rounded-lg shadow-md items-center justify-center flex flex-col',
   {'md:p-4 md:mx-2 w-1/5 max-w-xs transition duration-300  transparent small ease-in-out p-2 ': homepage},
   {'w-48 h-48': !homepage});
  const IconSyle = className('text-5xl mb-2',
  {'text-white':homepage},
  {'text-black':!homepage});

  const textSytle = className('text-base font-semibold text-center',
  {'text-white':homepage},
  {'text-black':!homepage}
  );
  return (
    <button
      className={buttonStyle}
      onClick={onClick}
    >
      <Icon className={IconSyle} />
      <h3 className={textSytle}>{title}</h3>
    </button>
  );
}
export default ButtonCard;
