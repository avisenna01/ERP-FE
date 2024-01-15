export default function LandingPageBlock({title, src, alt, children}){
    return (
        <div className="flex justify-around items-center">
            <img className="h-1/2 m-5" src={src} alt={alt}/>
            <div className="m-5">
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    );
}