import {Typography, Button} from "@material-tailwind/react";

export default function CarouselContent({top, title, imgSrc, alt, children,...props}) {
    let imageClasses = "h-full w-full object-cover"
    
    if (top){
        // imageClasses += " h-full"
    } else {
        // imageClasses += " h-10"
    }
    
    return (
        <div className="relative h-full w-full">
        <img src={imgSrc} alt={alt} className={imageClasses}/>                    
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
                <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                {title}
                </Typography>
                <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
                >
               {children}
                </Typography>
                <div className="flex justify-center gap-2">
                    <Button size="lg" color="white">
                        Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                        Gallery
                    </Button>
                </div>
            </div>
        </div>
    </div>
    )
}