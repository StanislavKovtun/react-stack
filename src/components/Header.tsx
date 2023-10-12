import { HomeTwoTone, EditTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import { SetStateAction, useState } from 'react';
//import { Outlet, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const [current, setCurrent] = useState('h');
  const onClick = (e: { key: SetStateAction<string> }) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
     <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="h" icon= {<HomeTwoTone />}>
       <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="r" icon= {<EditTwoTone />}>
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="l" icon= {<CheckCircleTwoTone />}>
        <Link to="/contacts">Contacts</Link>
      </Menu.Item>
     </Menu>
     {/*<Outlet/>*/}
    </>
   
  )
};
export default Header;