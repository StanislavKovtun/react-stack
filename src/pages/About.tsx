import { SmileOutlined } from '@ant-design/icons';
import styles from './About.module.scss'

function About() {
    return (
        <>
            <h1 className={styles.header}>About</h1>
            <form className={styles.form}>
                <h2 className="font-medium font-s text-xl">Form</h2>
                <input className="block h-10 rounded"></input>
                <button type="button" className="bg-slate-800 text-white">Click me!</button>
                <div className='flex justify-center gap-5'>
                    <SmileOutlined className='animate-spin'/>
                    <SmileOutlined className='animate-bounce'/>
                    <SmileOutlined className='animate-pulse'/>
                    <SmileOutlined className='animate-ping'/>
                </div>
            </form>
        </>
    )
}

export default About;