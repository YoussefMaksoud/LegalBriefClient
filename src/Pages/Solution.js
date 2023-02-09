import {React, Component} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Option from '../Components/Option';
import '../Styling/Solution.css';
import RequestHelpers from '../Helpers/RequestHelpers';
import Destination from './Destination';


class SolutionPage extends Component{
    constructor(){
        super();

        this.state = {
            option_list: [],
            completed: 100,
            current_title: "",
            current_description: ""
        }

        this.setOptionInitial = this.setOptionInitial.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    componentDidMount(){
        this.setOptionInitial();
    }

    setOptionInitial(){
        RequestHelpers.getInitialOptions().then((response) => {
            this.setState({option_list: response.data.message});
        }).catch(function(ex){
            console.log("error:", ex);
        });
    }

    nextPage(parent){
        RequestHelpers.getNextOption(parent.option_id).then((response) => {
            this.setState({option_list: response.data.message});
            this.setState({current_title: parent.option_name})
            this.setState({current_description: parent.option_description})

            if(response.data.message.length == 0){
                console.log("done");
                this.setState({completed: 0});
            }
            
        }).catch(function(ex){
            console.log("error:", ex);
        });

    }

    render(){
        return(
            <div id = 'sol-container'>
                <Navbar/>
                
                
                {this.state.completed != 0 ? (
                   <div id = 'option-container'>
                        <h1>Questionnaire</h1>
                        <h2>Please select the option that applies best:</h2>
                        {this.state.option_list.map((item) => {
                            return  <div className = "option-cont" onClick = {() => this.nextPage(item)}>
                                        <Option id = "option" 
                                                option_name = {item.option_name}
                                                option_description = {item.option_description}
                                                option_id = {item.option_id}
                                        />
                                    </div>
                        })}
                    </div> 
                ) : (
                    <Destination title = {this.state.current_title}/>
                )}
                    
                <Footer/>
            </div>
        )
    }
}

export default SolutionPage;