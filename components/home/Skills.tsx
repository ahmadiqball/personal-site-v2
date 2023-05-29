import Image from "next/image";

const skills = [
  "html-1.svg",
  "css-3.svg",
  "logo-javascript.svg",
  "typescript.svg",
  "react-2.svg",
  "nextjs-icon-svgrepo-com.svg",
  "vue-js-1.svg",
  "git-icon.svg",
  "bootstrap-5-1.svg",
  "material-ui-1.svg",
  "tailwind-css-2.svg",
  "nodejs-icon.svg",
  "python-5.svg",
  "tensorflow-2.svg",
  "New_Power_BI_Logo.svg",
  "visual-studio-code-1.svg",
  "figma-1.svg",
  "adobe-photoshop-2.svg",
];

export default function Skills() {
  return (
    <section>
        <h1 className="text-2xl text-bgDark dark:text-white font-bold pb-5">Skills</h1>
        <div className="grid grid-cols-5 items-center justify-center gap-4 sm:grid-cols-7 lg:grid-cols-10">
          {skills.map((item, index) => (
            <div className="relative h-8 w-8 grayscale invert hover:grayscale-0 hover:invert-0" key={index}>
              <Image src={"/skills/" + item} alt={item} fill />
            </div>
          ))}
        </div>
    </section>
  );
}
