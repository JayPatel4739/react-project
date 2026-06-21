export default function Entry(props){
    return(
        <div className="entry">
            <div>
                <img src={props.img} alt={props.alt}className="entry-img"/>
            </div>
            <div className="entry-data">
                <div className="entry-meta">
                    <img 
                    src="/src/assets/marker.png" alt="marker-img" className="marker"
                    />
                    <span className="entry-location">{props.location}</span>
                    <a href={props.googleMapsUrl} className="entry-link">View on google maps</a>
                </div>
                <p className="entry-text">{props.title}</p>
                <p className="entry-date">{props.date}</p>
                <p className="entry-description">{props.description}</p>
            </div>
        </div>
    )
}