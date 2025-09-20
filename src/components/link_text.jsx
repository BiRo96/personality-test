import LangHandler from "./lang_handler";

function LinkText(params) {
    let lang = LangHandler();
    
    return(
        <>
            <a 
            href={"#/" + lang + "/" + (params.link ?? "") } 
            { ...params.active ? 'aria-current="page"' : ''} 
            >
                {params.text ?? ""}
            </a>
        </>
    )
}

export default LinkText;