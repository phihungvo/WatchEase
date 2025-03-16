import classNames from "classnames/bind";
import React, { useEffect, useState } from 'react';
import styles from './SearchResult.module.scss'
import { Card, Col, Row, Menu, Badge, Avatar, Space } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
// import { Menu } from 'antd';

const cx = classNames.bind(styles)

const menuData = [
    {
        key: '1',
        label: 'Movies',
        count: 15
    }, {
        key: '2',
        label: 'TV Shows',
        count: 2
    }, {
        key: '3',
        label: 'People',
        count: 2
    }, {
        key: '4',
        label: 'Collections',
        count: 3
    }, {
        key: '5',
        label: 'Companies',
        count: 9
    }, {
        key: '6',
        label: 'Keywords',
        count: 12042
    }, {
        key: '7',
        label: 'Networds',
        count: 978
    },
];


const items = menuData.map(item => ({
    key: item.key,
    label: (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {item.label}
            {item.count > 0 && (
                <Space wrap size={16}>
                    <Avatar shape="square" size="small" >{item.count}</Avatar>
                </Space>
            )}
        </div>
    ),
}));


function SearchResult() {

    const [searchParams] = useSearchParams();
    const movieName = searchParams.get('name'); // Lấy giá trị từ URL

    console.log('-----> Movie name from param: ', movieName)


    useEffect(() => {
        console.log('Current URL:', window.location.href);
    }, [searchParams]);


    const { Meta } = Card;
    return (
        <div className={cx('wrapper')}>
            <Row className={cx('content')}>
                <Col span={5}>
                    <div className={cx('left-side')}>
                        <div className={cx('search-result')}>Search Results</div>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{
                                width: '100%',
                                flexGrow: 1, // Tự mở rộng khi có nhiều mục
                                borderRight: 0,
                            }}
                            items={items}
                        />
                    </div>
                </Col>


                <Col span={19} className={cx('right-side')}>
                    <Card
                        hoverable
                        style={{
                            display: "flex",
                            flexDirection: "row", // Sắp xếp các phần tử theo hàng ngang
                            width: 1000,
                            height: 141,
                            alignItems: "center",
                            marginBottom: 30,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                style={{ width: 94, height: 141, objectFit: "cover" }} // Giữ ảnh cố định
                            />
                        }
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                        <p style={{ paddingTop: 20 }}>Một thiếu nữ mồ côi cùng một robot bí ẩn lên đường tìm kiếm em trai thất lạc từ lâu của cô.
                            Trong hành trình đó, cô bắt tay với một tay buôn lậu và trợ thủ hay châm chọc của hắn.</p>
                    </Card>
                    <Card
                        hoverable
                        style={{
                            display: "flex",
                            flexDirection: "row", // Sắp xếp các phần tử theo hàng ngang
                            width: 1000,
                            height: 141,
                            alignItems: "center",
                            marginBottom: 30,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                style={{ width: 94, height: 141, objectFit: "cover" }} // Giữ ảnh cố định
                            />
                        }
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                        <p style={{ paddingTop: 20 }}>Một thiếu nữ mồ côi cùng một robot bí ẩn lên đường tìm kiếm em trai thất lạc từ lâu của cô.
                            Trong hành trình đó, cô bắt tay với một tay buôn lậu và trợ thủ hay châm chọc của hắn.</p>
                    </Card>


                </Col>
            </Row>
        </div>
    );

}

export default SearchResult;
