import { useParams } from 'react-router-dom';
import { getDetailtMovie } from '~/services/movieDetailService';
import classNames from 'classnames/bind';
import styles from './MovieDetail.module.scss';
import React from 'react';
import { Col, Row, Flex, Progress, Typography } from 'antd';
import ProgressOverlay from '~/components/Layout/components/ProgressOverplay';
import EmojiButton from '~/components/Layout/components/EmojiButton';

const cx = classNames.bind(styles);
const { Text } = Typography;

function MovieDetail() {
    const { id } = useParams();
    const emojis = ['😊', '💀', '🥵', '🤡', '💩'];

    return (
        <>
            <div className={cx('movie-detail-wrapper')}>
                <div className={cx('wrapper-inner')}>
                    <Row>
                        <Col span={6}>
                            <div className={cx('left-side')}>
                                <div className={cx('image-movie')}>
                                    <img src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/4Dpr19yjdFjW97nnasEztnc1tG9.jpg" />
                                </div>
                            </div>
                        </Col>
                        <Col span={18}>
                            <div className={cx('right-side')}>
                                <div>
                                    <h1>
                                        <a>Cắt rời ký ức - Severance (2022)</a>
                                    </h1>
                                    <h3>
                                        Phim chính kịch, Phim bí ẩn, Sci-Fi &
                                        Fantasy
                                    </h3>

                                    <div className={cx('interaction-row')}>
                                        <div
                                            className={cx('progress-container')}
                                        >
                                            <ProgressOverlay
                                                popularity={5.5}
                                                size={50}
                                            />
                                            <span className={cx('user-score')}>
                                                User <br /> Score
                                           </span>
                                        </div>

                                        <div className={cx('emoji-container')}>
                                            {emojis.map((emoji, index) => (
                                                <EmojiButton
                                                    key={index}
                                                    emoji={emoji}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default MovieDetail;
