import styles from "./gallery.module.scss";
import Image from "next/image";

let images = [
  { src: "/gallery1.png" },
  { src: "/gallery2.png" },
  { src: "/gallery3.png" },
  { src: "/gallery4.png" },
  { src: "/gallery5.png" },
  { src: "/gallery6.png" },
  { src: "/gallery7.png" },
  { src: "/gallery8.png" },
  { src: "/gallery9.png" },
  { src: "/gallery10.png" },
  { src: "/gallery11.png" },
];

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      {images.map((image) => (
        <div
          key={image.src}
          style={{ backgroundImage: `url(${image.src})` }}
          className={styles.image}
        ></div>
      ))}
    </div>
  );
};

export default Gallery;
