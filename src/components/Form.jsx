import React, { useState } from "react";

export default function Form() {
  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [numberPeople, setNumberPeople] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      destination,
      checkin,
      checkout,
      numberPeople,
    });
  };

  return (
    <div className="min-w-96 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Reserve sua Viagem</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Para onde você vai?
          </label>
          <input
            type="text"
            id="destination"
            placeholder="Para onde você vai?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="checkin"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Check-in
          </label>
          <input
            type="date"
            id="checkin"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="checkout"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Check-out
          </label>
          <input
            type="date"
            id="checkout"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="numberPeople"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Número de pessoas
          </label>
          <input
            type="number"
            id="numberPeople"
            value={numberPeople}
            onChange={(e) => setNumberPeople(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
