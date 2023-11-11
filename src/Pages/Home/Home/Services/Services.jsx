import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [asc, setAsc] = useState(true);
  // const [min, setMin] = useState(undefined);
  // const [max, SetMax] = useState(undefined);
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://car-doctor-server-chi-one.vercel.app/services?sort=${
        asc ? "asc" : "desc"
      }&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [asc, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };
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
        <form onSubmit={handleSearch}>
          <input
            className="border border-black"
            type="text"
            name="search"
            id=""
          />
          <input className="btn btn-outline" type="submit" value="Search" />
        </form>
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
