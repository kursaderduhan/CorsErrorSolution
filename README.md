## Cors Hatası Çözümü
  Öncelikle sorun ne bundan biraz bahsetmek istiyorum, 
apiye xmlhttprequest yaptığımız zaman cors hatası ile karşılaşıyordum,
cors hatası nedir derseniz bir çeşit api nin size verimi iznim olmadan
alamazsın demesi. <br/> Peki bunu nasıl aşarız? apiden veri almak için onlarca çözüm var 
bunların en basiti ve bilineni `xmlhtttprequest` [bknz](https://www.w3schools.com/xml/xml_http.asp) <br/>
fetch, proxy ve bilinen onlarca method var benim denemelerim de bunların hiçbiri api yi geçemedi ve cors hatası aldı. <br/>
Peki nasıl aştık bunu? gelelim sorunumuza, bilinen bir diğer yöntemlerden olan `axios` paketi yardımıyla bu işi hallettik.<br/>
Sadece axios kurup geçemedik tabi ki yine cors hatası aldık, merak edenler olursa [axios](https://github.com/axios/axios). <br/>
Sorunumun çözümünü bu [google eklentisi](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) 
'nde buldum zor zamanlar için tavsiye ederim. <br/> Bu kod react ile geliştirilmiştir.

