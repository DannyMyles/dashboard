import { countriesData } from "../../Data/Data";
import { platformData } from "../../Data/Data";
import "./donut.css";
const Donut = () => {
  return (
    <>
      <div className="donut_container">
        <div className="top_location">
          <div className="top_location_spans">
            <span>Top Location</span>
            <span>View full reports</span>
          </div>
          {countriesData.map((country) => (
            <div key={country.name} className="donut_location">
              <div className="donut_location_img">{country.img}</div>
              <div className="donut_location_name">{country.name}</div>
              <div className="donut_location_percentage">
                {country.percentage}
              </div>
              <div className="donut_location_color" style={{ backgroundColor: country.backgroundColor }}></div>
            </div>
          ))}
        </div>
        <div className="top_location">
          <div className="top_location_spans">
            <span>Top Location</span>
            <span>View full reports</span>
          </div>
          {platformData.map((platform) => (
            <div key={platform.name} className="donut_location">
              <div className="donut_location_img">{platform.img}</div>
              <div className="donut_location_name">{platform.name}</div>
              <div className="donut_location_percentage">
                {platform.percentage}
              </div>
              <div className="donut_location_color" style={{ backgroundColor: platform.backgroundColor}}></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Donut;