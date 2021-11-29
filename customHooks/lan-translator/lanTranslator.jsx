function Translator({children}) {
    console.log("Children=> ",children)
    return (<>
        <div>
            <span>English</span><br />
            <span>Hindi</span>
        </div>
        <div>
            {children}
        </div>
    </>)
}
export default Translator;