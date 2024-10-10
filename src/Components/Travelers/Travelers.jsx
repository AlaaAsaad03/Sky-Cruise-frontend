import React from "react";

//Imported Images
//users
import user1 from "../../asset/user1.jpg";
import user2 from "../../asset/user2.jpg";
import user3 from "../../asset/user3.jpg";
import user4 from "../../asset/user4.jpg";
//destinations
import Paris from "../../asset/Paris.jpg";
import dubiaa from "../../asset/dubiaa.jpg";
import NewYork from "../../asset/NewYork.jpg";
import london from "../../asset/london.jpg";

//High Order Array Method called Map to display all data
const travelers = [
  {
    id: 1,
    destinationImage: Paris,
    travelerImage: user1,
    travelerName: "Alaa Asaad",
    socialLink: "@AlaaAsd",
  },
  {
    id: 2,
    destinationImage: dubiaa,
    travelerImage: user3,
    travelerName: "Joe Doe",
    socialLink: "@Joee23",
  },
  {
    id: 3,
    destinationImage: NewYork,
    travelerImage: user2,
    travelerName: "Rosie Jonson",
    socialLink: "@JonsonRosie",
  },
];

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                //{/*Single Passanger Card */}
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelerImage" />
                    </div>
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
