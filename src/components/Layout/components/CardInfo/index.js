import React from 'react';
import { Card } from 'antd';
import styles from './CardInfo.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function CardInfo({ movieResult }) {
    const { Meta } = Card;

    return (
        <div className={cx('card-film')}>

            {
                movieResult.map((movie, index) => (
                    <Card
                        key={index}
                        hoverable
                        style={{ width: 150, height: 320, marginLeft: 15 }}
                        cover={
                            <img
                                alt={movie.title}
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            />
                        }
                    >
                        <Meta title={movie.title} description={movie.overview} />
                    </Card>
                ))
            }

        </div>
    );
}

export default CardInfo;