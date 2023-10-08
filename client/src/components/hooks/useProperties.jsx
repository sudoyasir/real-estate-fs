import React from "react";
import { useQueries } from "react-query";

export const useProperties = () => {
  const { data, isError, isLoading, refetch } = useQueries(
    "allProperties",
    getAllProperties(),
    { refetchOnWindowFocurs: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};
