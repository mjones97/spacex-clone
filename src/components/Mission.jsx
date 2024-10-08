import PropTypes from 'prop-types';
import "./Mission.css"

const Mission = ({ backgroundImage, description, title, buttonText }) => {
    const missionStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <div className="mission" style={missionStyle}>
            <div className="overlay"></div>
            <div className="container">
                <div className="mission-text">
                    <p className="mb-1">{description}</p>
                    <h1 className="mb-1">{title}</h1>
                    <a href="./" className="btn mission-btn">{buttonText}</a>
                </div>
            </div>
        </div>
    )
};

Mission.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default Mission