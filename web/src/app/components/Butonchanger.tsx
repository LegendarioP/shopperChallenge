'use client'

import React, { useState, ChangeEvent } from 'react';
import csvToJson from 'csvtojson';
import { api } from '@/lib/api';

export default function ButtonUpload() {
  const [jsonContent, setJsonContent] = useState<any[]>([]);

  const convertCsvToJson = async (file: File) => {
    const fileContent = await file.text();
    const jsonArray = await csvToJson().fromString(fileContent);

    setJsonContent(jsonArray);
  };

  async function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (files) {
      const file = files[0];
      await convertCsvToJson(file);
    }
  }

  interface Product {
    code: number;
    sale_price: number
    
  }


  async function compareArchives() {
    try {
      const response = await api.get('/products');
  
      if (!jsonContent.length) {
        console.log('Nenhum arquivo carregado');
        return;
      }
  
      const idProd = jsonContent[0].product_code;
      const newPrice = jsonContent[0].new_price;
  
      if (!idProd) {
        console.log('A propriedade "product_code" não foi encontrada no objeto JSON.');
        return;
      }
      
      const matchingItem = response.data.find((item: Product) => item.code === idProd);
  
      if (matchingItem) {
        console.log('Item correspondente encontrado:', matchingItem);
  
        const updatedItem = { ...matchingItem, sales_price: `${newPrice}` };
  
        const updatedResponse = await api.put(`/products/${idProd}`, updatedItem);
  
        console.log('Item atualizado:', updatedResponse.data);

      } else {
        console.log('Nenhum item correspondente encontrado.');
      }
    } catch (error) {
      
      console.error('Ocorreu um erro:', error);
    }
  }


  return (
    <div>
      <button className="bg-black text-white p-6 rounded-full" onClick={compareArchives}>Validar</button>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {jsonContent.length > 0 && (
        <div>
          <h3>JSON Output:</h3>
          <pre>{JSON.stringify(jsonContent, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}