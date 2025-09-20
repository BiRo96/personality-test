function LinkText(params) {
    return(
        <>
            <a 
            href={"#/" + (params.link ?? "") } 
            { ...params.active ? 'aria-current="page"' : ''} 
            >
                {params.text ?? ""}
            </a>
        </>
    )
}

export default LinkText;