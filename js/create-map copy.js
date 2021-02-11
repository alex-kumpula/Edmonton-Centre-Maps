
var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
    highlightLayer.setStyle({
        color: '#ffff00',
    });
    } else {
    highlightLayer.setStyle({
        fillColor: '#ffff00',
        fillOpacity: 1
    });
    }
}
var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1
})
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
var measureControl = new L.Control.Measure({
    position: 'topleft',
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: 'hectares'
});
measureControl.addTo(map);
document.getElementsByClassName('leaflet-control-measure-toggle')[0]
.innerHTML = '';
document.getElementsByClassName('leaflet-control-measure-toggle')[0]
.className += ' fas fa-ruler';
var bounds_group = new L.featureGroup([]);
function setBounds() {
    if (bounds_group.getLayers().length) {
        map.fitBounds(bounds_group.getBounds());
    }
}



map.createPane('pane_GoogleSatellite_0');
map.getPane('pane_GoogleSatellite_0').style.zIndex = 400;      
var layer_GoogleSatellite_0 = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    pane: 'pane_GoogleSatellite_0',
    opacity: 1.0,
    attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 20
});
layer_GoogleSatellite_0;
map.addLayer(layer_GoogleSatellite_0);



map.createPane('pane_GoogleRoad_1');
map.getPane('pane_GoogleRoad_1').style.zIndex = 401;
var layer_GoogleRoad_1 = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    pane: 'pane_GoogleRoad_1',
    opacity: 1.0,
    attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 20
});
layer_GoogleRoad_1;
map.addLayer(layer_GoogleRoad_1);



