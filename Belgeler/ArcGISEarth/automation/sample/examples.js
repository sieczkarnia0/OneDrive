var examples = (function () {
  return {
    camera: {
      "position": {
        "x": -92,
        "y": 41,
        "z": 11000000,
        "spatialReference": {
          "wkid": 4326
        }
      },
      "heading": 2.3335941892764884E-17,
      "tilt": 6.144145559063083E-15,
      "roll": 0
    },
    flight: {
      "camera": {
        "position": {
          "x": -92,
          "y": 41,
          "z": 11000000,
          "spatialReference": {
            "wkid": 4326
          }
        },
        "heading": 2.3335941892764884E-17,
        "tilt": 6.144145559063083E-15,
        "roll": 0
      },
      "duration": 2.0
    },
    addLayer: {
      "URI": "https://www.arcgis.com/home/item.html?id=19dcff93eeb64f208d09d328656dd492",
      "target": "operationalLayers",
      "type": "PortalItem"
    },
    getLayer: "311b7317-94f8-4f80-89f2-0e3ca5e77d28",
    removeLayer: "311b7317-94f8-4f80-89f2-0e3ca5e77d28",
    clearLayers: "operationalLayers",
    addGraphic: {
      "geometry": {
        "type": "point",
        "x": -100,
        "y": 40
      },
      "symbol": {
        "type": "picture-marker",
        "url": "https://static.arcgis.com/images/Symbols/Shapes/BlackStarLargeB.png",
        "width": "64px",
        "height": "64px",
        "xoffset": "10px",
        "yoffset": "10px"
      }
    },
    updateGraphic: {
      "id": "311b7317-94f8-4f80-89f2-0e3ca5e77d28",
      "geometry": {
        "type": "point",
        "x": -100,
        "y": 40
      },
      "symbol": {
        "type": "picture-marker",
        "url": "https://static.arcgis.com/images/Symbols/Basic/RedSphere.png",
        "width": "64px",
        "height": "64px",
        "xoffset": "10px",
        "yoffset": "10px"
      }
    },
    getGraphic: "311b7317-94f8-4f80-89f2-0e3ca5e77d28",
    removeGraphic: "311b7317-94f8-4f80-89f2-0e3ca5e77d28",
    addDrawing: {
      "id": "8a1701c9-b8e1-1b0a-c1a7-ac6242c7645e",
      "visible": true,
      "title": "Point",
      "geometry": {
        "x": -100,
        "y": 40,
        "spatialReference": {
          "wkid": 4326
        }
      },
      "symbol": {
        "type": "picture-marker",
        "url": "https://static.arcgis.com/images/Symbols/Shapes/BlackStarLargeB.png",
        "size": "32px"
      },
      "labelSymbol": {
        "type": "text",
        "color": [
          100,
          100,
          100,
          255
        ],
        "font": {
          "size": "16px"
        }
      }
    },
    removeDrawing: "8a1701c9-b8e1-1b0a-c1a7-ac6242c7645e",
    setWorkspace: {
      url: "http://localhost:8000/workspaces/4855c0d4-9b11-4832-876b-ee3a3730dfdb.zip",
      path: "C:\\Users\\Username\\Documents\\ArcGISEarth\\automation\\workspaces\\4855c0d4-9b11-4832-876b-ee3a3730dfdb.zip"
    }
  };
})();
