import Image from "next/image";

const ShoesCard = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-4">
      {data?.map((shoe) => (
        <div key={shoe.id} className="card bg-base-100 shadow-xl">
          <figure>
            <Image width={500} height={160} src={shoe.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{shoe.title}</h2>
            <p>{shoe.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-success">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoesCard;
