import React from 'react'
import upimg from '../assets/gta6copy1.jpg'
import botimg1 from '../assets/callofduty.jpg'
import botimg2 from '../assets/LostSoulAside.jpg'

function Upgames(){
  return(
    <div className="upcoming-section container-fluid py-5">
<h1 className="title mb-4">UPCOMING GAMES</h1>


<div className="big-banner mb-4">
<a href="/gta6"><img
src={upimg}
alt="GTA 6"
className="big-image"
/></a>
</div>


<div className="row g-4">
<div className="col-md-6">
<div className="small-banner">
<a href="/callofduty"><img src={botimg1} alt="COD" className="small-image" /></a>
</div>
</div>


<div className="col-md-6">
<div className="small-banner">
<a href="/lastsoutaside"></a><img
src={botimg2}
alt="DMC"
className="small-image"
/>
</div>
</div>
</div>
</div>
);
}
export default Upgames;
