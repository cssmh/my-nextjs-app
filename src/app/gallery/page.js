import Image from "next/image";

const Gallery = () => {
    return (
        <div className="mt-2">
            <Image alt="meherun" loading="lazy" width={300} height={300} className="mx-auto" src="https://i.ibb.co.com/2qG9k3c/meherun.jpg" />
        </div>
    );
};

export default Gallery;