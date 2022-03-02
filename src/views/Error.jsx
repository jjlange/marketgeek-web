/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Error page
 **/

function Error() {
  return (
    <div className="bg-gray-800/90 flex text-white font-nunito h-screen">
      <div className="m-auto">
        <h1 className="text-6xl -mt-8">⚠️</h1>
        <h1 className="text-4xl font-black pt-8">Something went wrong</h1>
        <h3 className="text-xl pt-4">We're working on it and we'll get it fixed as soon as we can.</h3>
        <br /><br />
        <a href="/" class="text-xl p-2 font-semibold text- rounded-md px-6 py-2.5 bg-cyan-200  shadow-cyan-200 hover:bg-cyan-200/90 hover:shadow-cyan-200/90 transition ease-in-out duration-400">Reload Page</a>

        <div class="text-gray-100 p-4 mt-6">
          <p>Copyright © 2022 - <a href="/" class="text-gray-100">MarketGeek</a>. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
export default Error;
