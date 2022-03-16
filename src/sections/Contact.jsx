import Link from '../Link';

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <div className="md:flex md:justify-evenly mb-10">
                <div className="w-80 mb-10 mx-auto">
                    <h3>Stand With Ukraine Bristol</h3>
                    <div className="flex justify-around">
                        <Link to="https://fb.me/e/1kNwbl9k1">Facebook</Link>
                        <Link to="https://www.instagram.com/stand_with_ukraine.bristol/">
                            Instagram
                        </Link>
                        <Link to="mailto:info@standwithukrainebristol.co.uk">Email</Link>
                    </div>
                </div>
                <div className="w-80 mb-10 mx-auto">
                    <h3>Lucy Farnik</h3>
                    <p>Organizer, web designer</p>
                    <p className="text-sm">
                        If you find a problem with the website please get
                        in touch with me directly.
                    </p>
                    <div className="flex justify-center">
                        <Link to="mailto:lucyfarnik@gmail.com">
                            Email
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}