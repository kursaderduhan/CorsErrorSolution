## Cors Hatası Çözümü
  Öncelikle cors hatası nedir? kısaca apiden veriyi alamamak. 
apiye xmlhttprequest yaptığımız zaman cors hatası ile karşılaşıyordum.<br/> 
Apiden veri almak için onlarca çözüm var bunların en basiti ve bilineni `xmlhtttprequest` [bknz](https://www.w3schools.com/xml/xml_http.asp) <br/>
fetch, proxy ve bilinen onlarca method var benim denemelerim de bunların hiçbiri api yi geçemedi ve cors hatası aldı. <br/>
Peki nasıl aştık bunu? bilinen bir diğer yöntemlerden olan `axios` yardımıyla bu işi hallettik.<br/>
Sadece axios kurup geçemedik tabi ki yine cors hatası aldık, merak eden olursa [axios](https://github.com/axios/axios). <br/>
Sorunumun çözümünü bu [google eklenti](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) 
'de buldum zor zamanlar için tavsiye ederim. <br/> Bu kod react ile geliştirilmiştir.

