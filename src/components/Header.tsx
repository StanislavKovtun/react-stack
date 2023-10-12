
import { HomeTwoTone, SmileOutlined, ContactsOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
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

    const items: MenuProps['items'] = [
        {
            label: <Link to="/">Home</Link>,
            icon: <HomeTwoTone />,
            key: routes.home
        },
        {
            label: <Link to={routes.about}>About</Link>,
            icon: <SmileOutlined />,
            key: routes.about
        },
        {
            label: <Link to={routes.contacts}>Contacts</Link>,
            icon: <ContactsOutlined />,
            key: routes.contacts
        },
    ];

    return (
        <nav>
            <Menu items={items} onClick={onClick} selectedKeys={[current]} mode="horizontal" theme="light" />
        </nav>
    )
};

export default Header;