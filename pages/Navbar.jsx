import React, { useState } from 'react';
import { Menu, Layout, Affix, Button, Space } from 'antd';
import styles from '../styles/Main.module.css';
// store
import useGeneralStore from '@/lib/slices/useGeneralSlice';
import Link from 'next/link';

const Navbar = () => {
  const menuItems = useGeneralStore((state) => state.menuItems);
  const [side, setSide] = useState(20);

  // basic nav styles
  const navTextStyles = {
    fontWeight: 'bold',
    fontSize: 15,
  };

  return (
    <React.Fragment>
      <Menu className={styles.sidebar} mode="vertical">
        {menuItems.map((item, index) => {
          const { label, path, icon } = item;
          return (
            <Menu.Item key={index} style={navTextStyles}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Link href={path}>{label}</Link>
                <Space>{icon}</Space>
              </div>
            </Menu.Item>
          );
        })}
      </Menu>
    </React.Fragment>
  );
};

export default Navbar;
