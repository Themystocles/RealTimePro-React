import axios from "axios";
import { FetchItemModel } from "../models/FetchItensModel";
import React, { useState, useEffect } from "react";

const FetchItemServices = <T,>({ url, renderItem, title }: FetchItemModel<T>) => {
  const [item, setItem] = useState<T | null>(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    axios
      .get(url) 
      .then((response) => {
        setItem(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError("Erro ao carregar os dados!"); 
        setLoading(false); 
      });
  }, [url]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>{title}</h1>
      {renderItem(item)} 
    </div>
  );
};

export default FetchItemServices;
