import {
    Stitch,
    AnonymousCredential
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient('vetoffice-ggcob');
client.auth.loginWithCredential(new AnonymousCredential());

  export default {
    getAppointments(){
        return client.callFunction("getAppointments");
    },
    getPatient(id){
        return client.callFunction("getPatient", [id]);
    },
    savePet(pet){
        return client.callFunction("setPatient", [pet]);
    }
  }