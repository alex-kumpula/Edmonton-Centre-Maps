var Edmonton_Centre_2019_Election_Polling_Divisions = new qgis2web_layer(
    '2019 Polling Division Outlines', 
    'mapdata/Edmonton Centre 2019 Election Polling Divisions/qgis2web_expressions.js', 
    'mapdata/Edmonton Centre 2019 Election Polling Divisions/Edmonton Centre 2019 Election Polling Divisions.js', 
    'mapdata/Edmonton Centre 2019 Election Polling Divisions/loadMap.js',
    'Edmonton_Centre_2019_Election_Polling_Divisions_loadFunc'
);
Edmonton_Centre_2019_Election_Polling_Divisions.addLeafletLayerToMap(map, auto_layer_control, function() {
    Edmonton_Centre_2019_Election_Polling_Divisions.createAttributeSearchControl(map, 'PollNum');
});



var Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured = new qgis2web_layer(
    '2019 First Places', 
    'mapdata/Edmonton Centre 2019 Election Polling Divisions - First Places Coloured/qgis2web_expressions.js', 
    'mapdata/Edmonton Centre 2019 Election Polling Divisions - First Places Coloured/Edmonton Centre 2019 Election Polling Divisions - First Places Coloured.js', 
    'mapdata/Edmonton Centre 2019 Election Polling Divisions - First Places Coloured/loadMap.js',
    'Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_loadFunc'
);

var Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win = new qgis2web_layer(
    '2019 % More Votes Needed For Liberal Win', 
    'mapdata/Edmonton Centre 2019 Election Percent More Votes Needed For Liberal Win/qgis2web_expressions.js', 
    'mapdata/Edmonton Centre 2019 Election Percent More Votes Needed For Liberal Win/Edmonton Centre 2019 Election Percent More Votes Needed For Liberal Win.js', 
    'mapdata/Edmonton Centre 2019 Election Percent More Votes Needed For Liberal Win/loadMap.js',
    'Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_loadFunc'
);

var Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions = new qgis2web_layer(
    '2016 Census Median Income per Poll / Dissemination Area Union', 
    'mapdata/Edmonton Centre 2016 Census Median Income Poll DA Unions/qgis2web_expressions.js', 
    'mapdata/Edmonton Centre 2016 Census Median Income Poll DA Unions/Edmonton Centre 2016 Census Median Income Poll DA Unions.js', 
    'mapdata/Edmonton Centre 2016 Census Median Income Poll DA Unions/loadMap.js',
    'Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_loadFunc'
);

var Edmonton_Centre_2021_Campaign_Zones = new qgis2web_layer(
    '2021 Campaign Zones', 
    'mapdata/Edmonton Centre 2021 Campaign Zones/qgis2web_expressions.js', 
    'mapdata/Edmonton Centre 2021 Campaign Zones/Edmonton Centre 2021 Campaign Zones.js', 
    'mapdata/Edmonton Centre 2021 Campaign Zones/loadMap.js',
    'Edmonton_Centre_2021_Campaign_Zones_loadFunc'
);