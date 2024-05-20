import Image from "next/image";
import { faker } from "@faker-js/faker";

export default function Slide() {
  const images = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    src: faker.image.urlLoremFlickr(),
    alt: faker.lorem.word(),
  }));

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex">
        {images.slice(0, 6).map((image) => (
          <div key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={192}
              height={80}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
