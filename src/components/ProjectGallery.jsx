import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectGallery({ images, alt, heightClass = "h-44" }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const hasMany = count > 1;

  const go = (e, next) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex(((next % count) + count) % count);
  };

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus-ring";

  return (
    <div className={`relative w-full overflow-hidden ${heightClass}`}>
      <img
        src={images[index]}
        alt={hasMany ? `${alt} screenshot ${index + 1} of ${count}` : alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />

      {hasMany && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(e) => go(e, index - 1)}
            className={`${arrowClass} left-2`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(e) => go(e, index + 1)}
            className={`${arrowClass} right-2`}
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                onClick={(e) => go(e, i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-4 bg-[var(--color-cyan)]"
                    : "w-1.5 bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
