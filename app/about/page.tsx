export default function About() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
      <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 text-sm sm:text-base md:text-lg text-muted-foreground">
        
        {/* Header Section */}
        <header className="text-center space-y-3 sm:space-y-4 md:space-y-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Any2Any Convert Anything, Instantly
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fast, private, and totally free — Any2Any gives creators and teams the tools to convert images, audio, and video with zero friction.
          </p>
        </header>

        {/* Features Grid */}
        <section className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border hover:shadow-sm transition-shadow">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">🖼️</span>
              Image Conversion
            </h2>
            <p className="leading-relaxed">
              Resize, crop, compress, and change formats — JPEG, PNG, WEBP and more. Smart presets make common tasks one-click simple, and advanced options give full control when you need it.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border hover:shadow-sm transition-shadow">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">🎵</span>
              Audio Transformation
            </h2>
            <p className="leading-relaxed">
              Transcode between MP3, WAV, AAC and others, adjust bitrate, trim silence, or merge tracks — perfect for podcasts, music, and sound design.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border hover:shadow-sm transition-shadow">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">🎥</span>
              Video Metamorphosis
            </h2>
            <p className="leading-relaxed">
              Transcode, crop, stitch, and export in formats and resolutions for web, mobile, and social platforms. Quick presets and custom export settings both supported.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border hover:shadow-sm transition-shadow">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">⚙️</span>
              Automation & Batch
            </h2>
            <p className="leading-relaxed">
              Process multiple files at once with batch conversion and reusable presets — save time on repetitive workflows and scale effortlessly.
            </p>
          </div>
        </section>
        <section className="space-y-4 sm:space-y-5 md:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground text-center sm:text-left">
            Why Any2Any?
          </h2>
          <div className="grid gap-3 sm:gap-4 md:gap-5 sm:grid-cols-2">
            <div className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-muted/30">
              <span className="text-lg sm:text-xl">✨</span>
              <div>
                <strong className="text-foreground">Unlimited & Free:</strong>
                <span className="block sm:inline sm:ml-1">No paywalls, no watermarks — convert as many files as you need.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-muted/30">
              <span className="text-lg sm:text-xl">🔒</span>
              <div>
                <strong className="text-foreground">Private by Design:</strong>
                <span className="block sm:inline sm:ml-1">Files are encrypted in transit and removed from our servers after processing.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-muted/30">
              <span className="text-lg sm:text-xl">🌐</span>
              <div>
                <strong className="text-foreground">Accessible Anywhere:</strong>
                <span className="block sm:inline sm:ml-1">Works on desktop and mobile — no installs required.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-muted/30">
              <span className="text-lg sm:text-xl">👥</span>
              <div>
                <strong className="text-foreground">Beginner-Friendly:</strong>
                <span className="block sm:inline sm:ml-1">Intuitive interface with advanced options for power users.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4 sm:space-y-5 md:space-y-6 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
            Getting Started
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto sm:mx-0">
            Drag & drop your files, pick a preset (or set custom options), and hit Convert. That's it. For repeat tasks, save a preset and automate conversions in seconds.
          </p>
        </section>

        <section className="space-y-4 sm:space-y-5 md:space-y-6 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
            Security & Support
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto sm:mx-0">
            We treat your files with care — encrypted uploads, temporary storage, and permanent deletion after processing. Need help? Reach out via our support page for fast assistance.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-6 sm:pt-8 md:pt-10 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Any2Any — Powerful conversions, zero hassle.
            </p>
            <div className="flex items-center justify-center sm:justify-end gap-4 text-xs sm:text-sm">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">v1.0</span>
            </div>
          </div>
        </footer>
        
      </div>
    </div>
  )
}