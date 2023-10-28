import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();

  const { title, price, _id, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const fistName = form.fistName.value;
    const lastName = form.lastName.value;
    const email = user?.email;
    const number = form.number.value;
    const date = form.date.value;
    const due = form.due.value;
    const name = fistName + " " + lastName;
    const booking = {
      customerName: name,
      email,
      img,
      service: title,
      service_id: _id,
      price,
      date,
      number,
      due,
    };

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("serves booked successfully");
        }
      });
  };
  return (
    <div className="my-5">
      <h2 className="text-center text-3xl text-orange-600 font-bold">
        Book Service: {title}
      </h2>

      <form onSubmit={handleBookService} className="card-body">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              name="fistName"
              defaultValue={user?.displayName}
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Phone</span>
            </label>
            <input
              type="number"
              name="number"
              placeholder="Your Phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Due</span>
            </label>
            <input
              type="text"
              name="due"
              defaultValue={"$" + " " + price}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <input
              type="text"
              name="massage"
              placeholder="Your Message"
              className="input input-bordered"
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn btn-block text-white bg-[#FF3811] hover:bg-[#FF3811]"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
