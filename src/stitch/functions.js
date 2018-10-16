import {
    Stitch,
    AnonymousCredential
} from "mongodb-stitch-browser-sdk";
  
  export default {
    getAppointments(){
        const client = Stitch.initializeDefaultAppClient('vetoffice-ggcob');
        return client.auth.loginWithCredential(new AnonymousCredential()).then().then(() =>
            client.callFunction("getAppointments")
        )
    }
  }