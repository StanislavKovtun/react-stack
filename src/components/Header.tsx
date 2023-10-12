import { HomeTwoTone, SmileOutlined, ContactsOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [current, setCurrent] = useState('home');
  const onClick = (e: { key: SetStateAction<string> }) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
    <nav>
     <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon= {<HomeTwoTone />}>
       <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="about" icon= {<SmileOutlined />}>
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="contacts" icon= {<ContactsOutlined />}>
        <Link to="/contacts">Contacts</Link>
      </Menu.Item>
     </Menu>
     </nav>
    </>   
  )
};
export default Header;