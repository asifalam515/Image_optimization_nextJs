const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">Image Optimizations</h1>
      <h2 className="text-center">Regular Image with Image Tag</h2>
      <img
        className="mx-auto"
        src="https://nextjs.org/api/docs-og?title=Components%20%3CImage%3E"
        alt="basic img"
      />
    </div>
  );
};

export default GalleryPage;
