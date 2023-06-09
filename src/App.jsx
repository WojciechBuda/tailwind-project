import { useState } from "react";
import rosol from "./img/rosol.jpg";
import pizza from "./img/pizza.jpg";
import schab from "./img/schab.jpg";

function App() {
  const [menuHidden, setMenuHidden] = useState(true);
  return (
    <div className="bg-no-repeat bg-cover bg-[url('./img/background.jpg')]">
      <div className="bg-slate-300 bg-opacity-10">
      
        <div className="text-slate-800 grid md:grid-cols-3">
          <div>
            <div className="md:col-span-1 md:flex md:justify-end">
              <nav className="text-right">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                    <a href="/" className=" text-red-800">
                      Gotuj z nami Januszami
                    </a>
                  </h1>
                  <div
                    className="px-4 cursor-pointer md:hidden"
                    onClick={() => setMenuHidden(!menuHidden)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </div>
                </div>
                <ul
                  className={`text-sm mt-6 ${
                    menuHidden ? "hidden" : ""
                  } md:block`}
                >
                  <li className="text-slate-700 font-bold py-1">
                    
                    <a
                      href="#"
                      className="flex px-4 justify-end border-r-4 border-lime-700 text-red-700"
                    >
                      <span>Strona główna</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 ml-2 text-red-700"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="#"
                      className="px-4 flex justify-end border-r-4 border-lime-600 text-red-700"
                    >
                      <span>Coś o nas</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 ml-2 text-red-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="py-1">
                    <a
                      href="#"
                      className="px-4 flex justify-end border-r-4 border-lime-600 text-red-700"
                    >
                      <span>Kontakt</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 ml-2 text-red-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <main className="px-16 py-6 md: col-span-2 bg-slate-200 bg-opacity-50">
            <div className="flex sm:justify-center md:justify-end">
              <a
                href="#"
                className="text-slate-700 button border-slate-700 md:border-2 hover:bg-primary hover:text-slate-50 transition ease-out duration-500 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-slate-700 ml-2 button border-slate-700 md:border-2 hover:bg-primary hover:text-slate-50 transition ease-out duration-500 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
              >
                Sign up
              </a>
            </div>
            <header>
              <h2 className="text-gray-600 text-5xl font-semibold flex justify-center">
                Przepisy
              </h2>
              <h3 className="text-3xl font-semibold animate-bounce flex justify-center"></h3>
            </header>
            <div>
              <h4 className="font-bold pb-2 mt-12 border-b border-gray-200 text-3xl">
                Najnowsze
              </h4>
              <div className="mt-8 grid lg:grid-cols-3 gap-10">
                <div className="card hover:shadow-2xl">
                  <img
                    className=" w-full h-32 sm:h-48 object-cover "
                    src={pizza}
                    alt="pizza"
                  />
                  <div className="m-4">
                    <span className="font-bold">Pizza</span>
                    <span className="block text-gray-500 text-sm">
                      Przepis wojtka
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline-block mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>90 min</span>
                  </div>
                </div>
                <div className="card hover:shadow-2xl">
                  <img
                    className=" w-full h-32 sm:h-48 object-cover "
                    src={rosol}
                    alt="rosół"
                  />
                  <div className="m-4">
                    <span className=" font-bold">Rosół</span>
                    <span className=" block text-gray-500 text-sm">
                      Przepis wojtka
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline-block mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>60 min</span>
                  </div>
                </div>

                <div className="card hover:shadow-2xl">
                  <img
                    className=" w-full h-32 sm:h-48 object-cover "
                    src={schab}
                    alt="schab"
                  />
                  <div className="m-4">
                    <span className="font-bold">Schabik</span>
                    <span className=" block text-gray-500 text-sm">
                      Przepis wojtka
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline-block mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>75 min</span>
                  </div>
                </div>
              </div>

              <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">
                TOP 3
              </h4>

              <div className="mt-8 text-center">
                <div>Coming soon...</div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="text-slate-600 bg-transparent button border-slate-700 border-2 hover:shadow-inner  transfrom hover:scale-125 hover:bg-opacity-50 hover:text-slate-50 transition ease-out duration-500 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500">
                Wiele więcej
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
