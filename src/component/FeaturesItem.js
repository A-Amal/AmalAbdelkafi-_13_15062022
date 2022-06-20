import propTypes from 'prop-types'
import '../index.css'



/**
 * Display features item
 * @param {string} picture
 * @param {string} pictureAlt
 * @param children
 * @component
 */
export default function FeaturesItem({ picture, pictureAlt, children }) {
    return (
        <div className="feature-item">
            <img src={picture} alt={pictureAlt || ''} className="feature-icon" />
            {children}
        </div>
    )
}
// Props types
FeaturesItem.propTypes = {
    picture: propTypes.string,
    pictureAlt: propTypes.string,
}
