import React, { useId } from 'react'
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currrencyDisabled = false,
  className = "",
}) {
  const amountId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2 flex flex-wrap justify-end text-left">
        <label htmlFor={amountId} className="text-black/40 mb-2 w-full">{label}</label>
        <input id={amountId} className="outline-none w-full bg-transparent py-1.5" type="number" placeholder="Amount" disabled={amountDisabled} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectedCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currrencyDisabled}>
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          {/* <option value="usd"> usd </option>   */}
        </select>
      </div>
    </div >
  );
}

export default InputBox;