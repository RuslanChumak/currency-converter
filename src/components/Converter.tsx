import React, { useState } from 'react';
import { Rates } from '../services/currency';
import { InputSelect } from './InputSelect';

type P = {
  rates?: Rates
}

type InputSelectValues = {
  rate: number;
  currency: string;
}

type Values = {
  [x: string]: InputSelectValues
}

const defaultValues = {
  from: { rate: 0, currency: 'uah' },
  to: { rate: 0, currency: 'usd' }
};

export const Converter: React.FC<P> = ({ rates }) => {
  const [values, setValues] = useState<Values>(defaultValues);

  const handleChange = (key: 'to' | 'from') => (rate: number = 0, currency: string) => {
    if (!rates) return null;
    const anotherKey = key === 'from' ? 'to' : 'from';
   
    setValues({
      [key]: { rate, currency },
      [anotherKey]: {
        ...values[anotherKey],
        rate: +(rate / rates[currency] * rates[values[anotherKey].currency]).toFixed(2)
      }
    });
  }

  return (
    <div className="converter">
      <InputSelect
        label="Give"
        onChange={handleChange('from')}
        disabledCurrency={values.to.currency}
        {...values.from}
      />
      <InputSelect
        label="Receive"
        onChange={handleChange('to')}
        disabledCurrency={values.from.currency}
        {...values.to}
      />
    </div>
  );
}
