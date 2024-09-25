import Dashboard from '../asset/indigo-dashboard.png'

const Hero = () => {
  return (
    <section className="flex flex-col items-center mt-4 lg:mt-10 ">
        <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-tight ">
            <span className="bg-gradient-to-b from-neutral-50 to-neutral-950 text-transparent bg-clip-text font-medium">Manage your business finances in one account</span>
        </h1>
        <p className="mt-5 leading-tight text-center text-lg text-neutral-500 max-w-4xl">Becoming financially accountable with indigo,
        tracking all your revenue on our dashboard and make good financial decision by integrating all your payment platforms.
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-[#3608FF] to-[#130649] py-3 px-4 mx-3 rounded-md">Create an account</a>
            <a href="#" className="border py-3 px-4 mx-3 rounded-md ">Sign In</a>
        </div>
        <div className="flex mt-10 justify-center">
          <img src={Dashboard} alt="indigo-dashboard"  />
        </div>
    </section>
  )
}

export default Hero