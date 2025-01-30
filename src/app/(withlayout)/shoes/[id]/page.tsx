import Image from "next/image";

interface Shoe {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

const ShoeDetails = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:5000/shoes/${params?.id}`);
  const shoe: Shoe = await res.json();

  return (
    <div className="max-w-2xl mx-auto my-5 p-6 shadow-lg border rounded-lg">
      <Image
        width={300}
        height={200}
        layout="responsive"
        src={shoe.image}
        alt={shoe.title}
      />
      <h1 className="text-3xl font-semibold mt-4">{shoe.title}</h1>
      <p className="mt-2">{shoe.description}</p>
      <p className="text-lg font-bold text-green-600 mt-2">${shoe.price}</p>
      <button className="btn btn-primary mt-4">Buy Now</button>
    </div>
  );
};

export default ShoeDetails;
