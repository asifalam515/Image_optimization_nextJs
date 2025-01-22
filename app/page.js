import Link from "next/link";

export const metadata = {
  title: "HomePage",
};
const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 30,
    },
  });
  const shoes = await res.json();
  throw new Error("Error From Home Page");
  return (
    <div className="text-center my-5">
      <h1 className="text-5xl text-center">Hello From Next js part 12</h1>
      <div className="flex justify-between p-5">
        {shoes.slice(0, 3).map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary"> {shoe.price} </div>
              </h2>
              <p> {shoe.details} </p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Buy Now</button>
                <button className="btn btn-outline btn-secondary">
                  Show Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/all-shoes" className="btn btn-outline btn-primary">
        See More
      </Link>
    </div>
  );
};

export default HomePage;
