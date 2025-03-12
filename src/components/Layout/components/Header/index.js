import classNames from "classnames/bind"
import styles from './Header.module.scss'
import NavMenu from '../NavMenu'
import { faBell, faLanguage, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('sub_media')}>
                    <div className={cx('leftMenu')}>
                        <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
                        <NavMenu />
                    </div>
                    <div className={cx('rightMenu')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                        <FontAwesomeIcon className={cx('icon')} icon={faLanguage} />
                        <FontAwesomeIcon className={cx('icon')} icon={faBell} />
                        <div className={cx('icon')}>
                            <img src='https://haycafe.vn/wp-content/uploads/2022/10/Hinh-anh-gai-xinh-Viet-Nam-cuoi-tuoi-tan.jpg' />
                        </div>
                        <FontAwesomeIcon className={cx('icon', 'search')} icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
        </ header>
    );
}

export default Header;