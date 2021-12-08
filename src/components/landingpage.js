import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                       
                        <div className="banner-text">
                            <h1>Mern Stalk Developer</h1>
                            <hr />

                            <p>HTML/CSS | JavaScript | React | NodeJS | ExpressJS | MongoDB | MaterialUI | Bootstrap | CSS Flex | Heroku | Netlify</p>
                            <div className="cv-btn">
                        <a href={require("../components/assets/images/sreechakramresume.pdf")} target="_blank" rel="noopener noreferrer">DownLoad CV</a>
                    </div>
                            <div className="social-links">
                                {/* Facebook social link */}
                                {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                </a> */}
                                {/* LinkedIn social link */}
                                <a href="https://www.linkedin.com/in/sree-chakram-g-07926a225/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* Github social link */}
                                <a href="https://github.com/SreeChakram-004" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/* Google plus social link */}
                                {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-google-plus-square" aria-hidden="true"/>
                                </a> */}
                                {/* Youtube plus social link */}
                                {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a> */}

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
