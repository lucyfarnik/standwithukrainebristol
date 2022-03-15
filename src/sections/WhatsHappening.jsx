import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Link from '../Link';
import 'react-vertical-timeline-component/style.min.css';

const blue = '#0057B7';
const red = '#DA291C';
const black = '#000000';

const flagUA = '\uD83C\uDDFA\uD83C\uDDE6';
const flagRU = '\uD83C\uDDF7\uD83C\uDDFA';
const flagEU = '\uD83C\uDDEA\uD83C\uDDFA';
const helmet = '\uD83E\uDE96';
const pen = '\u2712\uFE0F';
const scroll = '\uD83D\uDCDC';
const death = '\uD83D\uDC80';

const Event = ({ date, icon, color, heading, text }) => (
    <VerticalTimelineElement
        contentStyle={{ background: color }}
        contentArrowStyle={{ borderRight: `7px solid ${color}` }}
        textClassName="text-white"
        date={date}
        dateClassName="timeline-lg:text-black"
        iconClassName="text-center text-3xl timeline-lg:text-4xl timeline-lg:pt-2"
        iconStyle={{ background: color }}
        icon={<span>{icon}</span>}
    >
        <h3 className="vertical-timeline-element-title">{heading}</h3>
        {typeof text === 'string' ? <p>{text}</p> : text}
    </VerticalTimelineElement>
)

export default function WhatsHappening() {
    return (
        <div>
            <h1>What's Happening in Ukraine?</h1>
            <p className="mb-4">
                A TLDR for those that haven't been following the news
            </p>
            <VerticalTimeline lineColor="#ccc">
                <Event
                    date="1991 - present"
                    icon={flagUA}
                    color={blue}
                    heading="Independence"
                    text="Ukraine has been an independent European country for over 3 decades."
                />
                <Event
                    date="1994"
                    icon={flagRU}
                    color={red}
                    heading="Russia acknowledges independence"
                    text="In 1994 Russia signed a document acknowledging Ukrainian independence, and its territorial integrity (including Crimea)."
                />
                <Event
                    date="2014"
                    icon={flagEU}
                    color={blue}
                    heading="EU and NATO"
                    text="The country is a democracy, and since 2014 it's been aligning with the West, since that's what its people wanted. It was even considering joining the EU and NATO."
                />
                <Event
                    date="2014"
                    icon={flagRU}
                    color={red}
                    heading="Crimea"
                    text="Putin didn't like that, so in response he sent his troops in disguise into Crimea and violently annexed it into Russia."
                />
                <Event
                    date="March 2021"
                    icon={helmet}
                    color={red}
                    heading="Army to the border"
                    text={
                        <>
                            <p>
                                Then in March 2021 he started sending troops
                                to the Ukrainian border. The world was alarmed,
                                but he said they were only there for "exercises"
                            </p>
                            <p>
                                This excuse which became completely transparent
                                once they started setting up field hospitals
                                next to the border, which clearly shows they
                                knew there would be bloodshed.
                            </p>
                        </>
                    }
                />
                <Event
                    date="July 2021"
                    icon={pen}
                    color={red}
                    heading="Putin's essay"
                    text={
                        <p>
                            In the middle of all this field, Putin released a{' '}
                            <Link to="https://en.wikipedia.org/wiki/On_the_Historical_Unity_of_Russians_and_Ukrainians">
                                5000-word essay
                            </Link> claiming Ukraine isn't a real country.
                        </p>
                    }
                />
                <Event
                    date="December 2021"
                    icon={scroll}
                    color={red}
                    heading="Putin's demands"
                    text={
                        <>
                            <p>
                                He also released a{' '}
                                <Link to="https://www.theguardian.com/world/2021/dec/17/russia-issues-list-demands-tensions-europe-ukraine-nato">
                                    list of demands to the West
                                </Link> and said they'd need to be met in order to lower tensions.
                            </p>
                            <p>
                                He was essentially demanding that independent
                                Eastern European countries stop being allies
                                with the US.
                            </p>
                            <p>
                                The demands were completely ridiculous, and he knew this.
                                They were clearly designed so he could later say
                                "we tried negotiating, we had no choice".
                            </p>
                        </>
                    }
                />
                <Event
                    date="24 February 2022"
                    icon={death}
                    color={black}
                    heading="Invasion"
                    text={
                        <>
                            <p>
                                Then on 24 February at 6 am, he launched a
                                full-scale invasion of Ukraine. They've been
                                relentlessly bombing civilians ever since.
                            </p>
                            <p>
                                Tens of thousands have already died, and
                                millions have fled into other countries.
                                Countless homes have been destroyed.
                            </p>
                        </>
                    }
                />
                <Event
                    date="Right now"
                    icon={flagUA}
                    color={blue}
                    heading="The fight"
                    text="The Ukrainian people are fighting for their survival, and they need all the help they can get."
                />
            </VerticalTimeline>
            <div className="my-6">
                <p>
                    But this isn't just about one country or one war. It's about
                    a principle - the principle that war cannot be worth it.
                    It's a principle that's been in place since WW2, and it is
                    now being put into question.
                </p>
                <p>
                    If this war ends up being worth it for Putin, we'll see
                    countless other wars over the next few decades. We need to
                    make him regret this, and to show everyone who's watching
                    that war is never the answer.
                </p>
            </div>
        </div>
    )
}