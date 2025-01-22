export const metadata = {
  title: "HomePage",
};
const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();
  return (
    <div>
      <h1 className="text-5xl text-center">Hello From Next js</h1>
      <div className="flex">
        {shoes.slice(0, 3).map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
