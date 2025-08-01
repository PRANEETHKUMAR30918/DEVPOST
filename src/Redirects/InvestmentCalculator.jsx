import React, { useState } from "react";

const MutualFundCalculator = () => {
  // Store inputs as strings to allow empty input
  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("12"); // default 12%
  const [years, setYears] = useState("10");

  // Convert inputs safely to numbers for calculation
  const principal = parseFloat(amount) || 0;
  const rate = parseFloat(interestRate) / 100 || 0;
  const time = parseFloat(years) || 0;

  // Compound interest calculation: A = P(1 + r)^t
  const maturityAmount = principal * Math.pow(1 + rate, time);
  const interestEarned = maturityAmount - principal;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-md font-sans">
      <h2 className="text-2xl font-bold mb-4 text-center">Mutual Fund Calculator</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="amount">
          Investment Amount (₹)
        </label>
        <input
          id="amount"
          type="number"
          placeholder="Enter amount"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={amount}
          onChange={(e) => {
            const val = e.target.value;
            // Allow only digits and decimal or empty string
            if (val === "" || /^\d*\.?\d*$/.test(val)) {
              setAmount(val);
            }
          }}
          min="0"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium" htmlFor="interestRate">
          Expected Annual Return Rate: {interestRate}%
        </label>
        <input
          id="interestRate"
          type="range"
          min="0"
          max="30"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium" htmlFor="years">
          Investment Period (Years): {years}
        </label>
        <input
          id="years"
          type="range"
          min="1"
          max="30"
          step="1"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-md text-center">
        <p className="text-lg">
          <span className="font-semibold">Maturity Amount:</span>{" "}
          ₹{maturityAmount.toFixed(2)}
        </p>
        <p className="text-gray-700">
          Interest Earned: ₹{interestEarned.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MutualFundCalculator;
