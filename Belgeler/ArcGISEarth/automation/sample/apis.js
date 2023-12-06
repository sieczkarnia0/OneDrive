var apis = (function () {
  var cameraEndpoint = "camera";
  var layerEndpoint = "layer";
  var layersEndpoint = "layers";
  var graphicsEndpoint = "graphics";
  var drawingsEndpoint = "drawings";
  var flightEndpoint = "flight";
  var snapshotEndpoint = "snapshot";
  var workspaceEndpoint = "workspace";

  return [
    {
      "title": "Get Camera",
      "apiPath": cameraEndpoint,
      "method": "get",
      "no_req_params": true,
      "content-type": "application/json"
    },
    {
      "title": "Set Camera",
      "apiPath": cameraEndpoint,
      "method": "put",
      "no_req_params": false,
      "args_example": examples.camera,
      "content-type": "application/json"
    },
    {
      "title": "Set Flight",
      "apiPath": flightEndpoint,
      "method": "post",
      "args_example": examples.flight,
      "no_req_params": false,
      "content-type": "application/json"
    },
    {
      "title": "Add Layer",
      "apiPath": layerEndpoint,
      "method": "post",
      "args_example": examples.addLayer,
      "no_req_params": false,
      "content-type": "application/json"
    },
    {
      "title": "Get Layer",
      "apiPath": layerEndpoint,
      "method": "get",
      "no_req_params": false,
      "args_example": examples.getLayer,
      "has_request_body": false,
      "content-type": "application/json"
    },
    {
      "title": "Remove Layer",
      "apiPath": layerEndpoint,
      "method": "delete",
      "no_req_params": false,
      "has_request_body": false,
      "args_example": examples.removeLayer,
      "content-type": "application/json"
    },
    {
      "title": "Clear Layers",
      "apiPath": layersEndpoint,
      "method": "delete",
      "no_req_params": false,
      "has_request_body": false,
      "args_example": examples.clearLayers,
      "content-type": "application/json"
    },
    {
      "title": "Add Graphic",
      "apiPath": graphicsEndpoint,
      "method": "post",
      "args_example": examples.addGraphic,
      "no_req_params": false,
      "content-type": "application/json"
    },
    {
      "title": "Get Graphic",
      "apiPath": graphicsEndpoint,
      "method": "get",
      "args_example": examples.getGraphic,
      "no_req_params": false,
      "has_request_body": false,
      "content-type": "application/json"
    },
    {
      "title": "Update Graphic",
      "apiPath": graphicsEndpoint,
      "method": "patch",
      "args_example": examples.updateGraphic,
      "no_req_params": false,
      "content-type": "application/json"
    },
    {
      "title": "Remove Graphic",
      "apiPath": graphicsEndpoint,
      "method": "delete",
      "no_req_params": false,
      "has_request_body": false,
      "args_example": examples.removeGraphic,
      "content-type": "application/json"
    },
    {
      "title": "Clear Graphics",
      "apiPath": graphicsEndpoint,
      "method": "delete",
      "no_req_params": true,
      "has_request_body": false,
      "content-type": "application/json"
    },
    {
      "title": "Add Drawing",
      "apiPath": drawingsEndpoint,
      "method": "post",
      "args_example": examples.addDrawing,
      "no_req_params": false,
      "content-type": "application/json"
    },
    {
      "title": "Remove Drawing",
      "apiPath": drawingsEndpoint,
      "method": "delete",
      "no_req_params": false,
      "has_request_body": false,
      "args_example": examples.removeDrawing,
      "content-type": "application/json"
    },
    {
      "title": "Clear Drawings",
      "apiPath": drawingsEndpoint,
      "method": "delete",
      "no_req_params": true,
      "has_request_body": false,
      "content-type": "application/json"
    },
    {
      "title": "Get Workspace",
      "apiPath": workspaceEndpoint,
      "method": "get",
      "no_req_params": true,
      "content-type": "application/json"
    },
    {
      "title": "Import Workspace",
      "apiPath": workspaceEndpoint,
      "method": "put",
      "no_req_params": false,
      "args_example": examples.setWorkspace,
      "content-type": "application/json"
    },
    {
      "title": "Clear Workspace",
      "apiPath": workspaceEndpoint,
      "method": "delete",
      "no_req_params": true,
      "content-type": "application/json"
    },
    {
      "title": "Take Snapshot",
      "apiPath": snapshotEndpoint,
      "method": "get",
      "no_req_params": true,
      "content-type": "image/jpeg"
    }
  ];
})();
