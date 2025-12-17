import { useState, useEffect } from 'react';

export const CURRENCIES = {
  CAD: { symbol: '$', name: 'CAD', country: 'Canada' },
  MAD: { symbol: 'dh', name: 'MAD', country: 'Maroc' },
  EUR: { symbol: '€', name: 'EUR', country: 'Europe' },
  USD: { symbol: '$', name: 'USD', country: 'International' }
};

export const PRICING = {
  free: {
    CAD: 0,
    MAD: 0,
    EUR: 0,
    USD: 0
  },
  pro: {
    CAD: 39,
    MAD: 299,
    EUR: 29,
    USD: 35
  },
  business: {
    CAD: 99,
    MAD: 899,
    EUR: 79,
    USD: 89
  }
};

const useGeolocation = () => {
  const [currency, setCurrency] = useState('CAD');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        // Détection via API de géolocalisation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        const countryCode = data.country_code;

        // Mappage pays -> devise
        if (countryCode === 'CA') {
          setCurrency('CAD');
        } else if (countryCode === 'MA') {
          setCurrency('MAD');
        } else if (['FR', 'BE', 'CH', 'LU', 'DE', 'IT', 'ES', 'PT', 'NL'].includes(countryCode)) {
          setCurrency('EUR');
        } else {
          setCurrency('USD');
        }
      } catch (error) {
        // Par défaut : CAD (votre marché principal)
        console.log('Geolocation detection failed, defaulting to CAD');
        setCurrency('CAD');
      } finally {
        setLoading(false);
      }
    };

    detectCurrency();
  }, []);

  const formatPrice = (plan) => {
    const price = PRICING[plan][currency];
    const symbol = CURRENCIES[currency].symbol;
    return `${price}${symbol}`;
  };

  return {
    currency,
    currencyInfo: CURRENCIES[currency],
    loading,
    formatPrice,
    setCurrency // Permet de changer manuellement
  };
};

export default useGeolocation;
