function Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_loadFunc (layer_input) {

    /* #region Manually input the qgis2web Output */
    function pop_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2(feature, layer) {
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
                    <td colspan="2">' + (feature.properties['Area km2'] !== null ? autolinker.link(feature.properties['Area km2'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['PercAreaDA'] !== null ? autolinker.link(feature.properties['PercAreaDA'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['PopApprox'] !== null ? autolinker.link(feature.properties['PopApprox'].toLocaleString()) : '') + '</td>\
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
                <tr>\
                    <td colspan="2">' + (feature.properties['AreaDA Km2'] !== null ? autolinker.link(feature.properties['AreaDA Km2'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['1T'] !== null ? autolinker.link(feature.properties['1T'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['1683T'] !== null ? autolinker.link(feature.properties['1683T'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['1683M'] !== null ? autolinker.link(feature.properties['1683M'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['1683F'] !== null ? autolinker.link(feature.properties['1683F'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['1686T'] !== null ? autolinker.link(feature.properties['1686T'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['1686M'] !== null ? autolinker.link(feature.properties['1686M'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['1686F'] !== null ? autolinker.link(feature.properties['1686F'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['1686T_R'] !== null ? autolinker.link(feature.properties['1686T_R'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['1686M_R'] !== null ? autolinker.link(feature.properties['1686M_R'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['1686F_R'] !== null ? autolinker.link(feature.properties['1686F_R'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
        layer.bindPopup(popupContent, {maxHeight: 400});
    }
    function style_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2_0(feature) {
        var context = {
            feature: feature,
            variables: {}
        };
        // Start of if blocks and style check logic
        if (exp_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2rule1_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,166,166,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2rule2_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,202,166,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2rule3_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,238,166,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2rule4_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(238,255,166,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2rule5_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(202,255,166,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2rule6_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(166,255,166,1.0)',
            interactive: true,
        };
            }
        else {
            return {
            pane: 'pane_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(154,154,154,1.0)',
            interactive: true,
        };
        }
    }
    map.createPane('pane_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2');
    map.getPane('pane_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2').style.zIndex = 402;
    map.getPane('pane_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2').style['mix-blend-mode'] = 'normal';
    var layer_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2 = new L.geoJson(json_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2, {
        attribution: '',
        interactive: true,
        dataVar: 'json_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2',
        layerName: 'layer_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2',
        pane: 'pane_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2',
        onEachFeature: pop_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2,
        style: style_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2_0,
    });
    /* #endregion */

    let legend_path = 'mapdata/Edmonton Centre 2016 Census Median Income Poll DA Unions/legend';
    let html_legend = '<br /><table><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_2_0.png" /></td><td></td></tr><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_2_0300001.png" /></td><td>0 - 30000</td></tr><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_2_30000350002.png" /></td><td>30000 - 35000</td></tr><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_2_35000400003.png" /></td><td>35000 - 40000</td></tr><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_2_40000450004.png" /></td><td>40000 - 45000</td></tr><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_2_45000550005.png" /></td><td>45000 - 55000</td></tr><tr><td style="text-align: center;"><img src="legend/2016MedianIncomebyCensusDiseminationArea_2_550006.png" /></td><td>>55000</td></tr></table>';
    layer_input.html_legend = html_legend.replace(/src="legend/g, 'src="' + legend_path);
    return layer_Edmonton_Centre_2016_Census_Median_Income_Poll_DA_Unions_2;
}