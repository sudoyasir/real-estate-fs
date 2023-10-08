import React from "react";
import { useQueries, useQuery } from "react-query";
import { getAllProperties } from "../../utils/api";

export const useProperties = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    "allProperties",
    getAllProperties,
    { refetchOnWindowFocurs: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};
