export default function Card({title,children,...props}) {

    return (
        <div className="flex flex-col items-center">
            <img {...props} />
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}