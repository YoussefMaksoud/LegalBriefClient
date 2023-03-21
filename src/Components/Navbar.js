import {React, Component} from 'react';
import "../Styling/Navbar.css"
import {NavItems} from '../Helpers/NavItems'
import {Link} from 'react-router-dom';



class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0,
            isMobile: window.innerWidth <= 900,
            navOpen: false
        };
        this.updateDimenstions = this.updateDimenstions.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    updateDimenstions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight})

        if(this.state.width <= 900){
            this.setState({isMobile: true});
        }else{
            this.setState({isMobile: false});
        }
    }

    handleMenuClick = () => {
        if(this.state.navOpen){
            this.setState({navOpen: false});
            console.log("close");
        }else{
            this.setState({navOpen: true});
            console.log("open");
        }
        
    }

    componentDidMount(){
        window.addEventListener('resize', this.updateDimenstions);
    }

    render() {
        if(this.state.isMobile){
            return ( 
                <div className = {this.props.className}>
                    <div className = "NavItems-mobile">
                        <h1 className = "navbar-logo-mobile">LegalBrief</h1>
                        <div className = 'hamburger' onClick={this.handleMenuClick}>
                            <span className = 'h-spans'>___</span>
                            <span className = 'h-spans'>___</span>
                            <span className = 'h-spans'>___</span>
                        </div>
                    </div>
                    <div className = "NavMenu-Mobile">
                            {NavItems.map((item, index) => {
                                return(
                                    <li key = {index}>
                                        <Link className = {item.cName} to = {item.url} >
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                            <style jsx>{`
                                .NavMenu-Mobile{
                                    display: ${this.state.navOpen ? 'inline' : 'none'};
                                }
                            `}</style>
                    </div>
            </div>
            )
        }else{
            return (
                <div className = {this.props.className}>
                    <nav className = "NavItems">
                        <h1 className = "navbar-logo">LegalBrief</h1>
                        <div className = "menu-icon">
        
                        </div>
                        <ul className = "NavMenu">
                            {NavItems.map((item, index) => {
                                return(
                                    <li key = {index}>
                                        <Link className = {item.cName} to = {item.url} >
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
            </div>
            )
        }
    }
}

export default Navbar;