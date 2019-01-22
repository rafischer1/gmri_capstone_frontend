# Planning for Capstone FE 🌊

> a prototype tool to engage citizens in sea level rise/storm surge impacts in Maine.

## To-do 📋

[ ] Build out react testing suite

[x] Components: sign-up, home, data, admin, admin-login

[x] react-router

[x] Connect to API's and build dataset

## Working Code 🦙

[x] React-Materialize hooked up

---

Wind Conversion from Q1:

```js
if (Winds.length > 0) {
  var currvalue = Winds[currentindex][1];
  var currdir = WindDirs[currentindex][1];
  switch (true) {
    case (currdir >= 348.75 || currdir <= 11.25):
      currdir = "N";
      break;
		case (currdir >= 11.25 && currdir <= 33.75):
			currdir = "NNE";
				  break;
			  case (currdir >= 33.75 && currdir <= 56.25):
				  currdir = "NE";
				  break;
			  case (currdir >= 56.25 && currdir <= 78.75):
				  currdir = "ENE";
				  break;
			  case (currdir >= 78.75 && currdir <= 101.25):
				  currdir = "E";
				  break;
			  case (currdir >= 101.25 && currdir <= 123.75):
				  currdir = "ESE";
				  break;
			  case (currdir >= 123.75 && currdir <= 146.25):
				  currdir = "SE";
				  break;
			  case (currdir >= 146.25 && currdir <= 168.75):
				  currdir = "SSE";
				  break;
			  case (currdir >= 168.75 && currdir <= 191.25):
				  currdir = "S";
				  break;
			  case (currdir >= 191.25 && currdir <= 213.75):
				  currdir = "SSW";
				  break;
			  case (currdir >= 213.75 && currdir <= 236.25):
				  currdir = "SW";
				  break;
			  case (currdir >= 236.25 && currdir <= 258.75):
				  currdir = "WSW";
				  break;
			  case (currdir >= 258.75 && currdir <= 281.25):
				  currdir = "W";
				  break;
			  case (currdir >= 281.25 && currdir <= 303.75):
				  currdir = "WNW";
				  break;
			  case (currdir >= 303.75 && currdir <= 326.25):
				  currdir = "NW";
				  break;
			  case (currdir >= 326.25 && currdir <= 348.75):
				  currdir = "NNW";
				  break;
			  default:
				  break;
      }
```