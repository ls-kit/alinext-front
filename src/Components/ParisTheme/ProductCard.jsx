import React, { useContext } from 'react';
import { Col } from 'reactstrap';
import ProductSection1 from './ProductSections/ProductSection1';
import ProductSection2 from './ProductSections/ProductSection2';
import ShowCaseBanner from './ShowCaseBanner';
import ProductSection3 from './ProductSections/ProductSection3';
import SingleBanner from './SingleBanner';
import TwoBanners from './TwoBanners';
import ProductSection4 from './ProductSections/ProductSection4';
import VegetableBanner from './VegetableBanner';
import FeatureBlog from './FeatureBlog';
import CustomHeading from '../Common/CustomHeading';
import {
  categorySliderOption,
  featureBlogSliderOption,
} from '../../../Data/SliderSettingsData';
import { LeafSVG } from '../Common/CommonSVG';
import ProductIdsContext from '@/Helper/ProductIdsContext';
import { section_products } from '@/Utils/AxiosUtils/API';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ProductCard = ({ dataAPI }) => {
  const { filteredProduct } = useContext(ProductIdsContext);

  // fetch section_one
  const fetchSectionOne = async () => {
    const result = axios.get(`${section_products}/section_one`);
    return result;
  };

  // tanstack query
  const { data, isLoading, error } = useQuery({
    queryKey: ['section_one'],
    queryFn: fetchSectionOne,
  });

  if (isLoading) {
    console.log('loading');
    return <div>Loading</div>;
  }

  if (error) {
    console.log('Error:', error.message);
  }

  console.log(data.data.data.products);
  const parsedProducts = data.data.data.products;
  const inJson = JSON.parse(parsedProducts);
  console.log(inJson.Content);

  return (
    <Col
      xxl={dataAPI?.main_content?.sidebar?.status ? 9 : 12}
      xl={dataAPI?.main_content?.sidebar?.status ? 8 : 12}
    >
      {dataAPI?.main_content?.section1_products?.status &&
        dataAPI?.main_content?.section1_products?.product_ids.length > 0 && (
          <ProductSection1
            // dataAPI={dataAPI?.main_content?.section1_products}
            dataAPI={inJson.Content}
            ProductData={filteredProduct}
            svgUrl={<LeafSVG className='icon-width' />}
            noCustomClass={true}
            classObj={{ productStyle: 'product-modern', productBoxClass: '' }}
          />
        )}
      {dataAPI?.main_content?.section2_categories_list?.status && (
        <ProductSection2
          isHeadingVisible={true}
          dataAPI={dataAPI?.main_content?.section2_categories_list}
          svgUrl={<LeafSVG className='icon-width' />}
          classes={{ sliderOption: categorySliderOption }}
        />
      )}
      {dataAPI?.main_content?.section3_two_column_banners?.status && (
        <ShowCaseBanner
          dataAPI={dataAPI?.main_content?.section3_two_column_banners}
        />
      )}
      {dataAPI?.main_content?.section4_products?.status && (
        <ProductSection3
          dataAPI={dataAPI?.main_content?.section4_products}
          ProductData={filteredProduct}
          svgUrl={<LeafSVG className='icon-width' />}
        />
      )}
      {dataAPI?.main_content?.section5_coupons?.status && (
        <SingleBanner
          classes={{ sectionClass: 'section-t-space sale-banner' }}
          image_url={dataAPI?.main_content?.section5_coupons?.image_url}
          height={138}
          width={1137}
          dataAPI={dataAPI?.main_content?.section5_coupons}
        />
      )}
      {dataAPI?.main_content?.section6_two_column_banners?.status && (
        <TwoBanners dataAPI={dataAPI} />
      )}
      {dataAPI?.main_content?.section7_products?.status && (
        <ProductSection4
          dataAPI={dataAPI?.main_content?.section7_products}
          ProductData={filteredProduct}
          svgUrl={<LeafSVG className='icon-width' />}
          noCustomClass={true}
        />
      )}
      {dataAPI?.main_content?.section8_full_width_banner?.status && (
        <VegetableBanner dataAPI={dataAPI} />
      )}
      {dataAPI?.main_content?.section9_featured_blogs?.status && (
        <>
          <CustomHeading
            title={dataAPI?.main_content?.section9_featured_blogs?.title}
            subTitle={
              dataAPI?.main_content?.section9_featured_blogs?.description
            }
            svgUrl={<LeafSVG className='icon-width' />}
            customClass='section-t-space title'
          />
          <FeatureBlog
            dataAPI={dataAPI?.main_content?.section9_featured_blogs}
            svgUrl={<LeafSVG className='icon-width' />}
            classes={{
              sliderClass: 'slider-3-blog ratio_65 no-arrow product-wrapper',
              sliderOption: featureBlogSliderOption,
            }}
          />
        </>
      )}
    </Col>
  );
};

export default ProductCard;
