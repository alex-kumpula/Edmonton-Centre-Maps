function Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_loadFunc (layer_input) {

    /* #region Manually input the qgis2web Output */
    function pop_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_2(feature, layer) {
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
    function style_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_2_0(feature) {
        var context = {
            feature: feature,
            variables: {}
        };
        // Start of if blocks and style check logic
        if (exp_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_2rule0_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(0,0,255,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_2rule1_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,35,35,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_2rule2_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,163,44,1.0)',
            interactive: true,
        };
            }
        else {
            return {fill: false, stroke: false};
        }
    }
    map.createPane('pane_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured');
    map.getPane('pane_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured').style.zIndex = 402;
    map.getPane('pane_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured').style['mix-blend-mode'] = 'normal';
    var layer_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_2 = new L.geoJson(json_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_2, {
        attribution: '',
        interactive: true,
        dataVar: 'json_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_2',
        layerName: 'layer_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_2',
        pane: 'pane_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured',
        onEachFeature: pop_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_2,
        style: style_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_2_0,
    });
    /* #endregion */

    let legend_path = 'mapdata/Edmonton Centre 2019 Election Polling Divisions - First Places Coloured/legend';
    let html_legend = '<br /><table><tr><td style="text-align: center;"><img src="legend/EdmontonCentre2019PollbypollMasterMapShapefile_2_Conservative0.png" /></td><td>Conservative</td></tr><tr><td style="text-align: center;"><img src="legend/EdmontonCentre2019PollbypollMasterMapShapefile_2_Liberal1.png" /></td><td>Liberal</td></tr><tr><td style="text-align: center;"><img src="legend/EdmontonCentre2019PollbypollMasterMapShapefile_2_NDP2.png" /></td><td>NDP</td></tr></table>';
    layer_input.html_legend = html_legend.replace(/src="legend/g, 'src="' + legend_path);
    return layer_Edmonton_Centre_2019_Election_Polling_Divisions__First_Places_Coloured_2;
}