import { LoadingOutlined } from '@ant-design/icons';
import styles from './Loader.module.scss';

export default function Loader() {
    return (
        <div className={styles.overlay}>
            <LoadingOutlined className={styles.spinner}/>
        </div>
    )
}