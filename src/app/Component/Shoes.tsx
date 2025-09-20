import Image from "next/image";
import Link from "next/link";

interface Shoe {
  id: string;
  image: string;
  title: string;
  description: string;
}

const ShoesCard = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 30,
    },
  });
  const data: Shoe[] = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((shoe) => (
          <div
            key={shoe.id}
            className="group card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-primary/20"
          >
            <figure className="relative overflow-hidden rounded-t-2xl">
              <Image
                width={400}
                height={300}
                src={shoe.image}
                alt={shoe.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </figure>

            <div className="card-body p-6">
              <h2 className="card-title text-lg font-bold text-gray-800 group-hover:text-primary transition-colors duration-200">
                {shoe.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {shoe.description}
              </p>

              <div className="card-actions justify-between items-center mt-4">
                <div className="badge badge-outline badge-primary">
                  Featured
                </div>
                <Link href={`/shoes/${shoe.id}`}>
                  <button className="btn btn-primary btn-sm hover:btn-primary-focus transition-all duration-200 shadow-md hover:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoesCard;
