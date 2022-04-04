import React from "react";

export const ListItem = ({date,price,quantity,conract}) => {
    const tarih = date.substring(0,10).split('-').reverse().join(".")
    const saat = date.substring(14,16)
    const toplamIslemMiktari = quantity/10
    const toplamIslemTutari = (price*quantity)/10
    const agirlikliOrtalamaFiyat =  Number(toplamIslemTutari) /Number(toplamIslemMiktari)  
  return (
    <tr>  
      <td>{tarih} {saat}:00</td>
      <td>{toplamIslemMiktari.toFixed(2)}</td>
      <td>₺ {toplamIslemTutari.toFixed(2)} </td>
      <td>{agirlikliOrtalamaFiyat.toFixed(2)}</td>  
    </tr>
  );
};
