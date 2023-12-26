import React, { useContext } from 'react';
import Link from 'next/link';
import Avatar from '../../Avatar';
import ProductBox1Rating from '../ProductBox1/ProductBox1Rating';
import { placeHolderImage } from '../../../../../Data/CommonPath';
import I18NextContext from '@/Helper/I18NextContext';
import SettingContext from '@/Helper/SettingContext';

const ProductBox2 = ({ elem, rating = true, customImageClass }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { convertCurrency } = useContext(SettingContext);
  return (
    <div className='offer-product'>
      {/* Slug to product_code */}
      <Link
        href={`/${i18Lang}/product/${elem.product_code}`}
        className='offer-image'
      >
        <Avatar
          data={elem?.product_thumbnail}
          placeHolder={placeHolderImage}
          name={elem?.name}
          customImageClass={customImageClass}
          height={500}
          width={500}
        />
      </Link>

      <div className='offer-detail'>
        <div>
          <Link
            href={`/${i18Lang}/product/${elem.slug}`}
            className='text-title'
          >
            <h6 className='name'>{elem?.name}</h6>
          </Link>
          {rating ? (
            <ProductBox1Rating totalRating={elem?.rating} />
          ) : (
            <span>{elem?.unit}</span>
          )}
          <h5 className='price theme-color'>
            {convertCurrency(elem?.sale_price)}
            <del className='text-content'>{convertCurrency(elem?.price)}</del>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProductBox2;
