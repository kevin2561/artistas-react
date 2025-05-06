export const CardMenu = ({ item, index }) => {
    return (
        <section className="group relative flex items-center p-3 bg-white dark:bg-black/20 rounded-lg mb-3 cursor-pointer
                            hover:bg-white hover:scale-105 sm:hover:scale-110 transition-all duration-500 hover:translate-0
                             sm:hover:translate-x-4 border-2 border-solid border-white dark:border-black/15">

            <div className="w-25 h-55 rounded-lg overflow-hidden mr-4">
                <img className="w-full h-full object-cover" src={item.img} alt="" />

            </div>
            <div>
                <h2 className="absolute -right-40 text-green-500  text-5xl font-bold transition-all duration-500 opacity-0 hover:right-5
                  group-hover:opacity-100 group-hover:right-20">
                    <small className="opacity-[20px]">#</small>
                    {index + 1}
                </h2>
                <h4 className="text-gray-950 group-hover:text-black text-lg font-semibold dark:text-white">
                    {item.name}
                </h4>
                <p className="text-sm text-black/50 dark:text-white/50 group-hover:text-black">{item.description}</p>
            </div>
        </section>
    )


}