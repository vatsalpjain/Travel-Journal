export default function Entry(props) {
  return (
    <div className="Entry">
      <div className="Entryimg">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="Entryinfo">
        <div className="Entryinfo-top">
          <img src="/marker.png" alt="location marker" />
          <span>{props.country}</span>
          <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>
        <h2>{props.title}</h2>
        <span className="date">{props.dates}</span>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
