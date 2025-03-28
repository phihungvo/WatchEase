import React, { useState } from 'react';
import { DotChartOutlined } from '@ant-design/icons';
import { Flex, Divider, Form, Radio, Skeleton, Space, Switch } from 'antd';

function SkeletonComponent() {
    const [active, setActive] = useState(false);
    const [block, setBlock] = useState(false);
    const [size, setSize] = useState('default');
    const [buttonShape, setButtonShape] = useState('default');
    const [avatarShape, setAvatarShape] = useState('circle');
    // const handleActiveChange = (checked) => {
    //     setActive(checked);
    // };
    // const handleBlockChange = (checked) => {
    //     setBlock(checked);
    // };
    // const handleSizeChange = (e) => {
    //     setSize(e.target.value);
    // };
    // const handleShapeButton = (e) => {
    //     setButtonShape(e.target.value);
    // };
    // const handleAvatarShape = (e) => {
    //     setAvatarShape(e.target.value);
    // };
    return (
        <Flex gap="middle" vertical>
            {/* <Space>
                <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
                <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
                <Skeleton.Input active={active} size={size} />
            </Space>
            <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
            <Skeleton.Input active={active} size={size} block={block} /> */}
            <Space>
                <Skeleton.Image active={active} size={'large'} />
                {/* <Skeleton.Node
                    active={active}
                    style={{
                        width: 160,
                    }}
                />
                <Skeleton.Node active={active}>
                    <DotChartOutlined
                        style={{
                            fontSize: 40,
                            color: '#bfbfbf',
                        }}
                    />
                </Skeleton.Node> */}
            </Space>
            <Divider />
            <Form
                layout="inline"
                style={{
                    margin: '16px 0',
                }}
            >
                <Space size={16} wrap>
                    {/* <Form.Item label="Active">
                        <Switch checked={active} onChange={handleActiveChange} />
                    </Form.Item>
                    <Form.Item label="Button and Input Block">
                        <Switch checked={block} onChange={handleBlockChange} />
                    </Form.Item>
                    <Form.Item label="Size">
                        <Radio.Group value={size} onChange={handleSizeChange}>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="large">Large</Radio.Button>
                            <Radio.Button value="small">Small</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Button Shape">
                        <Radio.Group value={buttonShape} onChange={handleShapeButton}>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="square">Square</Radio.Button>
                            <Radio.Button value="round">Round</Radio.Button>
                            <Radio.Button value="circle">Circle</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Avatar Shape">
                        <Radio.Group value={avatarShape} onChange={handleAvatarShape}>
                            <Radio.Button value="square">Square</Radio.Button>
                            <Radio.Button value="circle">Circle</Radio.Button>
                        </Radio.Group>
                    </Form.Item> */}
                </Space>
            </Form>
        </Flex>
    );
};
export default SkeletonComponent;