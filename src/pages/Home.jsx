import LinkText from '../components/link_text';

function Home() {
    return (
        <div className='flex flex-col'>
            <div>
                Instant personality test
            </div>
            <div>
                <LinkText link="test" text="Start Test"/>
            </div>
        </div>
    )
}

export default Home;