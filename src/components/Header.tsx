import React from 'react';
import { LatestInfo } from '../services/currency';
import config from '../config';

const { preferredCurrencies } = config;

type P = {
  latestInfo?: LatestInfo | null;
}

export const Header: React.FC<P> = ({ latestInfo }) => {
  return (
    <div className="header">
      <div className="title">Currency converter</div>
      <div className="currencies">
        {latestInfo && preferredCurrencies.map((currency) => (
          <div key={currency} className="currency">{currency.toUpperCase()}: {(1 / latestInfo.uah[currency]).toFixed(2)}</div>
        ))}
      </div>
    </div>
  );
}
