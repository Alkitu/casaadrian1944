import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryItem from '../../category/item-category/CategoryItem';
import generalData from '../../../data/general.category.json'



function Container() {
  const [ categories, setCategories] = useState(generalData);


  return (
    < >
      <div className="p-8">
      <div className='grid grid-rows-3'>

      <div className='p-3 flex item-center justify-center'>
      {categories.map(category =>
     
        <CategoryItem {...category} key={category.id} />
        )}
      </div>
     
      </div>
    
      </div>
    </>
  )
}

export default Container


