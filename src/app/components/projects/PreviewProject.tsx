import Image from "next/image";

export default function PreviewProject({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    return (
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
            />
        </div>
    );
}
