import { useState } from 'react';
import { Affix, Input, Layout, Menu } from 'antd';
import styles from '../styles/Main.module.css';
import useGeneralStore from '@/lib/slices/useGeneralSlice';
const Header = () => {
  const { Header } = Layout;
  const headerItems = useGeneralStore((state) => state.headerItems);
  const [top, setTop] = useState(0);

  return (
    <Layout>
      <Affix offsetTop={top}>
        <Header className={styles.header}>
          <Menu mode="horizontal" theme="dark">
            <Input
              placeholder="Search site"
              maxLength={100}
              className={styles.input}
            />
            <div>
              {headerItems.map((item, index) => {
                return <Menu.Item key={index}>{item.label}</Menu.Item>;
              })}
            </div>
          </Menu>
        </Header>
      </Affix>
    </Layout>
  );
};
export default Header;
