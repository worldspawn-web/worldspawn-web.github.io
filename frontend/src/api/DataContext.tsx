import { createContext, useContext, useState, useEffect } from 'react';

import profile from '../data/profile.json';

const DataContext = createContext(null);

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(profile));
    setData(data);
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
