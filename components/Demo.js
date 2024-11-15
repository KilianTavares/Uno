export default function Demo() {
  return (
    <section id="demo" className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 text-left md:mb-20 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
              Product in Action
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl">
              Here's a demo
            </h1>
            <p className="mx-auto text-xl md:w-2/3 md:text-2xl">
              Lightweight and practical in action.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Easy user experience
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent"></h2>
        <p className="mt-4 text-lg  lg:max-w-3xl font-semibold">
          Built to be learnt and taught seamlessly.
        </p>
        <img
          src="images/dashboard-sc.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                The latest and greatest.
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Modern day functionalities and guidelines
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Mighty quick.
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Prompt and fast functionality
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 mt-12 text-sm rounded-lg md:md-0 bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Product in Action
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Continuously exceeds expectations
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
          Uno embraces change and adapts to the needs of your business.
        </p>
        <img
          src="images/dashboard-sc2.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Defies the odds.
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Scaleable for all levels of business, Even at such a lightweight
                and compact production.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Creatively designed.
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                We aim to ensure an easy UI and UX for our clients.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Powerful.</h3>
              <p className="mt-1 text-gray-800 text-md">
                Servicing a broad range of industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
