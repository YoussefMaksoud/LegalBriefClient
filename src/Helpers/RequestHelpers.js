import axios from 'axios';

class RequestHelpers{

    //returns the first two options of the tree USA or Canada
    getInitialOptions(){
        return axios.get("http://localhost:3002/optionsInitial");
    }

    //returns the children of the selected option
    getNextOption(parent){
        var request = "http://localhost:3002/nextOptionSet" + parent;
        return axios.get(request);
    }
}

export default new RequestHelpers();