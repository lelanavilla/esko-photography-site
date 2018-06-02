import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVideos } from '../redux/videos.js';
import { Link } from 'react-router-dom';
// import './videos.css';



class videosList extends Component {
    componentWillMount() {
        this.props.getVideos();
    }
    renderVideos() {
        return this.props.videos.data.map(video => {
            return (
                <div id="main" role="main">

                    <ul id="gallery" class="clearfix">
                <Link key={video._id} to={`/videos/${video._id}`}>
                    <li className="grid-item">
                        <iframe title={video._id} src={video.url}  width="500" height="300"/>
                    </li>
                </Link>
                </ul>
                
                </div>
            );
        });
    }
    render() {
        return (
            <ul className="video-list">
            {this.renderVideos()} 
            </ul>
        );
    }
}
function mapStateToProps({ videos }) {
    return { videos }
    

}
export default connect(mapStateToProps, { getVideos })(videosList);