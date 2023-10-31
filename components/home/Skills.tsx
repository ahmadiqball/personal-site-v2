import Image from "next/image";

export default function Skills({skills}: {skills: any}) {
  return (
    <section>
        <h1 className="text-2xl text-bgDark dark:text-white font-bold pb-5">Skills</h1>
        <div className="grid grid-cols-5 items-center justify-center gap-4 sm:grid-cols-7 lg:grid-cols-10">
          {skills.map((item: any) => (
            <div className="relative h-8 w-8 grayscale invert hover:grayscale-0 hover:invert-0" key={item._id}>
              <Image src={item.icon.asset.url} alt={item.icon.asset.originalFilename} fill />
            </div>
          ))}
        </div>
    </section>
  );
}
