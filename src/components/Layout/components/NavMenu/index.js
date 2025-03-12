import classNames from "classnames/bind"
import styles from './NavMenu.module.scss'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles)

function NavMenu() {
    const menu_titles = [
        'Movies', 'TV Show', 'People', 'More'
    ]

    return (
        <div className={cx('wrapper')}>
            {
                menu_titles.map((title, index) => (
                    <div className={cx('menu_item')} key={index}>{title}</div>
                ))
            }
        </div>
    );
}

export default NavMenu;