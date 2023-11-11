import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
// import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [bookings, setBookings] = useState([]);
  const url = `https://car-doctor-server-chi-one.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    // axios(url, { withCredentials: true }).then((res) => {
    //   setBookings(res.data);
    // });
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBookings(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("are you Sure you want to delete");
    // console.log(id);
    if (proceed) {
      fetch(`https://car-doctor-server-chi-one.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`https://car-doctor-server-chi-one.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update status
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };
  return (
    <div>
      <h2 className="text-5xl">Bookings:{bookings.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Service</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleConfirm={handleConfirm}></BookingRow>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
