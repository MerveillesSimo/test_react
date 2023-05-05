import { useState, useEffect } from 'react';

interface Data  {
    nom: string;
    prenom: string;
    pseudo: string;
    cni:File | null
  }



  export const MyRequest = async(data:Data) => {
  const request: RequestInit = {
    method: 'POST',
    redirect: 'follow'
  }
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/?userId="+ 1 + "&title=" +data.nom + "&body="+data.prenom+", request");
  const data_json = await response.json();
  return data_json
  }

