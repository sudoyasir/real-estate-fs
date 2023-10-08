import React from "react";
import { useQueries, useQuery } from "react-query";
import { getAllProperties } from "../../utils/api";

export const useProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allProperties",
    getAllProperties,
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};
