import Image from 'next/image';

export function Skills({ skills }: { skills: any }): JSX.Element {
  return (
    <section>
      <h1 className="text-2xl text-bgDark dark:text-white font-bold pb-5">
        Skills
      </h1>

      <div className="flex flex-wrap gap-8 bg-white dark:bg-bgDark bg-opacity-20 dark:bg-opacity-30 p-8 rounded-xl">
        { skills.map((item: any) => (
          <div
            className="relative h-8 w-8 grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-300 cursor-pointer"
            key={ item._id }
          >
            <Image
              alt={ item.icon.asset.originalFilename }
              fill
              src={ item.icon.asset.url }
            />
          </div>
        )) }
      </div>
    </section>
  );
}
