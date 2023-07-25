import { NextPage } from "next";

const Tutorial: NextPage = () => {
  return (
    // <div className="bg-slate-400 py-20 px-10 flex flex-col space-y-5">
    <div className="py-20 px-10 grid gap-10 min-h-screen">
      <div className="bg-purple-700 p-6 rounded-2xl shadow-md">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              //   className="flex justify-between my-2 first:bg-purple-100 last:bg-purple-100 only:bg-red-200"
              className="flex justify-between my-2 odd:bg-purple-200 even:bg-purple-400"
            >
              <span className="text-gray-300">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((item, index) => (
            <li className="py-2 empty:hidden" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button
          className="mt-5 bg-gray-700 text-center p-2
         rounded-xl w-2/4 mx-auto
         hover:bg-black hover:text-red-500
         active:bg-yellow-500 focus:bg-blue-500
         "
        >
          Checkout
        </button>
      </div>
      <div className="bg-purple-700 overflow-hidden rounded-2xl shadow-md group">
        <div className="bg-gray-800 p-6 pb-14">
          <span className="text-2xl">Profile</span>
        </div>
        <div className="rounded-t-3xl p-6 bg-purple-700 relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-300">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="bg-red-600 h-24 w-24 rounded-full group-hover:bg-gray-300" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-300">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-ms text-gray-300">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-purple-700 p-10 rounded-2xl shadow-md">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅</span>
          <div className="space-x-3">
            <span>4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-300">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-5">
              <button className="w-5 h-5 rounded-full bg-red-500 focus:ring-2 ring-offset-2 ring-red-500 transition" />
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-blue-500 focus:ring-2 ring-offset-2 ring-blue-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="p-1.5 rounded-lg bg-red-500 flex justify-center items-center aspect-square w-10 font-medium text-xl">
                -
              </button>
              <span>1</span>
              <button className="p-1.5 rounded-lg bg-red-500 flex justify-center items-center aspect-square w-10 font-medium text-xl">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-gray-800 py-2 px-8 text-center text-xs rounded-md">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
