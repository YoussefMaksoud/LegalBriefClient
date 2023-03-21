import axios from 'axios';

class RequestHelpers{

    //returns the first two options of the tree USA or Canada
    getInitialOptions(){
        return axios.get("https://legalbrief.herokuapp.com/optionsInitial");
        //return axios.get("http://localhost:8080/optionsInitial");
    }

    //returns the children of the selected option
    getNextOption(parent){
        var request = "https://legalbrief.herokuapp.com/nextOptionSet/" + parent;
        console.log(parent);
        //var request = "http://localhost:8080/nextOptionSet/" + parent;
        return axios.get(request);
    }

    sendEmail(content){
        console.log(content);
        axios.post('https://legalbrief.herokuapp.com/send-email', content)
        //axios.post('http://localhost:8080/send-email', content)
        .then(response => {
            console.log(response.data);
        }).catch(
            function (error) {
              console.log('Show error notification!')
              return Promise.reject(error)
            }
        );
    }
}

export default new RequestHelpers();