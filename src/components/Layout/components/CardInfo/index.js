import React from 'react';
import { Card, Flex, Progress } from 'antd';
import styles from './CardInfo.module.scss';
import classNames from "classnames/bind";
import { PlayCircleOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles)

function CardInfo({ movieResult, isTrailer, state = null }) {
    const { Meta } = Card;

    return (
        <div className={cx('card-film')}>

            {
                movieResult.map((movie) => (
                    <Card
                        key={movie.id}
                        hoverable
                        style={isTrailer ? { width: 300, height: 320, marginLeft: 15 } : { width: 150, height: 320, marginLeft: 15 }}
                        cover={isTrailer ? (
                            // <iframe
                            //     src={`https://www.youtube.com/embed/${movie.trailer_key}`}
                            //     title={movie.title}
                            //     frameBorder="0"
                            //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            //     allowFullScreen
                            //     style={{
                            //         width: '100%',
                            //         height: '169px',
                            //         objectFit: 'cover',
                            //         borderTopLeftRadius: '8px',
                            //         borderTopRightRadius: '8px',
                            //     }}
                            // />
                            <>
                                <img
                                    alt={movie.title}
                                    src={`https://image.tmdb.org/t/p/w500${movie.image_path}`}
                                    style={{
                                        width: '150px',
                                        height: '225px',
                                        objectFit: 'cover',
                                        borderTopLeftRadius: '25px',
                                        borderTopRightRadius: '25px',
                                    }}
                                />
                                <button>
                                    <PlayCircleOutlined className={cx('play-icon')} />
                                </button>
                            </>
                        ) :
                            (
                                <img
                                    alt={movie.title}
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    style={{
                                        width: '150px',
                                        height: '225px',
                                        objectFit: 'cover',
                                        borderTopLeftRadius: '25px',
                                        borderTopRightRadius: '25px',
                                    }}
                                />
                            )
                        }
                    >
                        {/* #21d07a */}
                        <div className={cx('progress-overlay')} >
                            <Flex wrap gap="small">
                                <Progress
                                    type="circle"
                                    percent={Math.min(Math.floor(movie.popularity), 100)}
                                    size={35}
                                    strokeColor='#21d07a'
                                    trailColor='#1f4a29'
                                />
                            </Flex>
                        </div>
                        <Meta className={cx('info')} title={movie.title} description={movie.release_date} />
                    </Card>
                ))
            }

        </div >
    );
}

export default CardInfo;
