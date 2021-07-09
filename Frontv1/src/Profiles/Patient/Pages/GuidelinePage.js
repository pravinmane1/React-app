import React from 'react';

import Card from "../Components/Card"



const Guideline = ()=>{
    return(
        <>
            <div class="mt-5 mb-5">
            <div class="row">
            <div className="col-3">
                <Card  title="STAY HOME" text="lorem "></Card>
                </div>

                
                <div className="col-3">
                <Card title="WEAR MASK" text="This is skin care product"></Card>
                </div>

                
                <div className="col-3">
                <Card title="WASH YOUR HANDS" text="This is hair care product"></Card>
                </div>

                <div className="col-3">
                <Card title="STAY HYDERATED" text="This is hair care product"></Card>
                </div>

            

            </div>

            </div>

            <div class="mt-5 mb-5">
            <div class="row">
            <div className="col-3">
                <Card title="STAY HOME" text="This is skin care product"></Card>
                </div>

                
                <div className="col-3">
                <Card title="SOCIAL DISTANCING" text="This is skin care product"></Card>
                </div>

                
                <div className="col-3">
                <Card title="EAT HEALTHY" text="This is hair care product"></Card>
                </div>

                <div className="col-3">
                <Card title="TAKE VACCINE" text="This is hair care product"></Card>
                </div>

            
            </div>

            </div>
           
                
        </>

           

      


        
    )
}

export default Guideline