const Home = ({}) => {
  return (
    <div className="w-full h-screen flex items-center justify-center text-black">
      <div className=" w-3/4 border-2 border-gray-300 rounded-2xl h-auto flex items-center justify-center p-2">
        <div className="w-full h-auto">
          <div className="w-full h-auto items-center justify-between flex px-2 bg-gray-100 rounded-2xl mb-5">
            <button className="w-1/4 mx px-2 py-2 border-transparent font-black rounded-2xl border-2 delay-50 hover:text-white hover:bg-indigo-500 text-gray-600">1</button>
            <button className="w-1/4 mx px-2 py-2 border-transparent font-black rounded-2xl border-2 delay-50 hover:text-white hover:bg-indigo-500 text-gray-600">2</button>
            <button className="w-1/4 mx px-2 py-2 border-transparent font-black rounded-2xl border-2 delay-50 hover:text-white hover:bg-indigo-500 text-gray-600">3</button>
            <button className="w-1/4 mx px-2 py-2 border-transparent font-black rounded-2xl border-2 delay-50 hover:text-white hover:bg-indigo-500 text-gray-600">4</button>
          </div>
          <div className="w-full h-auto items-center justify-center block px-2">
            <div className="w-full flex px-2 py-3 font-black bg-white rounded-2xl border-2 border-gray-300 outline-none" name="cars" id="cars" value="Audi" onChange={() => {}}>
              <div className="w-full">Oye</div>
              <div className="w-auto">|</div>
            </div>
            <div className="px-4 mt-2">
              <div className="w-full px-2 py-3 my-1 font-black bg-white rounded-2xl border-2 border-gray-300 outline-none" value="BMW"></div>
              <div className="w-full px-2 py-3 my-1 font-black bg-white rounded-2xl border-2 border-gray-300 outline-none" value="Audi"></div>
              <div className="w-full px-2 py-3 my-1 font-black bg-white rounded-2xl border-2 border-gray-300 outline-none" value="Toyota"></div>
            </div>
            <div className="py-5">
              <div className="w-full px-2 flex py-3 my-1 font-black bg-white rounded-2xl border-2 border-gray-300">
                <div className="w-full">Oye</div>
                <div className="w-auto text-gray-500">|</div>
              </div>
              <div className="w-full px-2 flex py-3 my-1 font-black bg-white rounded-2xl border-2 border-gray-300">
                <div className="w-full">Oye</div>
                <div className="w-auto text-gray-500">|</div>
              </div>
              <div className="w-full px-2 flex py-3 my-1 font-black bg-white rounded-2xl border-2 border-gray-300">
                <div className="w-full">Oye</div>
                <div className="w-auto text-gray-500">|</div>
              </div>
              <div className="w-full px-2 flex py-3 my-1 font-black bg-white rounded-2xl border-2 border-gray-300">
                <div className="w-full">Oye</div>
                <div className="w-auto text-gray-500">|</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
