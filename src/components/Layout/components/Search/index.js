import React from 'react';
import { Divider, List, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import styles from './Search.module.scss';

const cx = classNames.bind(styles)

function SearchMovie({ movieData }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-content')}>
                <List
                    className={cx('item')}
                    size="small"
                    bordered
                    itemLayout="vertical" // Hiển thị danh sách theo chiều dọc
                    dataSource={movieData}
                    renderItem={(movie) => (
                        <List.Item className={cx('item')}>
                            <Typography.Text>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Typography.Text> {movie.title}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default SearchMovie;

// <FontAwesomeIcon icon={faMagnifyingGlass} />
//                         <h3 style={{ margin: 0 }}>{movie.title}</h3>
//                         <p style={{ margin: 0, color: 'gray' }}>Release Date: {movie.release_date}</p>
