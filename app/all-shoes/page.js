const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();

  return (
    <div>
      <h1 className="text-3xl text-center">All Shoes</h1>
      <div className="grid grid-cols-3 gap-4 p-5">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card bg-base-100  shadow-xl">
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
    </div>
  );
};

export default AllShoesPage;
