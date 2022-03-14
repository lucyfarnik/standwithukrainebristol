import { Link } from 'react-scroll'

export default function NavbarLink({ to, text }) {
    return (
        <Link
            to={to}
            className="h-12 transition-colors duration-300 cursor-pointer hover:bg-flag-top hover:text-white flex items-center p-3 rounded-xl"
            activeClass="text-flag-top"
            spy
            smooth
            offset={-68}
            duration={500}
        >
            {text}
        </Link>
    )
}