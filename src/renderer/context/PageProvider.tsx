import React, { createContext, useState } from 'react';

interface PageProps {page: string;setPage: (page: string) => void;}
export const PageContext = createContext<PageProps>(undefined);
export const PageProvider = ({children}: {children: React.ReactNode}) => {
  const [page, setPage] = useState("start");
  const value = {page,setPage};
  return(
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  )
}