function Edmonton_Centre_2019_Election_Polling_Divisions_loadFunc (layer_input) {

    /* #region Manually input the qgis2web Output */
    function pop_Edmonton_Centre_2019_Election_Polling_Divisions(feature, layer) {
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

    function style_Edmonton_Centre_2019_Election_Polling_Divisions() {
        return {
            pane: 'pane_Edmonton_Centre_2019_Election_Polling_Divisions',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.5, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(193,193,193,0.2)',
            interactive: true,
        }
    }
    map.createPane('pane_Edmonton_Centre_2019_Election_Polling_Divisions');
    map.getPane('pane_Edmonton_Centre_2019_Election_Polling_Divisions').style.zIndex = 404;
    map.getPane('pane_Edmonton_Centre_2019_Election_Polling_Divisions').style['mix-blend-mode'] = 'normal';
    var layer_EdmontonCentre2019PollbypollMasterMapShapefile_2 = new L.geoJson(json_Edmonton_Centre_2019_Election_Polling_Divisions, {
        attribution: '',
        interactive: true,
        dataVar: 'json_Edmonton_Centre_2019_Election_Polling_Divisions',
        layerName: 'layer_Edmonton_Centre_2019_Election_Polling_Divisions',
        pane: 'pane_Edmonton_Centre_2019_Election_Polling_Divisions',
        onEachFeature: pop_Edmonton_Centre_2019_Election_Polling_Divisions,
        style: style_Edmonton_Centre_2019_Election_Polling_Divisions,
    });
    /* #endregion */

    let legend_path = 'mapdata/Edmonton Centre 2019 Election Polling Divisions/legend';
    let html_legend = '<br /><img src="legend/EdmontonCentre2019PollbypollMasterMapShapefile_2.png" /> Edmonton Centre - 2019 Poll-by-poll Master Map Shapefile';
    layer_input.html_legend = html_legend.replace(/src="legend/g, 'src="' + legend_path);
    return layer_EdmontonCentre2019PollbypollMasterMapShapefile_2;
}