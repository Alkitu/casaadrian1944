import React from 'react'

function CategoryItem({image, name_en}) {
  return (
    <div class="rounded overflow-hidden shadow-lg">
    <img class="w-full" src={image} alt="Mountain"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{name_en}</div>
      
    </div>
  </div>
  
  );
};

export default CategoryItem