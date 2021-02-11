
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
        //fillOpacity: 1
    });
    }
}
var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1
})
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a> &middot; Data from StatCan &middot; Visualizations by Alex Kumpula');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});

/* #region Adding distance measuring control */
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
/* #endregion */

//Sets the default view to Edmonton Centre
map.setView(new L.LatLng(53.5424, -113.5384), 13);

/* #region Create and Add baseMap layers */
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
    //Not adding satelites layer because only one baselayer should be ADDED during map instantiaion, however both should be in baseMaps and passed to the layer control.
    //map.addLayer(layer_GoogleSatellite_0);

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

    var baseMaps = {
        "Google Roads":layer_GoogleRoad_1,
        "Google Satellite":layer_GoogleSatellite_0,
    }
/* #endregion */
//var baseMapsLayerControl = L.control.layers(baseMaps, {}).addTo(map);

var auto_layer_control = L.control.autolayers({
    //autoZIndex: true,
    sortLayers: true,
    baseLayers: baseMaps,
    selectedOverlays: [] 
});
auto_layer_control.addTo(map);




class qgis2web_layer {
    constructor(name, qgis2web_expressions_script_src, qgis2web_data_script_src, qgis2web_layer_functions_script_src, qgis2web_layer_function_name, html_legend) {
        this.name = name;
        this.qgis2web_expressions_script_src = qgis2web_expressions_script_src;
        this.qgis2web_data_script_src = qgis2web_data_script_src;
        this.qgis2web_layer_functions_script_src = qgis2web_layer_functions_script_src; //This must be created manually from the qgis2web-exported index.html!!!
        this.qgis2web_layer_function_name = qgis2web_layer_function_name; //This must be created manually in qgis2web_layer_functions_script_src from the qgis2web-exported index.html!!!
        this.html_legend = html_legend;

        if (this.html_legend === undefined){
            this.html_legend = '';
        }

        this.leaflet_layer;

        this.toggle_state = false;
    }

    areRequiredScriptsLoaded() {
        let has_qgis2web_expressions_script = document.querySelector('script[src="' + this.qgis2web_expressions_script_src + '"]') ? true : false;
        let has_qgis2web_data_script = document.querySelector('script[src="' + this.qgis2web_data_script_src + '"]') ? true : false;
        let has_qgis2web_layer_functions_script = document.querySelector('script[src="' + this.qgis2web_layer_functions_script_src + '"]') ? true : false;
        let are_scripts_loaded = has_qgis2web_expressions_script && has_qgis2web_data_script && has_qgis2web_layer_functions_script;
        if (are_scripts_loaded) {
            console.log('All required scripts for layer "' + this.name +'" are loaded.');
        } else {
            console.log('Some required scripts for layer "' + this.name +'" are not loaded.');
        }
        return are_scripts_loaded;
    }

    async generateLeafletLayer() {
        let self = this;
        let layerPromise = new Promise(function(layerResolve, layerReject) {
            if (self.areRequiredScriptsLoaded()) { //Makes it so the scripts are only added to the header if they are not already added
                var leaflet_layer = eval(self.qgis2web_layer_function_name + '(self)'); //runs the function in the qgis2web_layer_functions_script named qgis2web_layer_function_name and stores its return value (which should be a leaflet geojson layer)
                layerResolve(leaflet_layer);
            } else {
                var qgis_expressions_script = document.createElement("script");
                qgis_expressions_script.type = "text/javascript";
                qgis_expressions_script.onload = function () {
                    var qgis2web_data_script = document.createElement("script");
                    qgis2web_data_script.type = "text/javascript";
                    qgis2web_data_script.onload = function () {
                        var qgis2web_layer_functions_script = document.createElement("script");
                        qgis2web_layer_functions_script.type = "text/javascript";
                        qgis2web_layer_functions_script.onload = function () {
                            var leaflet_layer = eval(self.qgis2web_layer_function_name + '(self)'); //runs the function in the qgis2web_layer_functions_script named qgis2web_layer_function_name and stores its return value (which should be a leaflet geojson layer)
                            layerResolve(leaflet_layer);
                        }
                        qgis2web_layer_functions_script.src = self.qgis2web_layer_functions_script_src;
                        document.getElementsByTagName("head")[0].appendChild(qgis2web_layer_functions_script);
                    }
                    qgis2web_data_script.src = self.qgis2web_data_script_src;
                    document.getElementsByTagName("head")[0].appendChild(qgis2web_data_script);
                }
                qgis_expressions_script.src = self.qgis2web_expressions_script_src; 
                document.getElementsByTagName("head")[0].appendChild(qgis_expressions_script);
                console.log('Loaded the required scripts for layer "' + self.name + '".');
            }   
        });
        this.leaflet_layer = await layerPromise;
        return await layerPromise;
    }

    async addLeafletLayerToMap(leaflet_map, layer_control, func_to_run_after) {
        let layer_to_add = await this.generateLeafletLayer();
        

        
        layer_control.addOverlay(layer_to_add, this.name);
        leaflet_map.addLayer(layer_to_add);

        this.createLegendControl(leaflet_map);

        this.toggle_state = true;
        console.log('Successfully added layer "' + this.name + '" to the specified map.');
        if (func_to_run_after != undefined) {
            func_to_run_after();
        }
    }

    removeLeafletLayerFromMap(leaflet_map, layer_control) { //Call this function through a button or something, just not syncronously with the main execution
        leaflet_map.removeLayer(this.leaflet_layer);
        layer_control.removeLayer(this.leaflet_layer);
        this.toggle_state = false;
        console.log('Successfully removed layer "' + this.name + '" from the specified map.');
    }

    toggleLeafletLayerOnMap(leaflet_map, layer_control) {
        if (this.toggle_state == false) {
            this.addLeafletLayerToMap(leaflet_map, layer_control);
        }
        else {
            this.removeLeafletLayerFromMap(leaflet_map, layer_control);
        }
    }

    createAttributeSearchControl(leaflet_map, attribute) {
        leaflet_map.addControl(new L.Control.Search({
            layer: this.leaflet_layer,
            initial: false,
            hideMarkerOnCollapse: true,
            propertyName: attribute}));
        document.getElementsByClassName('search-button')[0].className +=
        ' fa fa-binoculars';
    }

    createLegendControl(leaflet_map) {
        let opacity_layer = 0.7;
        var legend = L.control.htmllegend({
            position: 'bottomright',
            legends: [{
                name: this.name,
                layer: this.leaflet_layer,
                elements: [{
                    label: this.name,
                    html: this.html_legend,
                }]
            }],
            collapseSimple: true,
            detectStretched: true,
            collapsedOnInit: true,
            defaultOpacity: opacity_layer,
            visibleIcon: 'icon icon-eye',
            hiddenIcon: 'icon icon-eye-slash',
            updateOpacity: function (layer, opacity) {
                layer.setStyle({
                    stroke: true,
                    fill: true,
                    opacity: opacity,
                    fillOpacity: opacity
                })
                opacity_layer = opacity;
            }
        });
        this.leaflet_layer.on('mouseout', function(e) {
            e.target.setStyle({
                opacity: opacity_layer,
                fillOpacity: opacity_layer
            })
        });
        leaflet_map.addControl(legend);
    }
}











class qgis2web_map {
    constructor(name, qgis2web_expressions_script_src, qgis2web_layers) {
        this.name = name;
        this.qgis2web_expressions_script_src = qgis2web_expressions_script_src;
        this.qgis2web_layers = qgis2web_layers;
    }
}




















