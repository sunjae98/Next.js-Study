import Image from "next/image";
import { faker } from "@faker-js/faker";

export default function Slide() {
  const images = Array.from({ length: 36 }, (_, index) => ({
    id: index,
    src: faker.image.urlLoremFlickr(),
    alt: faker.lorem.word(),
  }));

  return (
    <div className="w-full h-screen flex justify-center items-center overflow-x-hidden flex-col">
      <div className="flex w-full animate-loop gap-2 m-1">
        {images.slice(0, 18).map((image) => (
          <div className="flex-shrink-0" key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fixed"
              width={190}
              height={80}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full animate-loop-reverse gap-2 m-1">
        {images.slice(18, 36).map((image) => (
          <div className="flex-shrink-0" key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fixed"
              width={190}
              height={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
