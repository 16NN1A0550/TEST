sap.ui.define(["sap/ui/core/UIComponent",
                "sap/ui/model/json/JSONModel",
               "sap/ui/model/resource/ResourceModel"],
   function(UIComponent,JSONModel,ResourceModel){
    return UIComponent.extend("sampleproject.webapp.component",{
        metadata:{
            "rootview":{
                "viewName": "sampleproject.webapp.views.App",
                "type": "XML",
                "id": "App"
            }
        },
        init: function(){
        // call the init function of the parent
        UIComponent.prototype.init.apply(this,arguments);
        var oJson=new JSONModel();
        oJson.loadData("model/sampledata.json");
        this.getView().setModel(oJson)

        var oi18n=new ResourceModel({
            bundleUrl:"i18n/i18n.properties"
        });
      this.getView().setModel(oi18n,"i18n"); 
        }
    });
   });