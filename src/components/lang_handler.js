import { useParams } from "react-router-dom";
import en from '../langs/en.json'
import hu from '../langs/hu.json'

const translations = { hu, en };

export function LangHandler() {
    const { lang } = useParams()
    const languages = ["hu", "en"];

    
    if (
        lang === undefined
        || 
        !languages.includes(lang)
        ) {
        document.location.href = '/#/en'
        document.location.reload()
    }

    return ( lang )
}

export function __(key) {
    const lang = LangHandler();
    return translations[lang][key] || key;
}

export default LangHandler;