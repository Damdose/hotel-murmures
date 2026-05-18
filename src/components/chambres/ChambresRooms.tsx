import { RoomCard } from "./RoomCard";

const chambresImages = [
  "/images/murmures-1.jpeg",
  "/images/murmures-2.jpeg",
  "/images/murmures-3.jpeg",
];

const suiteImages = [
  "/images/murmures-8.jpeg",
  "/images/murmures-2.jpeg",
  "/images/murmures-3.jpeg",
];

export function ChambresRooms() {
  return (
    <section className="flex w-full flex-col items-center gap-14 px-6 pt-16 pb-24 md:px-10">
      <div
        className="flex w-full max-w-screen-xl flex-col items-start gap-10"
        id="section-rooms"
      >
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="flex w-full flex-col items-center md:w-1/2">
            <RoomCard
              images={chambresImages}
              title="Les chambres"
              features={[
                { label: "Réception 24h/24" },
                { label: "Conciergerie" },
                { label: "25m²" },
              ]}
              description="Bois vernis, palette chaude, lumière tamisée… Ces cinq chambres offrent des volumes généreux, ainsi qu'un écrin de douceur et discrétion. À chacune son étage. À chacune sa quiétude."
              href="/chambres"
              ctaLabel="Explorer les chambres"
            />
          </div>

          <div className="flex w-full flex-col items-center md:w-1/2">
            <RoomCard
              images={suiteImages}
              title="La suite"
              features={[
                { label: "Réception 24h/24" },
                { label: "Conciergerie" },
                { label: "35m²" },
              ]}
              description="Au dernier étage, baignée de lumière, La Suite dévoile sa façon de suspendre le temps. Comme un appartement parisien d'un autre temps revisité, découvrez ses qualités et ses secrets."
              href="/suite"
              ctaLabel="Explorer La Suite"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
