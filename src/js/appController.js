/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcontext', 'ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'knockout', 'ojs/ojknockout', 
    "ojs/ojlistitemlayout", "ojs/ojlistview", "ojs/ojavatar", "ojs/ojtagcloud"],
  function(Context, ResponsiveUtils, ResponsiveKnockoutUtils, ko) {

     function ControllerViewModel() {

        // Media queries for repsonsive layouts
        const mdQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
        this.mdScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);      
        const lgQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
        this.lgScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(lgQuery);  
       

        // Header
        // Application Name used in Branding Area
        this.appName = ko.observable("App Name");
        // User Info used in Global Navigation area
        this.userLogin = ko.observable("john.hancock@oracle.com");

        // Footer
        this.footerLinks = [
          {name: 'About Oracle', linkId: 'aboutOracle', linkTarget:'http://www.oracle.com/us/corporate/index.html#menu-about'},
          { name: "Contact Us", id: "contactUs", linkTarget: "http://www.oracle.com/us/corporate/contact/index.html" },
          { name: "Legal Notices", id: "legalNotices", linkTarget: "http://www.oracle.com/us/legal/index.html" },
          { name: "Terms Of Use", id: "termsOfUse", linkTarget: "http://www.oracle.com/us/legal/terms/index.html" },
          { name: "Your Privacy Rights", id: "yourPrivacyRights", linkTarget: "http://www.oracle.com/us/legal/privacy/index.html" },
        ];
       }


      // A $( document ).ready() block.    

       // release the application bootstrap busy state
       Context.getPageContext().getBusyContext().applicationBootstrapComplete();

       return new ControllerViewModel();
  }
);
