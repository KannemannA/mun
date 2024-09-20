function Test({children, amigo}) {
    console.log(children)
    return (
        <>
            <h1>
                {amigo}
            </h1>
            {children}
        </>
    )
}
export default Test;