export default function Link({ to, className, children }) {
    return (
        <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline ${className}`}
        >
            {children}
        </a>
    )
}