# A prototype tool to engage citizens in sea level rise/storm surge impacts in Maine 🌊

```js
{
id: "8418150",
name: "Portland",
lat: "43.6567",
lon: "-70.2467"
},
```

[Sample request for water temp](https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20190111%2015:00&end_date=20190112%2015:06&station=8418150&product=water_temperature&units=english&time_zone=lst&application=ports_screen&format=json)

[Sample water level predictions request](https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=20190112&end_date=20190113&datum=MLLW&station=8418150&time_zone=lst_ldt&units=english&interval=hilo&format=json)

[Sample request for actual -> predicted water_level](https://tidesandcurrents.noaa.gov/api/datagetter?product=water_level&application=NOS.COOPS.TAC.WL&begin_date=20190111&end_date=20190112&datum=MLLW&station=8418150&time_zone=GMT&units=english&format=json)

```js
Commands for React:

npm start

npm test

npm run build

npm run eject
```

Resources

[Tides and Currents NOAA](http://tidesandcurrents.noaa.gov/stations.html)

[Maine Data - SLR & Tidal Flooding](https://www.maine.gov/dacf/mgs/hazards/slr_ss/index.shtml)

[Lunar Phase Cal 🌝](https://github.com/kencrocken/lunar_phase)

[📈 React-Vis Data Docs 📉](https://github.com/uber/react-vis)