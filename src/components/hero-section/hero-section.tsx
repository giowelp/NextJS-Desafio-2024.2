import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="bg-background flex items-center justify-center w-full py-6 px-2 ">
            <Image 
            src="/images/vagabond.png" 
            alt="hero" 
            width={736} 
            height={552} 
            className="h-full w-auto"
          />
        </div>
    )
}

