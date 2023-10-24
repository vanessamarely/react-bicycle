import Card from "../components/Card/Card";

const Bicycle = () => {
  const bicycle = [
    {
      id: 1,
      brand: "Bicycle 1",
      bicycleType: "Mountain Bike",
      color: "Red",
      status: "Available",
      image: "https://source.unsplash.com/1600x900/?bicycle",
    },
    {
      id: 2,
      brand: "Bicycle 2",
      bicycleType: "Mountain Bike",
      color: "Red",
      status: "Available",
      image: "https://source.unsplash.com/1600x900/?bicycle",
    },
    {
      id: 3,
      brand: "Bicycle 3",
      bicycleType: "Mountain Bike",
      color: "Red",
      status: "Available",
      image: "https://source.unsplash.com/1600x900/?bicycle",
    },
  ];
  return (
    <div className="flex flex-wrap gap-2 justify-around">
      {bicycle.map((bicycle) => (
        <Card
          key={bicycle.id}
          status={bicycle.status}
          title={bicycle.brand}
          img={bicycle.image}
        />
      ))}
    </div>
  );
};

export default Bicycle;
