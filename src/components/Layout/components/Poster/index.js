import styles from './Poster.module.scss';
import classNames from "classnames/bind";
import 'tippy.js/dist/tippy.css';
import React, { useEffect, useState } from 'react';
import { Segmented, Card } from 'antd';
import { getMovieInWeek } from '~/services/index';
import CardInfo from '../CardInfo';

const cx = classNames.bind(styles)

function Poster({ trendingState }) {
    const [state, setState] = useState(trendingState.length > 0 ? trendingState[0] : null)
    const [results, setResults] = useState([])
    const { Meta } = Card;

    useEffect(() => {
        console.log("State cập nhật:", state);

        const fetchMovieInWWeek = async () => {
            try {
                const results = await getMovieInWeek();
                setResults(results)
                console.log('Success when get movies.', results);
            } catch (error) {
                console.log('Error when get movies.');
            }
        };

        fetchMovieInWWeek();
    }, [state]);


    const handleChange = (value) => {
        setState(value)
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <div className={cx('wrapper-btn')}>
                        <h2>Trending</h2>
                        <>
                            <Segmented
                                value={state}
                                style={{
                                    marginBottom: 8,
                                }}
                                onChange={handleChange}
                                options={trendingState}
                                className={cx('segment')}
                            />
                        </>
                    </div>
                </div>

                <div className={cx('list-film')}>
                    <CardInfo movieResult={results} />
                </div>
            </div>

        </div>
    );
};

export default Poster;