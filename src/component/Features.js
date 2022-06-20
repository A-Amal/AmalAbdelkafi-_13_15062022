import propTypes from 'prop-types'
import '../index.css'


/**
 * Display features
 * @param {string} srTitle
 * @param children
 * @component
 */
export default function Features({ srTitle, children }) {
    return (
        <section className="features">
            {srTitle && <h2 className="sr-only">{srTitle}</h2>}
            <div className="features-grid">
                {children}
            </div>
        </section>
    )
}
// Props types
Features.propTypes = {
    srTitle: propTypes.string,
}
