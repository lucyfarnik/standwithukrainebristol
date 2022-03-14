export default function Link({ to, children }) {
    return (
        <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
        >
            {children}
        </a>
    )
}