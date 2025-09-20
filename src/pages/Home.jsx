import {LangHandler, __} from '../components/lang_handler';
import LinkText from '../components/link_text';

function Home() {
    let lang = LangHandler();

    return (
        <div className='flex flex-col'>
            <div>
                {__("Instant personality test")}
            </div>
            <div>
                <LinkText link="test" text={__("Take the test")}/>
            </div>
        </div>
    )
}

export default Home;