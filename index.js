/*sap.ui.define(["sap/ui/core/mvc/XMLView"],
    function(XMLView){
        "use strict";
        XMLView.create({
            viewName: "sampleproject/webapp/views/App"
         }).then(function(oView){
            oView.placeAt("body");
         }); 
    }); */

sap.ui.define(["sap/ui/core/ComponentContainer"],
       function(ComponentContainer){
        "use strict";
        new ComponentContainer({
            "name": "sampleproject.webapp",
            "settings":{
                "id": "webapp"
            },
        async: true
        }).placeAt("body");
       } );