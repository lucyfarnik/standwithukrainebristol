import Link from '../Link';
import bristolWest from '../assets/images/bristol-west.jpg';

export default function HowToHelp() {
    return (
        <div className="mb-10">
            <h1>How can I help?</h1>
            <div>
                <h3>1. Contact your MP and let them know you care (2 minutes)</h3>
                <p>
                    How many people do you know that have ever emailed their MP?
                    No, their inbox isn't full, yes, they do have the time to
                    read all their emails - we've all done it and gotten replies.
                </p>
                <p>
                    The UK is one of the most powerful countries in the world.
                    We have enormous international influence, and our politicians
                    want to get re-elected.
                </p>
                <p>
                    If you live in this area your MP is Thangam Debbonaire.
                </p>
                <img src={bristolWest} className="mx-auto my-2" />
                <p>
                    Her email is{' '}
                    <Link to="mailto:thangam.debbonaire.mp@parliament.uk">
                        thangam.debbonaire.mp@parliament.uk
                    </Link>, her phone number is{' '}
                    <Link to="tel:0117 3790980">
                        0117 3790980
                    </Link> (this goes straight to voice mail so no need for
                    phone call anxiety).
                </p>
                <p>
                    Alternatively you can also call{' '}
                    <Link to="tel:0207 219 0974">
                        0207 219 0974
                    </Link>, that goes to her assistant so you can actually
                    talk to another human about it.
                </p>
                <p className="mt-4">
                    If you live somewhere else you can find your MP's email
                    and phone number{' '}
                    <Link to="https://members.parliament.uk/members/commons">
                        here
                    </Link>.
                </p>
            </div>
            <div className="mt-4">
                <h3>2. Donate to the Ukrainian army or the refugees</h3>
                <p>
                    You can donate to the army{' '}
                    <Link to="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi">
                        here
                    </Link> and to the refugees{' '}
                    <Link to="https://www.unrefugees.org.uk/take-action/how-to-help-ukraine/">
                        here
                    </Link>.
                </p>
            </div>
            <div className="mt-4">
                <h3>3. Come to the protest</h3>
                <p>
                    Scroll down for more information.
                </p>
            </div>
            <div className="mt-4">
                <h3>4. Let your friends know</h3>
                <p>
                    A lot of people don't know a lot about what's going on.
                    Letting the people around you know about it can make a big
                    difference. In person conversations are amazing, but you
                    can also just post about it on your story, or even send people
                    the link to this website.
                </p>
            </div>
        </div>
    )
}