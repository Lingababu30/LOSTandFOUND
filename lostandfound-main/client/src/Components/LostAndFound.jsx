import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavLink } from "react-router-dom";

const LostAndFound = () => {
  return (
    <div>
      <header className="bg-dark text-white text-center py-4">
        <div id="main">
          <img className="img1" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtRJW2lSDTP66YKzeja2HmlTAszEX-Mrg3cWE6zcLAhCIFovko" alt="Description of the image" />
        </div>
      </header>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-center mb-4">
              Found Something? Share the Discovery on Our Found Page!
            </h1>
            <p>
              Discovering lost items can be just as rewarding as finding your
              own. If you've stumbled upon something on the CBIT campus, help us
              reunite it with its owner by sharing a picture and details on our
              Found Page. Your contribution could be the key to returning a
              valuable possession to someone who's been searching for it. Join
              our community effort in making CBIT a place where lost items find
              their way home.
            </p>
            <div className="text-center">
              <NavLink to="home">
                <button className="btn btn-warning btn-lg">Lets start</button>
              </NavLink>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="https://i0.wp.com/lost-found.org/wp-content/uploads/lost-and-found-service.png?resize=768%2C458&ssl=1"
              className="img-fluid rounded"
              alt="pic related to lost"
            />
          </div>
        </div>
      </div>

      <section className="section mt-5">
        <div className="container" id="lost-container">
          <img className="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojWzNS1ks64aJAJPM5GdtCTn9lwSUDzVnhtEjXBH58LIYsZE7" alt="lost icon" />
          <h2>Lost Yours .. </h2>
          <p>We will help You to recover the lost item. 
            Go the page you will find the list of items which are lost recently</p>
        </div>

        <div className="container" id="found-container">
          <img className="pic" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjEjAEXCbOErx9qTfKpLzm58eJGA7269hNLaEYqPRW4Cjq1JQr" alt="found icon" />
          <h2>Found Something then Post!!</h2>
          <p>if u had found something in college then you can visit  our page..
             post the the item you Found </p>
        </div>

        <div className="container" id="lost-container">
          <img className="pic" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2r8neY8N3pY_fEi2d6MOIfSufsuRYePtifVIHY6VYUd2XHeUM" alt="find icon" />
          <h2>Search..?</h2>
          <p>If You lost something..
            You can visit our website and find for your lost items 
          </p>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2023 Lost and Found. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LostAndFound;
