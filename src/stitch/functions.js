import {
    Stitch,
    UserPasswordCredential
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient('vetoffice-ggcob');

  export default {
    auth(username, password){
        const credential = new UserPasswordCredential(username, password)
        return client.auth.loginWithCredential(credential);
    },
    logout(){
        return client.auth.logout();
    },
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