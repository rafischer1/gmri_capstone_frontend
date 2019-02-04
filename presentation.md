### SLR Maine Presentation Outline 🌊

* [> visual cues /# ### talking]

#### Hi! My name is Artie Fischer and I am happy to present, in collab w/ GMRI and the City of Portland Maine, sea level rise maine.

> map of the world to map of gulf of maine to portland maine

#### 2/3 of the world's cities and 1/10 people live in the coastal zone and two of the biggest challenges from climate change challenges facing these huge areas of population through the 21st century are ocean warming and sea level rise.

> warm map of gulf of maine

#### In Maine this is especially true because the gulf of maine is warming faster than 99% of the world's ocean and the coastal fishing, shipping, transportation, lobstering, and recreation industries are heavily reliant on a stable coastal ecosystem. Not to mention the further inundation and loss of wetlands, disappearance of beaches, and massive disriuptions to urban and rural infastructure including roads, bridges, and piers. 

> image of portland

#### this is why the Cities of Portland and South Portland Maine have recently passed new budget measures to address sea level rise planning around mitigation and adaptation including new strategies around monitoring and mapping coastal flooding and storm surge. 

#### One of the most important pieces of this push to actively face sea level rise in Maine is public engagement. This is why is collaboration with the Gulf of Maine Research institute, the city of portland, and the state of maine GIS department, I have developed the first phase in the public engagement toolbox: a coastal flooding/storm surge warning system called SLR Maine

> start video of project

#### SLR Maine is a web application that links directly from the GMRI site to allow interested citizens to subscribe to a SMS text messaging service. The site's main landing page includes several pages of current conditions of weather and water level in Portland Harbor utlizing the NOAA system of marine observation stations API, also displayed is current tide predictions for the next 48 hours with a red line indicating flooding stage. The flooding category system is part of a new classification system developed by the City of Portland.

> keep scrollin!

#### The rest of the landing page includes relevant information and links related to coastal flooding and previous high flooding events in the Portland Maine area. The main concern of this project from GMRI's perspective is to provide engaging material and links as an important piece of the overall policy strategy for SLR in the Portland Area. The graph here shows monthly tide data for every month from 1912 to Jan 2019. The two biggest spikes on the top line represents the  storm surge from the blizzard of '78 which was almost topped by the storm on Jan 4 2018. 

> admin page

#### In this initial phase of development for this project an adminiatrator is able to sign in and formulate the flooding alert messsage for the SMS system. This form includes several important fields for flooding event representation based on the City of Portland categories. Once a message is sent the event is recorded in the statistics here and the message is sent to the subscribers.

> PHONE VIEW

#### A subscriber receives the message containing important information about the flooding event as well as a link back to the site to learn more / or in the case of an Xtreme event: straight to the City of Portland's 'stay connected'. The mobile friendly site has a slightly different format from the web based landing page but includes almost all of the same information for the subscriber (who can, of course, at any time unsubscribe from these messages)

> quick slideshow of coastal flooding carousel?

#### I am very happy to present this phase of the SLR Maine project and I am excited to continue to grow the project as more quantitive mapping and monitoring is brought online with the City of Portland and the Gulf of Maine Research Institute.

> Tech stack

#### My technology stack for this project from back to front included: A postgeSQL database, routing and backend server are written in Golang which also connects to the Twilio SMS messaging API and serves data to a React frontend with data visualizations using react-vis and D3.js. Moving forward I am excited to work with the City fo Portland and GMRI to develop a fully mobile application and to connect the messaging service to Portland's stay connected information system once new monitoring and coastal flooding mapping systems are in place. 

> thank you slide

#### Thank you very much for being here this evening and I would love to talk about this project more with anyone interested. Thank you to my cohort mates in G103 and a big thank you to Pete and Alicia for the teaching and guidance and especiall Craig Quincy for being an ideal cohort leader and grit instructor. 
