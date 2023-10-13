function About() {
    return (
        <>
            <h1 className="mb-5">About</h1>
            <form className="bg-slate-400 p-5 rounded w-fit flex flex-col gap-5 m-auto">
                <h2 className="font-medium font-s text-xl">Form</h2>
                <input className="block h-10 rounded"></input>
                <button type="button" className="bg-slate-800 text-white">Click me!</button>
            </form>
        </>
    )
}

export default About;