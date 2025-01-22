import Image from "next/image";
// import nextImage from "../../src/asset/next_img.png";
import nextImage from "@/src/asset/next_img.png";

export const metadata = {
  title: "Gallery Page",
  description: "Gallery Will be Here",
};

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">
        Image Optimizations by Next Image
      </h1>

      <br />
      <Image
        src={nextImage}
        alt="next image"
        // fill
        width={500}
        height={500}
        quality={100}
      ></Image>
    </div>
  );
};

export default GalleryPage;
