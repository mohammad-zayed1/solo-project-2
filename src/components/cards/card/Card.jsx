/* eslint-disable react/prop-types */
import { IoLocationSharp } from "react-icons/io5";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img src={`./public/img/${props.imageUrl}`} alt={props.title} />
        <div className="info">
          <div className="location">
            <IoLocationSharp className="map-icon" />
            <div className="city">{props.location}</div>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <div className="title">
            <h1>{props.title}</h1>
            <div className="date">
              {props.startDate} - {props.endDate}
            </div>
          </div>
          <div className="description">{props.description}</div>
        </div>
      </div>
    </>
  );
}
