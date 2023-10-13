import { SmileOutlined } from '@ant-design/icons';

function About() {
    return (
        <>
            <h1 className="mb-5">About</h1>
            <form className="bg-slate-400 p-5 rounded w-fit flex flex-col gap-5 m-auto hover:bg-opacity-90">
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