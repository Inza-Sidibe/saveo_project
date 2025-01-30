'use client'
import React, { useEffect, useState } from 'react'
import Loader from '@/components/Loader'

function loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    fakeDataFetch();
  }, []);

  return isLoading ? (
  <Loader />
   ) : (
     <h1> Salut</h1>);
}

export default loading;
