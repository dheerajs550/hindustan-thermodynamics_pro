import React from 'react'

const Customers = () => {
  return (
    <>
    <div className='inear-gradient3 pt-5 '>
        <h2 className=' text-center m-5'>96% of customers say our integrations are superior*</h2>
        <p className=' text-center'>Designed for depth and speed—and it shows. Try Confluence with Slack, Jira, Trello, <br/>
         Microsoft, or 3,000 others to see for yourself.
        </p>

        <div className='row ml-0 mr-0 justify-content-around  p-3 pb-0' >
            <div className='col-md-2 customers_Logo mb-3 d-flex justify-content-center align-items-center'>
                logo
            </div>
            <div className='col-md-2 customers_Logo mb-3 d-flex justify-content-center align-items-center'>
                logo
            </div>
            <div className='col-md-2 customers_Logo mb-3 d-flex justify-content-center align-items-center'>
                logo
            </div>
            

        </div>
        <div className='row ml-0 mr-0 justify-content-around    p-3 pt-0 ' >
        <div className='col-md-2 customers_Logo mb-3 d-flex justify-content-center align-items-center'>
                logo
            </div>
            <div className='col-md-2 customers_Logo mb-3 d-flex justify-content-center align-items-center'>
                logo
            </div>
            <div className='col-md-2 customers_Logo mb-3 d-flex justify-content-center align-items-center'>
                logo
            </div>

        </div>
    </div>
    <style jsx>{`
.customers_Logo {
  background:#fff;
  height: 7rem;
  border-radius: 1.5em;
  box-shadow: 0 0 45px 1px #d0d0d0;
 
}
  .customers_Logo:hover{
    box-shadow: 0 0 20px 8px #d0d0d0;
 

  }

`}</style>
    </>
  )
}

export default Customers
