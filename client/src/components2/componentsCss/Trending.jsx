import React from 'react'
import '../componentsCss/categories.css'
function Trending() {
  return (
   <div className='TrendingHome'>
    <h1>Trending</h1>
     <div className='trendingContainer'>

<div className="trend">
     <img src="https://i.pinimg.com/564x/70/f7/4a/70f74ae5f0b5642a6dce805ff13d350c.jpg" alt="" /> 
<div className="trendDesc">
<p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, at?</p>
</div>

</div>
<div className="trend">
     <img src="https://i.pinimg.com/564x/4e/3e/73/4e3e7316768a7f33a11c4fc1f788c337.jpg" alt="" /> 
     <div className="trendDesc">
<p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, at?</p>
</div>
</div>
<div className="trend">
     <img src="https://i.pinimg.com/564x/0a/0f/fb/0a0ffbc5da6b146555a4db46034c0c4a.jpg" alt="" /> 
     <div className="trendDesc">
<p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, at?</p>
</div>
</div>


</div>
   </div>
  )
}

export default Trending