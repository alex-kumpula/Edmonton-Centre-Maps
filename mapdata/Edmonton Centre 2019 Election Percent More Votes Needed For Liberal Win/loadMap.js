function Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_loadFunc (layer_input) {

    /* #region Manually input the qgis2web Output */
    function pop_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2(feature, layer) {
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
                    <td colspan="2">' + (feature.properties['% of Additional Votes Needed'] !== null ? autolinker.link(feature.properties['% of Additional Votes Needed'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
        layer.bindPopup(popupContent, {maxHeight: 400});
    }
    function style_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2_0(feature) {
        var context = {
            feature: feature,
            variables: {}
        };
        // Start of if blocks and style check logic
        if (exp_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2rule0_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,245,240,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2rule1_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(254,214,196,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2rule2_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(252,164,135,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2rule3_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(252,112,80,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2rule4_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(235,54,42,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2rule5_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(186,20,25,1.0)',
            interactive: true,
        };
            }
            else if (exp_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2rule6_eval_expression(context)) {
              return {
            pane: 'pane_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(103,0,13,1.0)',
            interactive: true,
        };
            }
        else {
            return {fill: false, stroke: false};
        }
    }
    map.createPane('pane_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2');
    map.getPane('pane_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2').style.zIndex = 402;
    map.getPane('pane_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2').style['mix-blend-mode'] = 'normal';
    var layer_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2 = new L.geoJson(json_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2, {
        attribution: '',
        interactive: true,
        dataVar: 'json_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2',
        layerName: 'layer_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2',
        pane: 'pane_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2',
        onEachFeature: pop_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2,
        style: style_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2_0,
    });
    /* #endregion */

    let legend_path = 'mapdata/Edmonton Centre 2019 Election Percent More Votes Needed For Liberal Win/legend';
    let html_legend = '<br /><table><tr><td style="text-align: center;"><img src="legend/AdditionalVotesNeededforLiberalWinperPoll_2_00.png" /></td><td>0%</td></tr><tr><td style="text-align: center;"><img src="legend/AdditionalVotesNeededforLiberalWinperPoll_2_051.png" /></td><td>0% - 5%</td></tr><tr><td style="text-align: center;"><img src="legend/AdditionalVotesNeededforLiberalWinperPoll_2_5102.png" /></td><td>5% - 10%</td></tr><tr><td style="text-align: center;"><img src="legend/AdditionalVotesNeededforLiberalWinperPoll_2_10153.png" /></td><td>10% - 15%</td></tr><tr><td style="text-align: center;"><img src="legend/AdditionalVotesNeededforLiberalWinperPoll_2_15204.png" /></td><td>15% - 20%</td></tr><tr><td style="text-align: center;"><img src="legend/AdditionalVotesNeededforLiberalWinperPoll_2_20305.png" /></td><td>20% - 30%</td></tr><tr><td style="text-align: center;"><img src="legend/AdditionalVotesNeededforLiberalWinperPoll_2_301006.png" /></td><td>30% - 100%</td></tr></table>';
    layer_input.html_legend = html_legend.replace(/src="legend/g, 'src="' + legend_path);
    return layer_Edmonton_Centre_2019_Election_Percent_More_Votes_Needed_For_Liberal_Win_2;
}