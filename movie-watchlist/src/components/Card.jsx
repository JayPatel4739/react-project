import eye from "../assets/eye.png"
import hidden from "../assets/hidden.png"

export default function Card(props) {
  return (
    <div className="card-wrapper" role="article" aria-label={`${props.title} — ${props.genre}, ${props.year}`}>
      <img
        className="card-img"
        src={props.image}
        alt={`${props.title} poster`}
        loading="lazy"
      />
      <div className="card-body">
        <p className="card-title" title={props.title}>{props.title}</p>
        <div className="card-meta">
          <span className="rating">
            <span className="rating-star" aria-hidden="true">★</span>
            {props.rating}
          </span>
          <span className="card-year">{props.year}</span>
        </div>
        <div className="card-meta" style={{ marginTop: 8 }}>
          {props.genre && <span className="card-year">{props.genre}</span>}
          <img
            onClick={() => props.watchedToggle()}
            className={`eye-icon${props.watched ? " watched" : ""}`}
            src={props.watched ? hidden : eye}
            alt={props.watched ? "Watched" : "Not watched"}
            aria-label={props.watched ? "You have watched this" : "You have not watched this"}
          />
        </div>
      </div>
    </div>
  )
}
