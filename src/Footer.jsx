import Link from './Link';

export default function Footer() {
    return (
        <div className="bg-gray-700 text-white p-2 pt-8 w-full flex justify-evenly text-xs">
            <Link
                to="mailto:info@standwithukrainebristol.co.uk"
                className="w-56 text-center"
            >
                info@standwithukrainebristol.co.uk
            </Link>
            <Link to="https://github.com/lucyfarnik/standwithukrainebristol">
                Source code
            </Link>
            <div className="w-56" />
        </div>
    )
}