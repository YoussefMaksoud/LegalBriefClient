import React, {Component} from 'react';

class GoogleAd extends Component{
    componentDidMount(){
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render(){
        return(
            <div id = 'ad-container'>
                <script
                    async
                    src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">

                </script>
                <ins 
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-1359209284830626"
                    data-ad-slot={this.props.slot}
                    data-ad-format="auto"
                    data-full-width-responsive="true">
                </ins>
            </div>
        );
    }
}

export default GoogleAd;