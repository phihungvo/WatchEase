import styles from './EmojiButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function EmojiButton({ emoji }) {
    return (
        <div className={cx('item')}>
            <button className={cx('emoji-button')}>{emoji}</button>
        </div>
    );
}

export default EmojiButton;
