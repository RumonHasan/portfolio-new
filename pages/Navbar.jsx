import React, { useState } from 'react';
import { Menu, Layout, Affix } from 'antd';
import styles from '../styles/Main.module.css';
// store
import useGeneralStore from '@/lib/slices/useGeneralSlice';
import Link from 'next/link';

const Navbar = () => {
  const menuItems = useGeneralStore((state) => state.menuItems);
  const [side, setSide] = useState(20);

  return (
    <React.Fragment>
      <Menu className={styles.sidebar} mode="vertical">
        {menuItems.map((item, index) => {
          const { label, path } = item;
          return (
            <Menu.Item key={index} style={{ textAlign: 'center' }}>
              <Link href={path}>{label}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </React.Fragment>
  );
};

export default Navbar;
