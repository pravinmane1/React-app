import React from 'react';
import VarCard from './VarCard';
import  './Variable.css';
 
export default function Variables() {
    return (
        <div className="background">
        <div className="container variable border">
            <h2>Their are  3  types of variables</h2>
            <p>Variables are the container to store the value of the data.We can declare variables using <code>var,let,const</code> keywors...lets try!</p>
            <div class="container ">
                <div class="row ">
                    <div class="col">
                        
                        <VarCard title='var2' info='info' name='Pravin' surname='Mane' gender='Male' >
                            <div class="row ">
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>var a = 5;</code></p>
                                        <p><code>var b = 6;</code></p>
                                        <p><code>var c = a+b;</code></p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>//output will be 11.</code></p>
                                    </div>
                                </div>
 
                            </div>
                            </VarCard>
                    </div>
                    <div class="col">
                    <VarCard title='var' info='info'>
                            <div class="row ">
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>var a = 5;</code></p>
                                        <p><code>var b = 6;</code></p>
                                        <p><code>var c = a+b;</code></p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>//output will be 11.</code></p>
                                    </div>
                                </div>
 
                            </div>
                            </VarCard>
                    </div>
                </div>
                <div class="row ">
                    <div class="col">
                    <VarCard title='var' info='info'>
                            <div class="row ">
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>var a = 5;</code></p>
                                        <p><code>var b = 6;</code></p>
                                        <p><code>var c = a+b;</code></p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>//output will be 11.</code></p>
                                    </div>
                                </div>
 
                            </div>
                            </VarCard>
                    </div>
                    <div class="col">
                    <VarCard title='var' info='info'>
                            <div class="row ">
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>var a = 5;</code></p>
                                        <p><code>var b = 6;</code></p>
                                        <p><code>var c = a+b;</code></p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>//output will be 11.</code></p>
                                    </div>
                                </div>
 
                            </div>
                            </VarCard>
                    </div>
                </div>
            </div>
 
            <div className="container">
                <h2>scope</h2>
                <h4>There are two types of scope: Block scope and Functional scope.Scope determines the accessibility (visibility) of these variables.
 
Variables defined inside a function are not accessible (visible) from outside the function.</h4>
                <div class="card">
                    <div class="card-header">
                        <b>Block Scope</b>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><code><p>const abs = 5<span style={{ color: "black" }}>//here abc is 5</span></p><p>&#x7b;const abs = 6 <span style={{ color: "black" }}>//here abc is 6</span> &#x7d;</p><span style={{ color: "black" }}>//here abc is 5</span></code></h5>
                        <p class="card-text">In the above example we can see that in block scope we can change the value within the block but the value of <code>abc = 6</code> is not accesible outside the block. </p>
                        <p>When we declare a variable using <code>var</code> within the block we can access the variable ouside of the block</p>
                        <p>When we declare a variable using <code>let</code> within the block we can not access the variable ouside of the block</p>
 
                    </div>
                    <div class="card-header">
                        <b>Function scope</b>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><code> var name = "india" <p>function Country ()<p>&#x7b;</p> var city="pune" <p> //name variable can be accessed here</p> <p>&#x7d;</p><p>//country variable cannot be accessed here.</p></p></code></h5>
                        <p class="card-text">In the above example we can see that variable declared in the function cannot be accessedoutside the function but function can access the variable declared outside of the function</p>
 
                    </div>
                </div>
            </div>
 
 
        </div>
        </div>
 
    )
}