function pop_PollingDivisionOutlines_2(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Descriptio'] !== null ? autolinker.link(feature.properties['Descriptio'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Descriptio_1'] !== null ? autolinker.link(feature.properties['Descriptio_1'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PollNum'] !== null ? autolinker.link(feature.properties['PollNum'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Liberal'] !== null ? autolinker.link(feature.properties['Liberal'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Conservative'] !== null ? autolinker.link(feature.properties['Conservative'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NDP'] !== null ? autolinker.link(feature.properties['NDP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Total Votes'] !== null ? autolinker.link(feature.properties['Total Votes'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Total Electors'] !== null ? autolinker.link(feature.properties['Total Electors'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['First Place Votes'] !== null ? autolinker.link(feature.properties['First Place Votes'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['First Place'] !== null ? autolinker.link(feature.properties['First Place'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Second Place Votes'] !== null ? autolinker.link(feature.properties['Second Place Votes'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Second Place'] !== null ? autolinker.link(feature.properties['Second Place'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Third Place Votes'] !== null ? autolinker.link(feature.properties['Third Place Votes'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Third Place'] !== null ? autolinker.link(feature.properties['Third Place'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Margin: First - Second'] !== null ? autolinker.link(feature.properties['Margin: First - Second'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Margin: First - Liberal'] !== null ? autolinker.link(feature.properties['Margin: First - Liberal'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Turnout'] !== null ? autolinker.link(feature.properties['Turnout'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['% of Additional Votes Needed'] !== null ? autolinker.link(feature.properties['% of Additional Votes Needed'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_PollingDivisionOutlines_2_0() {
    return {
        pane: 'pane_PollingDivisionOutlines_2',
        opacity: 1,
        color: 'rgba(1,0,251,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 6.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(128,128,128,0.0)',
        interactive: true,
    }
}
map.createPane('pane_PollingDivisionOutlines_2');
map.getPane('pane_PollingDivisionOutlines_2').style.zIndex = 402;
map.getPane('pane_PollingDivisionOutlines_2').style['mix-blend-mode'] = 'normal';
var layer_PollingDivisionOutlines_2 = new L.geoJson(json_PollingDivisionOutlines_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_PollingDivisionOutlines_2',
    layerName: 'layer_PollingDivisionOutlines_2',
    pane: 'pane_PollingDivisionOutlines_2',
    onEachFeature: pop_PollingDivisionOutlines_2,
    style: style_PollingDivisionOutlines_2_0,
});
bounds_group.addLayer(layer_PollingDivisionOutlines_2);
map.addLayer(layer_PollingDivisionOutlines_2);



function pop_2016MedianIncomebyCensusDiseminationArea_3(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Descriptio'] !== null ? autolinker.link(feature.properties['Descriptio'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Descript_1'] !== null ? autolinker.link(feature.properties['Descript_1'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Descript_2'] !== null ? autolinker.link(feature.properties['Descript_2'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PollNum'] !== null ? autolinker.link(feature.properties['PollNum'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DAUID'] !== null ? autolinker.link(feature.properties['DAUID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PRUID'] !== null ? autolinker.link(feature.properties['PRUID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PRNAME'] !== null ? autolinker.link(feature.properties['PRNAME'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CDUID'] !== null ? autolinker.link(feature.properties['CDUID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CDNAME'] !== null ? autolinker.link(feature.properties['CDNAME'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CDTYPE'] !== null ? autolinker.link(feature.properties['CDTYPE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CCSUID'] !== null ? autolinker.link(feature.properties['CCSUID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CCSNAME'] !== null ? autolinker.link(feature.properties['CCSNAME'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CSDUID'] !== null ? autolinker.link(feature.properties['CSDUID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CSDNAME'] !== null ? autolinker.link(feature.properties['CSDNAME'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CSDTYPE'] !== null ? autolinker.link(feature.properties['CSDTYPE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ERUID'] !== null ? autolinker.link(feature.properties['ERUID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ERNAME'] !== null ? autolinker.link(feature.properties['ERNAME'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['SACCODE'] !== null ? autolinker.link(feature.properties['SACCODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['SACTYPE'] !== null ? autolinker.link(feature.properties['SACTYPE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CMAUID'] !== null ? autolinker.link(feature.properties['CMAUID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CMAPUID'] !== null ? autolinker.link(feature.properties['CMAPUID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CMANAME'] !== null ? autolinker.link(feature.properties['CMANAME'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CMATYPE'] !== null ? autolinker.link(feature.properties['CMATYPE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CTUID'] !== null ? autolinker.link(feature.properties['CTUID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CTNAME'] !== null ? autolinker.link(feature.properties['CTNAME'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ADAUID'] !== null ? autolinker.link(feature.properties['ADAUID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Liberal'] !== null ? autolinker.link(feature.properties['Liberal'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Conservative'] !== null ? autolinker.link(feature.properties['Conservative'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NDP'] !== null ? autolinker.link(feature.properties['NDP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Total Votes'] !== null ? autolinker.link(feature.properties['Total Votes'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Total Electors'] !== null ? autolinker.link(feature.properties['Total Electors'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['First Place Votes'] !== null ? autolinker.link(feature.properties['First Place Votes'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['First Place'] !== null ? autolinker.link(feature.properties['First Place'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Second Place Votes'] !== null ? autolinker.link(feature.properties['Second Place Votes'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Second Place'] !== null ? autolinker.link(feature.properties['Second Place'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Third Place Votes'] !== null ? autolinker.link(feature.properties['Third Place Votes'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Third Place'] !== null ? autolinker.link(feature.properties['Third Place'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Margin: First - Second'] !== null ? autolinker.link(feature.properties['Margin: First - Second'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Margin: First - Liberal'] !== null ? autolinker.link(feature.properties['Margin: First - Liberal'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Turnout'] !== null ? autolinker.link(feature.properties['Turnout'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['% of Additional Votes Needed'] !== null ? autolinker.link(feature.properties['% of Additional Votes Needed'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['663T'] !== null ? autolinker.link(feature.properties['663T'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['663M'] !== null ? autolinker.link(feature.properties['663M'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['663F'] !== null ? autolinker.link(feature.properties['663F'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_2016MedianIncomebyCensusDiseminationArea_3_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_2016MedianIncomebyCensusDiseminationArea_3rule1_eval_expression(context)) {
        return {
        pane: 'pane_2016MedianIncomebyCensusDiseminationArea_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,166,166,0.7490196078431373)',
        interactive: true,
    };
        }
        else if (exp_2016MedianIncomebyCensusDiseminationArea_3rule2_eval_expression(context)) {
            return {
        pane: 'pane_2016MedianIncomebyCensusDiseminationArea_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,202,166,0.7490196078431373)',
        interactive: true,
    };
        }
        else if (exp_2016MedianIncomebyCensusDiseminationArea_3rule3_eval_expression(context)) {
        return {
        pane: 'pane_2016MedianIncomebyCensusDiseminationArea_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,238,166,0.7490196078431373)',
        interactive: true,
    };
        }
        else if (exp_2016MedianIncomebyCensusDiseminationArea_3rule4_eval_expression(context)) {
        return {
        pane: 'pane_2016MedianIncomebyCensusDiseminationArea_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(238,255,166,0.7490196078431373)',
        interactive: true,
    };
        }
        else if (exp_2016MedianIncomebyCensusDiseminationArea_3rule5_eval_expression(context)) {
        return {
        pane: 'pane_2016MedianIncomebyCensusDiseminationArea_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(202,255,166,0.7490196078431373)',
        interactive: true,
    };
        }
        else if (exp_2016MedianIncomebyCensusDiseminationArea_3rule6_eval_expression(context)) {
        return {
        pane: 'pane_2016MedianIncomebyCensusDiseminationArea_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(166,255,166,0.7490196078431373)',
        interactive: true,
    };
        }
    else {
        return {
        pane: 'pane_2016MedianIncomebyCensusDiseminationArea_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(154,154,154,0.7529411764705882)',
        interactive: true,
    };
    }
}
map.createPane('pane_2016MedianIncomebyCensusDiseminationArea_3');
map.getPane('pane_2016MedianIncomebyCensusDiseminationArea_3').style.zIndex = 403;
map.getPane('pane_2016MedianIncomebyCensusDiseminationArea_3').style['mix-blend-mode'] = 'normal';
var layer_2016MedianIncomebyCensusDiseminationArea_3 = new L.geoJson(json_2016MedianIncomebyCensusDiseminationArea_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_2016MedianIncomebyCensusDiseminationArea_3',
    layerName: 'layer_2016MedianIncomebyCensusDiseminationArea_3',
    pane: 'pane_2016MedianIncomebyCensusDiseminationArea_3',
    onEachFeature: pop_2016MedianIncomebyCensusDiseminationArea_3,
    style: style_2016MedianIncomebyCensusDiseminationArea_3_0,
});
bounds_group.addLayer(layer_2016MedianIncomebyCensusDiseminationArea_3);
map.addLayer(layer_2016MedianIncomebyCensusDiseminationArea_3);



var osmGeocoder = new L.Control.Geocoder({
    collapsed: true,
    position: 'topleft',
    text: 'Search',
    title: 'Testing'
}).addTo(map);
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
.className += ' fa fa-search';
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
.title += 'Search for a place';



var baseMaps = {
    "Google Roads":layer_GoogleRoad_1,
    "Google Satellite":layer_GoogleSatellite_0,
}



L.control.layers(baseMaps,{'2016 Median Income by Census Disemination Area<br /><table><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_3_0.png" /></td><td></td></tr><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_3_0300001.png" /></td><td>0 - 30000</td></tr><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_3_30000350002.png" /></td><td>30000 - 35000</td></tr><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_3_35000400003.png" /></td><td>35000 - 40000</td></tr><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_3_40000450004.png" /></td><td>40000 - 45000</td></tr><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_3_45000550005.png" /></td><td>45000 - 55000</td></tr><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_3_550006.png" /></td><td>>55000</td></tr></table>': layer_2016MedianIncomebyCensusDiseminationArea_3,'<img src="legend/PollingDivisionOutlines_2.png" /> Polling Division Outlines': layer_PollingDivisionOutlines_2}).addTo(map);
setBounds();



map.addControl(new L.Control.Search({
    layer: layer_2016MedianIncomebyCensusDiseminationArea_3,
    initial: false,
    hideMarkerOnCollapse: true,
    propertyName: 'PollNum'}));
document.getElementsByClassName('search-button')[0].className +=
' fa fa-binoculars';

