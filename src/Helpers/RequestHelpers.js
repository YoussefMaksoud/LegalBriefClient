import axios from 'axios';

class RequestHelpers{

    //returns the first two options of the tree USA or Canada
    getInitialOptions(){
        //return axios.get("https://legalbriefserver.herokuapp.com/optionsInitial");
        return axios.get("http://localhost:3000/optionsInitial");
    }

    //returns the children of the selected option
    getNextOption(parent){
        //var request = "https://legalbriefserver.herokuapp.com/nextOptionSet" + parent;
        console.log(parent);
        var request = "http://localhost:3000/nextOptionSet/" + parent;
        return axios.get(request);
    }

    sendEmail(content){
        console.log(content);
        //axios.post('https://legalbriefserver.herokuapp.com/send-email', content)
        axios.post('http://localhost:3000/send-email', content)
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