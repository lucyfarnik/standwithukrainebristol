import NavbarLink from "./NavbarLink";
import flag from "../assets/images/flag-90x60.webp";

export default function Navbar() {
    return (
        <nav className="fixed bg-white top-0 left-0 right-0 h-16 z-50 border-b-4 border-b-flag-top flex justify-evenly items-center">
            <NavbarLink to="home" text={<img src={flag} className="h-8 border-2 border-white rounded-lg" />} />
            <NavbarLink to="whats-happening" text="What's happening in Ukraine?" />
            <NavbarLink to="how-to-help" text="How can I help?" />
            <NavbarLink to="protest" text="Protest" />
            <NavbarLink to="contact" text="Contact" />
        </nav>
    )
}