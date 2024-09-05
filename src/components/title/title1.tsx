type Title1Props = {
    title: string;
    subtitle: string;
}

export default function Title1({ title, subtitle }: Title1Props) {    
    return (
        <div className="flex flex-col justify-start items-center mb-6 text-center md:text-left">
            {subtitle && <span className="text-gray-500 text-sm font-helvetica mb-1">{subtitle}</span>}
            <h1 className="text-3xl font-bold font-helveticaRounded text-black">{title}</h1>
        </div>
    );
}
