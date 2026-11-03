import { usePub } from '../content'
import { useInView } from '../../../hooks/useInView'

export function PubGallery() {
  const pub = usePub()
  const copy = pub.c.gallery
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      aria-labelledby="pub-gallery-heading"
      className="pub-section bg-pub-bg"
    >
      <div
        className={`pub-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-left lg:max-w-4xl lg:text-center">
          <p className="pub-eyebrow lg:text-sm">{copy.eyebrow}</p>
          <h2
            id="pub-gallery-heading"
            className="mt-2 font-sans text-[2rem] font-bold text-pub-cream md:text-[2.5rem] lg:mt-3 lg:text-[3.5rem] xl:text-[4rem]"
          >
            {copy.title}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:mt-14 lg:gap-5">
          {pub.gallery.map((image, index) => (
            <div key={image.id} className={index === 0 ? 'col-span-2 row-span-2' : ''}>
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover ${index === 0 ? 'aspect-[4/5] md:aspect-square' : 'aspect-[3/4]'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
