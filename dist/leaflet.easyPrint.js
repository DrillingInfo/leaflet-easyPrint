L.Control.EasyPrint = L.Control.extend({

  options: {
    position: 'bottomright',
    title: 'Print map'
  },

  initialize: function(mapId){
    this.mapDiv = mapId;
  },

  onAdd: function () {
    var container = L.DomUtil.create('div', 'leaflet-control-easyPrint leaflet-bar leaflet-control');

    this.link = L.DomUtil.create('a', 'leaflet-control-easyPrint-button leaflet-bar-part', container);
    this.link.href = "javascript:void(0)($('#" + this.mapDiv + "').print({stylesheet:'../bower_components/leaflet.easyPrint/dist/easyPrint.css'}))";

    return container;
  },

  _click: function (e) {
    L.DomEvent.stopPropagation(e);
    L.DomEvent.preventDefault(e);
  }
});

L.easyPrint = function(mapId) {
  return new L.Control.EasyPrint(mapId);
};
