import React from 'react'

const AboutWork = () => {
  return (
    <>
    <div className='About_Work_box' >
        <h2 className='text-center '>Build, organize, and collaborate on work in one <br/> place from virtually anywhere</h2>

<div className='d-md-flex  mt-5'>
    <div className=' col-md-5 text_box p-3' >
        <div className='m-auto ' style={{maxWidth: "18rem"}}>

      {/* .... */}
      <div className="card bg-light  mb-3 " style={{maxWidth: "18rem"}}>
      <div className="card-header">Header</div>
     <div className="card-body">
    <h5 className="card-title">Light card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
   </div>
      {/* .... */}
       {/* .... */}
       <div className="card bg-lightmb-3" style={{maxWidth: "18rem"}}>
      <div className="card-header">Header</div>
     <div className="card-body">
    <h5 className="card-title">Light card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
   </div>
      {/* .... */}
      </div>

    </div>

    <div className='col-md-7 image_gif_box pb-3'style={{height:"70vh" }} >
      <img src="loading.gif" alt="gif" style={{width:"100%" , height:"100%"}}/>
      </div>
  
</div>

    </div>
    <style jsx>{`
.About_Work_box {
    background-color: #deebff;
  height: 100%;
  width: 100%;
//   border: 1px solid black; 
 
}
  
.text_box{
    // background-color: yellow;
}
.image_gif_box{
    // background-color: pink;
}


`}</style>
      
    </>
  )
}

export default AboutWork
