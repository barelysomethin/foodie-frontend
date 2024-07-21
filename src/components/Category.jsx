import React from 'react';
import { useState } from 'react';
function CategorySelector() {
    const [active, setactive] = useState(0)
  
    
  return (
    <div className="category-selector">
      <h1>so, you're puzzled with?</h1>
      <button className={active===1? 'activebtn':'button'} onClick={()=>setactive(1)}><div className='svgcategory'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-80h240q33 0 56.5-23.5T640-440v-320H240v320q0 33 23.5 56.5T320-360Zm400-280h80v-120h-80v120ZM320-360h-80 400-320Z" className={active===1? 'activesvg':'svgicon'}/></svg> </div>Breakfast</button>
      <button className={active===2? 'activebtn': 'button'}onClick={()=>setactive(2)}><div className='svgcategory'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M160-120q-33 0-56.5-23.5T80-200v-120h800v120q0 33-23.5 56.5T800-120H160Zm0-120v40h640v-40H160Zm320-180q-36 0-57 20t-77 20q-56 0-76-20t-56-20q-36 0-57 20t-77 20v-80q36 0 57-20t77-20q56 0 76 20t56 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 56-20t76-20q56 0 79 20t55 20v80q-56 0-75-20t-55-20q-36 0-58 20t-78 20q-56 0-77-20t-57-20ZM80-560v-40q0-115 108.5-177.5T480-840q183 0 291.5 62.5T880-600v40H80Zm400-200q-124 0-207.5 31T166-640h628q-23-58-106.5-89T480-760Zm0 520Zm0-400Z" className={active===2? 'activesvg':'svgicon'}/></svg></div>Lunch</button>
      <button className={active===3? 'activebtn': 'button'} onClick={()=>setactive(3)}><div className='svgcategory'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="m160-120-80-80h800l-80 80H160Zm-40-120q6-18 16-34t24-30v-296h-40v-60h40v-30h-40v-60h40v-30h-40v-60h280q33 0 56.5 23.5T480-760v10h360v60H480v10q0 33-23.5 56.5T400-600h-80v244q14 2 28 6t26 12q26-65 83-103.5T583-480q90 0 153.5 61.5T800-268v28H120Zm334-80h252q-17-36-50-58t-73-22q-42 0-77 21t-52 59ZM320-750h80v-30h-80v30Zm0 90h80v-30h-80v30Zm-100-90h40v-30h-40v30Zm0 90h40v-30h-40v30Zm0 314q10-5 19.5-7.5T260-358v-242h-40v254Zm360 26Z" className={active===3? 'activesvg':'svgicon'}/></svg></div>Dinner</button>
    </div>
  );
}

export default CategorySelector;
