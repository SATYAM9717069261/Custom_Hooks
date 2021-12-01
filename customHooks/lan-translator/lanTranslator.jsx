import { useEffect, useRef } from "react";
function Translator({ children }) {
    const tagid=useRef(null)
    useEffect(()=>{translate(tagid.current.children[0])},[tagid])
    return (<>
        <div>
            <span>English</span><br />
            <span>Hindi</span>
        </div>
        <div ref={tagid}>
            {children}
        </div>
    </>)
}

function translate(tagid){
    console.log("Tag= > ", tagid);
    for(let child in tagid.children){
        console.log("Child=> ",child)
    }
    // console.log(tagid.current.innerText)
    // console.log(tagid.current.children[0].children[0])
}

export default Translator;