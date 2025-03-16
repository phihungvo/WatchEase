import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header';

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

// 'Movies', 'TV Shows', 'People', 'Collections', 'Companies', 'Keywords', 'Networds'