'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import English from '../../../../public/assets/images/country/English.png';

const TopLanguage = () => {
  const selectedLang = {
    id: 1,
    title: 'English',
    icon: 'en',
    image: English,
    isLang: '/en/',
  };

  return (
    <div
      caret
      className='select-dropdown'
      style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
      id='select-language'
    >
      {selectedLang?.image && (
        <Image
          src={selectedLang?.image}
          className='img-fluid'
          alt='Language Name'
          height={20}
          width={20}
        />
      )}
      <span>{selectedLang?.title}</span>
    </div>
  );
};

export default TopLanguage;
