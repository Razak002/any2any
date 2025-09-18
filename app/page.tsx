import Dropzone from '@/components/dropzone';

export default function Home() {
    return (
        <div className="space-y-16 pb-8">
            <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-semibold text-center">
                    Convert Anything. Anytime. For Free.
                </h1>
                <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
                    Meet <span className="font-medium">Any2Any</span>  your all-in-one file transformer.
                    Seamlessly switch between image, audio, and video formats in seconds.
                    No limits. No fees. Just fast, secure, and effortless conversions at your fingertips.
                </p>
            </div>

            <Dropzone />
        </div>
    );
}
