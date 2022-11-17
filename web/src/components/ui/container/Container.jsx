import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryItem from '../../category/item-category/CategoryItem';
import generalData from '../../../data/general.category.json'



function Container() {
  const [ categories, setCategories] = useState(generalData);


  return (
    < >
      <div >
      <div>

      <div className='grid grid-cols-3 px-8 gap-4'>
        
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


