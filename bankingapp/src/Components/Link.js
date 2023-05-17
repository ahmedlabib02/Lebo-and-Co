import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';


function Link({to,children,className,activeClassName}){
const {currentPath,navigate}= useNavigation();

const classes = classNames('text-blue-500 underline italic',
className,
currentPath===to&& activeClassName);

    const handleClick = (event)=>{
        if(event.ctrlKey|| event.metaKey){
        return;
    }
    event.preventDefault();
    navigate(to);

    }

    return <a className={classes} onClick={handleClick} href={to}>{children}</a>
}

export default Link;
