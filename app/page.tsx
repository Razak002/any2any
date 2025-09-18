import Dropzone from '@/components/dropzone';

export default function Home() {
    return (
        <div className="w-full space-y-8 sm:space-y-12 mt-20 md:space-y-16">
            <div className="space-y-4 sm:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight">
                    Convert Anything. Anytime. For Free.
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 2xl:px-52 leading-relaxed">
                    Meet <span className="font-medium">Any2Any</span>, your all-in-one file transformer.
                    Seamlessly switch between image, audio, and video formats in seconds.
                    No limits. No fees. Just fast, secure, and effortless conversions at your fingertips.
                </p>
            </div>
            <div className="w-full">
                <Dropzone />
            </div>
        </div>
    );
}