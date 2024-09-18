import React from 'react';
import config from './../config';

const { converterCurrencies } = config;

type P = {
  label: string;
  onChange: (rate: number, currency: string) => void;
  rate: number;
  currency: string;
  disabledCurrency: string;
};

export const InputSelect: React.FC<P> = ({
  rate,
  label,
  currency,
  onChange,
  disabledCurrency
}) => {
  return (
    <div className="input-select">
      <div>{label}</div>
      <input
        type="number"
        min={0}
        value={rate}
        onChange={({ target: { value } }) => onChange(+value, currency)}
      />
      <select
        value={currency}
        onChange={({ target: { value } }) => onChange(rate, value)}
      >
        {converterCurrencies.map(currency => (
          <option
            key={currency}
            value={currency}
            disabled={disabledCurrency === currency}
          >
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
