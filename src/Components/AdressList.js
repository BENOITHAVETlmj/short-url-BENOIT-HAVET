import React from "react";
import Loader from "react-loader-spinner";

const AdressList = ({ isLoading, adressList }) => {
  if (isLoading === true) {
    return (
      <Loader Loader type="Rings" color="purple" height={100} width={100} />
    );
  } else {
    return (
      <div className="container">
        <section>
          <h2>Original URL</h2>
          <h2>Short URL</h2>
          <h2>Visits</h2>
        </section>
        <ul className="adresses-list">
          {adressList.map(newUrl => {
            return (
              <li key={newUrl._id} className="adress">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={newUrl.originalUrl}
                >
                  {newUrl.originalUrl}
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={newUrl.shortUrl}
                >
                  {" "}
                  http://localhost:3001/{newUrl.shortUrl}
                </a>
                <span>{newUrl.visits}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default AdressList;
