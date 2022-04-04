import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table} from "reactstrap";
import { ListItem } from "./components/ListItem.jsx";

function App() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false)

  useEffect(() => {
    axios
      .get(
        "https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history?endDate=2022-01-26&startDate=2022-01-26"
      )
      .then((response) => {
        setData(response.data.body.intraDayTradeHistoryList);
        setActive(true)
        //console.log(data && data[0].conract.includes('PH'))
      });
  }, [active]);

  return (
    <div className="App">
      <Table>
      <thead style= {{background:"green"}}>
      <tr style={{color:"white"}}>
          <th>Tarih</th>
          <th>Toplam İşlem Miktarı (MWh)</th>
          <th>Toplam İşlem Tutarı (TL)</th>
          <th>Ağırlıklı Ortalama Fiyat (TL / MWh)</th>
        </tr>
      </thead>
      <tbody>
        {
            active === true ?
            data.filter(item => item.conract.includes("PH")).map((item,id) => ( <ListItem key={id} {...item}/>)):'data bekleniyor'
        } 
      </tbody>
      </Table>
    </div>
  );
}
export default App;

