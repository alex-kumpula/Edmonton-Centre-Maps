function Edmonton_Centre_2021_Campaign_Zones_loadFunc (layer_input) {

    /* #region Manually input the qgis2web Output */
    function pop_Edmonton_Centre_2021_Campaign_Zones_0(feature, layer) {
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
                    <td colspan="2">' + (feature.properties['ZoneNum'] !== null ? autolinker.link(feature.properties['ZoneNum'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
        layer.bindPopup(popupContent, {maxHeight: 400});
    }
    function style_Edmonton_Centre_2021_Campaign_Zones_0_0(feature) {
        var context = {
            feature: feature,
            variables: {}
        };
        // Start of if blocks and style check logic
        if (exp_Edmonton_Centre_2021_Campaign_Zones_0rule0_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2021_Campaign_Zones_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(88,56,216,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2021_Campaign_Zones_0rule1_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2021_Campaign_Zones_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(174,89,208,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2021_Campaign_Zones_0rule2_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2021_Campaign_Zones_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(70,186,215,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2021_Campaign_Zones_0rule3_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2021_Campaign_Zones_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(127,219,192,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2021_Campaign_Zones_0rule4_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2021_Campaign_Zones_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(174,209,34,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2021_Campaign_Zones_0rule5_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2021_Campaign_Zones_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(224,80,40,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2021_Campaign_Zones_0rule6_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2021_Campaign_Zones_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(223,189,103,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2021_Campaign_Zones_0rule7_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2021_Campaign_Zones_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(120,149,218,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2021_Campaign_Zones_0rule8_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2021_Campaign_Zones_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(221,129,201,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2021_Campaign_Zones_0rule9_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2021_Campaign_Zones_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(226,70,114,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2021_Campaign_Zones_0rule10_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2021_Campaign_Zones_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(46,212,79,1.0)',
            interactive: true,
        };
            }
        else {
            return {fill: false, stroke: false};
        }
    }
    map.createPane('pane_Edmonton_Centre_2021_Campaign_Zones_0');
    map.getPane('pane_Edmonton_Centre_2021_Campaign_Zones_0').style.zIndex = 400;
    map.getPane('pane_Edmonton_Centre_2021_Campaign_Zones_0').style['mix-blend-mode'] = 'normal';
    var layer_Edmonton_Centre_2021_Campaign_Zones_0 = new L.geoJson(json_Edmonton_Centre_2021_Campaign_Zones_0, {
        attribution: '',
        interactive: true,
        dataVar: 'json_Edmonton_Centre_2021_Campaign_Zones_0',
        layerName: 'layer_Edmonton_Centre_2021_Campaign_Zones_0',
        pane: 'pane_Edmonton_Centre_2021_Campaign_Zones_0',
        onEachFeature: pop_Edmonton_Centre_2021_Campaign_Zones_0,
        style: style_Edmonton_Centre_2021_Campaign_Zones_0_0,
    });
    /* #endregion */

    let legend_path = 'mapdata/Edmonton Centre 2021 Campaign Zones/legend';
    let html_legend = '<br /><table><tr><td style="text-align: center;"><img src="legend/2021CampaignZonesDisplay_0_Zone10.png" /></td><td>Zone #1</td></tr><tr><td style="text-align: center;"><img src="legend/2021CampaignZonesDisplay_0_Zone21.png" /></td><td>Zone #2</td></tr><tr><td style="text-align: center;"><img src="legend/2021CampaignZonesDisplay_0_Zone32.png" /></td><td>Zone #3</td></tr><tr><td style="text-align: center;"><img src="legend/2021CampaignZonesDisplay_0_Zone43.png" /></td><td>Zone #4</td></tr><tr><td style="text-align: center;"><img src="legend/2021CampaignZonesDisplay_0_Zone54.png" /></td><td>Zone #5</td></tr><tr><td style="text-align: center;"><img src="legend/2021CampaignZonesDisplay_0_Zone65.png" /></td><td>Zone #6</td></tr><tr><td style="text-align: center;"><img src="legend/2021CampaignZonesDisplay_0_Zone76.png" /></td><td>Zone #7</td></tr><tr><td style="text-align: center;"><img src="legend/2021CampaignZonesDisplay_0_Zone87.png" /></td><td>Zone #8</td></tr><tr><td style="text-align: center;"><img src="legend/2021CampaignZonesDisplay_0_Zone98.png" /></td><td>Zone #9</td></tr><tr><td style="text-align: center;"><img src="legend/2021CampaignZonesDisplay_0_Zone109.png" /></td><td>Zone #10</td></tr><tr><td style="text-align: center;"><img src="legend/2021CampaignZonesDisplay_0_Zone1110.png" /></td><td>Zone #11</td></tr></table>';
    layer_input.html_legend = html_legend.replace(/src="legend/g, 'src="' + legend_path);
    return layer_Edmonton_Centre_2021_Campaign_Zones_0;
}