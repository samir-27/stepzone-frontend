import item1 from '../assets/brands/nike.png';
import item2 from '../assets/brands/bata.png';
import item3 from '../assets/brands/clarkes.png';
import item4 from '../assets/brands/puma.png';
import item5 from '../assets/brands/reebok.png';
import item6 from '../assets/brands/skechers.png';
import item7 from '../assets/brands/adidas.png';
import BrandCard from './BrandCard';

const Brand = () => {

  const IMAGES = [item1, item2, item3, item4, item5, item6, item7];

  return (
    <div>
        <h1 className='text-4xl font-semibold text-sky-900 py-12'>
          Brands
        </h1>
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {IMAGES.map((image, index) => (
              <BrandCard data={image} key={index} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default Brand;
