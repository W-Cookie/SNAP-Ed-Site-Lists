var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_GeocodedSiteListsFY17_FY18 = new ol.format.GeoJSON();
var features_GeocodedSiteListsFY17_FY18 = format_GeocodedSiteListsFY17_FY18.readFeatures(geojson_GeocodedSiteListsFY17_FY18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeocodedSiteListsFY17_FY18 = new ol.source.Vector();
jsonSource_GeocodedSiteListsFY17_FY18.addFeatures(features_GeocodedSiteListsFY17_FY18);var lyr_GeocodedSiteListsFY17_FY18 = new ol.layer.Vector({
                source:jsonSource_GeocodedSiteListsFY17_FY18, 
                style: style_GeocodedSiteListsFY17_FY18,
                title: "GeocodedSiteListsFY17_FY18"
            });

lyr_GeocodedSiteListsFY17_FY18.setVisible(true);
var layersList = [baseLayer,lyr_GeocodedSiteListsFY17_FY18];
lyr_GeocodedSiteListsFY17_FY18.set('fieldAliases', {'Field1': 'Field1', 'Agency': 'Agency', 'Project': 'Project', 'Name_of_Lo': 'Name', 'Street_Num': 'Street_Num', 'Address': 'Address', 'City': 'City', 'Zipcode': 'Zipcode', 'County': 'County', 'Target_Aud': 'Target_Aud', 'Year': 'Year', 'FullAdd': 'Address', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'loctype': 'loctype', 'address_1': 'address_1', 'north': 'north', 'south': 'south', 'east': 'east', 'west': 'west', 'street_n_1': 'street_n_1', 'route': 'route', });
lyr_GeocodedSiteListsFY17_FY18.set('fieldImages', {'Field1': 'Hidden', 'Agency': 'TextEdit', 'Project': 'TextEdit', 'Name_of_Lo': 'TextEdit', 'Street_Num': 'Hidden', 'Address': 'Hidden', 'City': 'Hidden', 'Zipcode': 'Hidden', 'County': 'Hidden', 'Target_Aud': 'Hidden', 'Year': 'Hidden', 'FullAdd': 'TextEdit', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'loctype': 'Hidden', 'address_1': 'Hidden', 'north': 'Hidden', 'south': 'Hidden', 'east': 'Hidden', 'west': 'Hidden', 'street_n_1': 'Hidden', 'route': 'Hidden', });
lyr_GeocodedSiteListsFY17_FY18.set('fieldLabels', {'Agency': 'inline label', 'Project': 'inline label', 'Name_of_Lo': 'inline label', 'FullAdd': 'inline label', });
