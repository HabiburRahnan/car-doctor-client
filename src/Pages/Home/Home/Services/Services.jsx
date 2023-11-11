import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [asc, setAsc] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services?sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [asc]);
  return (
    <div className="mt-4">
      <div className="text-center">
        <h2 className="text-3xl text-orange-600  font-bold">Our Service</h2>
        <h3 className="text-5xl">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour,
          <br />
          or randomised words which dont look even slightly believable.
        </p>
        <button onClick={() => setAsc(!asc)} className="btn btn-secondary">
          {asc ? "Price High to Low" : "price Low to High"}
        </button>
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
