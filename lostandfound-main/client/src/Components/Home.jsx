
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function Home() {
    const [name, setName] = useState();
    const [place, setPlace] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [yourname, setYourname] = useState();
    const [contact, setContact] = useState();
    const [message, setMessage] = useState();
    const [data, setData] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:3001/lostitems", {
                name: name,
                place: place,
                description: description,
                date: date,
                yourname: yourname,
                contact: contact,
                message: message,
            })
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
    };

    const getData = () => {
        axios
            .get("http://localhost:3001/getlostitems")
            .then((result) => {
                setData(result.data);
            })
            .catch((err) => console.log(err));

        console.log(data);
    };

    return (
        <>
            <div className="section bg-dark">
                <div className="row">
                    <div className="col">
                        <button
                            type="button"
                            className="btn btn-primary my-3"
                            data-bs-toggle="modal"
                            data-bs-target="#club"
                        >
                            Found then Post!!
                        </button>

                        <button className="btn btn-success mx-5" onClick={() => getData()}>
                            Lost items
                        </button>
                        <div className="mb-3">
                            <label htmlFor="search" className="form-label">
                                Search:
                            </label>
                            <input
                                type="text"
                                className="form-control border-bottom border-warning bg-light text-light"
                                placeholder="Search by name, place, etc."
                            />
                        </div>

                        <div className="modal fade " id="club">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content bg-dark text-light">
                                    <div className="modal-header text-dark border-0">
                                        <button
                                            className="btn-close bg-light"
                                            data-bs-dismiss="modal"
                                        ></button>
                                    </div>

                                    <div className="modal-body text-light pt-0">
                                        <div className="container mt-5">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-2">
                                                    <h4 className="text-center ">
                                                        Details of Found Item
                                                    </h4>
                                                    <label htmlFor="name" className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control border-bottom border-warning bg-dark text-light"
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="place" className="form-label">
                                                        Found at :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control border-bottom border-warning bg-dark text-light"
                                                        onChange={(e) => setPlace(e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="description" className="form-label">
                                                        Description
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control border-bottom border-warning bg-dark text-light"
                                                        onChange={(e) => setDescription(e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="date" className="form-label">
                                                        Found on Date:
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className="form-control border-bottom border-warning bg-dark text-light"
                                                        onChange={(e) => setDate(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="yourname" className="form-label">
                                                        Your Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control border-bottom border-warning bg-dark text-light"
                                                        onChange={(e) => setYourname(e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="number" className="form-label">
                                                        Contact No:
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        className="form-control border-bottom border-warning bg-dark text-light"
                                                        placeholder="Enter your phone number"
                                                        onChange={(e) => setContact(e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="message" className="form-label">
                                                        Anything wanna say to person looking for it.?
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control border-bottom border-warning bg-dark text-light"
                                                        onChange={(e) => setMessage(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-light "
                                                    data-bs-dismiss="modal"
                                                >
                                                    Post it..
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="row">
                    <div className="col">
                        <table class="table table-dark table-hover mt-3">
                            <thead>
                                <tr>
                                    <th>Name of item</th>
                                    <th>Found at place</th>
                                    <th>Description</th>
                                    <th>Found on Date</th>
                                    <th>Name</th>
                                    <th>Contact No:</th>
                                    <th>Any Meassage:</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {data &&
                                    data.map((member) => {
                                        return (
                                            <tr>
                                                <td>{member.name}</td>
                                                <td>{member.place}</td>
                                                <td>{member.description}</td>
                                                <td>{member.date}</td>
                                                <td>{member.yourname}</td>
                                                <td>{member.contact}</td>
                                                <td>{member.message}</td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
