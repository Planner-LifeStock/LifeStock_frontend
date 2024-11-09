import React, { createContext, useContext, useState, useEffect } from 'react';

const CompanyListingContext = createContext();

export const CompanyListingProvider = ({ createdAt, leastOperatePeriod, children }) => {
  const [listingDate, setListingDate] = useState(null);

  useEffect(() => {
    const calculateListingDate = () => {
      const creationDate = new Date(createdAt);
      const listingDate = new Date(creationDate);
      listingDate.setDate(creationDate.getDate() + leastOperatePeriod);
      return listingDate;
    };

    setListingDate(calculateListingDate());
  }, [createdAt, leastOperatePeriod]);

  return (
    <CompanyListingContext.Provider value={{ listingDate }}>
      {children}
    </CompanyListingContext.Provider>
  );
};