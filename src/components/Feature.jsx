import { features } from "../constants"
const Feature = () => {
  return (
    <section className="relative mt-20  min-h-[100vh]">
        <div className="text-center">
            <span className="bg-neutral-900 text-[#3608FF] rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">features</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-tight" > <span className="bg-gradient-to-b from-neutral-50 to-neutral-950 text-transparent bg-clip-text">Made for Business Owners</span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20 ">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 ">
                <div className="flex">
                    <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-[#3608FF] justify-center items-center rounded-full">
                        {feature.icon}
                    </div>
                    <div>
                        <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                        <p className="text-md p-2 mb-20 text-neutral-500">
                            {feature.description}
                        </p>
                    </div>

                </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Feature