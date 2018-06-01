import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../redux/images.js';
import { Link } from 'react-router-dom';


class ImageList extends Component {
    componentWillMount() {
        this.props.getImages();
    }
    renderImages() {
        return this.props.images.data.map(image => {
            return (
                <Link key={image._id} to={`/images/${image._id}`}>
                    <li className="grid-item hover-zoomin">
                        <img src={image.url} alt={image._id} />
                    </li>
                </Link>
            );
        });
    }
    render() {
        return (
            <ul className="image-list">
            {this.renderImages()} 
            </ul>
        );
    }
}
function mapStateToProps({ images }) {
    return { images }
    

}
export default connect(mapStateToProps, { getImages })(ImageList);