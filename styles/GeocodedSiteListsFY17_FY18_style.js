var size = 0;

var styleCache_GeocodedSiteListsFY17_FY18={}
var style_GeocodedSiteListsFY17_FY18 = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.2 + size,
            stroke: new ol.style.Stroke({color: "rgba(197,199,206,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(115,175,218,1.0)"})})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_GeocodedSiteListsFY17_FY18[key]){
        var text = new ol.style.Text({
              font: '9.75px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_GeocodedSiteListsFY17_FY18[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_GeocodedSiteListsFY17_FY18[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};