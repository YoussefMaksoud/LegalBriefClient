import {React, Component} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Option from '../Components/Option';
import '../Styling/Solution.css';
import RequestHelpers from '../Helpers/RequestHelpers';


class SolutionPage extends Component{
    constructor(){
        super();

        this.state = {
            option_list: []
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
            console.log(this.state.option_list[0]);
        }).catch(function(ex){
            console.log("error:", ex);
        });
    }

    nextPage(parent){
        RequestHelpers.getNextOption(parent).then((response) => {
            this.setState({option_list: response.data.message});
            console.log("Next Page");
            console.log(this.state.option_list[0]);
        }).catch(function(ex){
            console.log("error:", ex);
        });
    }

    render(){
        return(
            <div id = 'sol-container'>
                <Navbar/>
                <div id = 'option-container'>
                    <h1>Questionnaire</h1>
                    <h2>Please select the option that applies best:</h2>
                    {this.state.option_list.map((item) => {
                        return  <div className = "option-cont">
                                    <Option id = "option" onClick = {() => this.nextPage(item.option_name)}
                                            option_name = {item.option_name}
                                            option_description = {item.option_description}
                                    />
                                </div>
                    })}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default SolutionPage;