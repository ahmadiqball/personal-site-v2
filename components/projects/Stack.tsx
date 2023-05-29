import Image from "next/image";

const stacks = [
    { stack: 'html', icon: 'html-1.svg' },
    { stack: 'css', icon: 'css-3.svg' },
    { stack: 'javascript', icon: 'logo-javascript.svg' },
    { stack: 'typescript', icon: 'typescript.svg' },
    { stack: 'reactjs', icon: 'react-2.svg' },
    { stack: 'nextjs', icon: 'nextjs-icon-svgrepo-com.svg' },
    { stack: 'vuejs', icon: 'vue-js-1.svg' },
    { stack: 'git', icon: 'git-icon.svg' },
    { stack: 'bootstrap', icon: 'bootstrap-5-1.svg' },
    { stack: 'materialui', icon: 'material-ui-1.svg' },
    { stack: 'tailwind', icon: 'tailwind-css-2.svg' },
    { stack: 'nodejs', icon: 'nodejs-icon.svg' },
    { stack: 'python', icon: 'python-5.svg' },
    { stack: 'tensorflow', icon: 'tensorflow-2.svg' },
    { stack: 'powerbi', icon: 'New_Power_BI_Logo.svg' },
    { stack: 'figma', icon: 'figma-1.svg' },
    { stack: 'photoshop', icon: 'adobe-photoshop-2.svg' },
    { stack: 'firebase', icon: 'firebase.svg' },
    { stack: 'recoiljs', icon: 'recoiljs.svg' },
    { stack: 'jquery', icon: 'jquery.svg' },
    { stack: 'directus', icon: 'directus.svg' },
    { stack: 'reduxjs', icon: 'reduxjs.svg' },
    { stack: 'nextauth', icon: 'next-auth.svg' },
    { stack: 'jwt', icon: 'jwt.svg' },
    { stack: 'mongodb', icon: 'mongodb.svg' },
    { stack: 'keras', icon: 'keras.svg' },
    { stack: 'sklearn', icon: 'scikit-learn.svg' },
    { stack: 'pandas', icon: 'pandas.svg' },
    { stack: 'matplotlib', icon: 'matplotlib.svg' },
    { stack: 'matlab', icon: 'matlab.svg' },
    { stack: 'graphqlapi', icon: 'graphqlapi.svg' },
    { stack: 'restapi', icon: 'restapi.svg' },
    { stack: 'cpp', icon: 'cpp.svg' },
  ];

export default function Stack({ stack } : { stack: string }) {
    const data = stacks.filter(item => item.stack === stack)

    if (data.length === 0) return null
    
    return(
        <span>
            <Image src={`/skills/${data[0].icon}`} alt={data[0].stack} className="h-6 w-6" width={50} height={50}/> 
        </span>
    )
}