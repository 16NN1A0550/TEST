sap.ui.define(["sap/ui/core/mvc/Controller",
               "sap/m/MessageToast",
            "sap/ui/model/json/JSONModel",
           "sap/ui/model/resource/ResourceModel"],
function(oContr,oMsgToast,JSONModel,ResourceModel){
    return oContr.extend("sampleproject.webapp.controller.App",{
/*       onInit: function(){
            var oJson=new JSONModel();
            oJson.loadData("model/sampledata.json");
            this.getView().setModel(oJson)

            var oi18n=new ResourceModel({
                bundleUrl:"i18n/i18n.properties"
            });
          this.getView().setModel(oi18n,"i18n");
        }, */
      onHello: function(){
      //  alert("in UI5 Module!!");
      //oMsgToast.show("in UI5 Module!");
      var oBundle=this.getView().getModel("i18n").getResourceBundle();
      var oRecipient=this.getView().getModel().getProperty("/recipient/name");
      var oMsg=oBundle.getText("hellomsg",[oRecipient]);
     // var oButId=this.getView().byId("Buttn");
     // oButId.setText("New Text");
 //    oButId.setText("Hello SAP UI5!!");
      oMsgToast.show(oMsg);
}
    });
});