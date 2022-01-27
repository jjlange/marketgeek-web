import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-gray-800/90 flex text-gray-100 font-nunito h-screen">
      <div className="m-auto">
        <h1 class="text-6xl -mt-8">⚠️</h1>
        <h1 class="text-4xl font-black pt-8">Something went wrong</h1>
        <h3 class="text-xl pt-4">We're working on it and we'll get it fixed as soon as we can.</h3>
        <br /><br />
        <a href="/" class="text-xl p-2 font-semibold text-gray-800 rounded-md px-4 py-2 bg-gray-200 shadow-lg shadow-gray-300/50 hover:bg-gray-100 transition ease-in-out duration-400">Reload Page</a>

        <div class="text-gray-100 p-4 mt-16">
          <p>Copyright © 2022 - <a href="/" class="text-gray-100">MarketGeek</a>. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
export default App;
