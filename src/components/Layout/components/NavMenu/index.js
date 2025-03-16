import classNames from "classnames/bind";
import styles from './NavMenu.module.scss';
import { publicRoutes } from "~/routes";
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function NavMenu() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        if (path === '/') {
            navigate('/'); // Điều hướng Home
        } else {
            navigate(path);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {publicRoutes.slice(1, publicRoutes.length).map((route, index) => (
                <div
                    className={cx('menu_item')}
                    onClick={() => handleNavigate(route.path)}
                    key={index}
                >
                    {route.title}
                </div>
            ))}
        </div>
    );
}

export default NavMenu;
