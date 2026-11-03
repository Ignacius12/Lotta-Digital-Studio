import { useRestaurant } from '../content'
import { SectionHeading } from './ui/SectionHeading'
import { useInView } from '../../../hooks/useInView'

export function Gallery() {
  const { c, gallery } = useRestaurant()
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="galeria"
      ref={ref}
      aria-labelledby="gallery-heading"
      className="section-pad bg-cream"
    >
      <div
        className={`container-page transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <SectionHeading eyebrow={c.gallery.eyebrow} title={c.gallery.title} id="gallery-heading" />

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:mt-16 lg:gap-5">
          {gallery.map((image, index) => (
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
