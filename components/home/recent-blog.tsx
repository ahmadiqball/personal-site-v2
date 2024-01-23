export default function RecentBlog() {
  return (
    <section className="mt-16">
      <h4 className="text-2xl text-bgDark dark:text-white font-bold pb-5">
        Blog
      </h4>
      <div className="divide-y divide-gray-300 dark:divide-gray-100 ">
        {[0, 1, 2].map((item) => (
          <div key={item} className="py-3">
            <h4 className="text-xl text-bgDark dark:text-white font-bold pb-1">
              Upcoming Tittle
            </h4>
            <p className="text-md text-gray-500 dark:text-gray-400">Jan 1, 2023</p>
            <p className="pt-1 line-clamp-2 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
