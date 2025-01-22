import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">Image Optimizations</h1>
      <h2 className="text-center text-2xl">Regular Image with Image Tag</h2>
      <br />
      <img
        className="mx-auto"
        src="https://nextjs.org/api/docs-og?title=Components%20%3CImage%3E"
        alt="basic img"
      />
      <br />
      <Image
        className="mx-auto"
        src="https://nextjs.org/api/docs-og?title=Components%20%3CImage%3E"
        alt="next image"
        width={500}
        height={500}
        quality={100}
      ></Image>
    </div>
  );
};

export default GalleryPage;
