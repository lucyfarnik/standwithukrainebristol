import Link from '../Link';

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <div className="flex justify-evenly mb-20">
                <div className="w-60">
                    <h3>Lucy Farnik</h3>
                    <p>Organizer, web designer</p>
                    <p className="text-sm">
                        If you find a problem with the website please get
                        in touch with me.
                    </p>
                    <div className="flex justify-around">
                        <Link to="mailto:lucyfarnik@gmail.com">Email</Link>
                        <Link to="https://www.instagram.com/lucyfarnik/">
                            Instagram
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}