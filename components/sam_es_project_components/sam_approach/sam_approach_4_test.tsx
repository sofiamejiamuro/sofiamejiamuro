import React from 'react';
import TestDifferences from '../sam_test/test_differences';
import TestMethodology from '../sam_test/test_methodology';

export default function SamTest() {
  return (
    <div className='
    mb-10 max-w
    leading-8 sm:mb-10
    p-10
    sm:p-20
    scroll-mt-28
    h-auto
    bg-violet-100'
    id="test">
      <TestDifferences />
      <TestMethodology />
    </div>
  )
}
