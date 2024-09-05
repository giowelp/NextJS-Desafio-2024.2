import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="bg-background flex items-center justify-center w-full py-6 px-2">
      <div className="relative w-full max-w-[650px]"> 
        <Image 
          src="/images/vagabond.png" 
          alt="hero"
          width={600}  
          height={450}  
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
