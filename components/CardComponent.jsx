import React from 'react';
import { Avatar, Card } from 'antd';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { MdDescription } from 'react-icons/md';

const { Meta } = Card;

const CardComponent = ({ cardTitle, description }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <AiFillGithub key="setting" style={{ fontSize: 25 }} />,
        <AiOutlineLink key="edit" style={{ fontSize: 25 }} />,
        <MdDescription key="ellipsis" style={{ fontSize: 25 }} />,
      ]}
    >
      <Meta title={cardTitle} description={description} />
    </Card>
  );
};

export default CardComponent;
