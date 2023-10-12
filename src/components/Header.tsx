
import { HomeTwoTone, SmileOutlined, ContactsOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { SetStateAction, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../App';

const Header = () => {

    const location = useLocation();
    const currentRoute = location.pathname.includes('/') && location.pathname.length > 1 ? location.pathname.replace('/', '') : routes.home;

    const [current, setCurrent] = useState(currentRoute);
    const onClick = (e: { key: SetStateAction<string> }) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <nav>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key={routes.home} icon={<HomeTwoTone />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key={routes.about} icon={<SmileOutlined />}>
                    <Link to={`/${routes.about}`}>About</Link>
                </Menu.Item>
                <Menu.Item key={routes.contacts} icon={<ContactsOutlined />}>
                    <Link to={`${routes.contacts}`}>Contacts</Link>
                </Menu.Item>
            </Menu>
        </nav>
    )
};

export default Header;