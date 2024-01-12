export default function Card({title,children,...props}) {

    return (
        <div className="flex flex-col items-center justify-center border-solid border-2 border-sky-400 rounded m-8 p-5">
            <img className="my-2" {...props} />
            <h3 className="my-1">{title}</h3>
            <p className="my-1">{children}</p>
        </div>
    )
}