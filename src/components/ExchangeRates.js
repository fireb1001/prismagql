import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const ExchangeRates = () =>{
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if(data && data.rates) {
    data.rates = data.rates.filter(item => item.currency === 'EGP' )
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default ExchangeRates;