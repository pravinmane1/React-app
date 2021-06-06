import React from 'react'
 
export default function Array() {
    return (
        <div>
            <h2>Their are  66666666666  types of variables</h2>
            <p>Variables are the container to store the value of the data.We can declare variables using <code>var,let,const</code> keywors...lets try!</p>
            <div class="container overflow-hidden">
                <div class="row ">
                    <div class="col">
                        <div class="card" style={{ width: "30rem" }}>
                            <p>var</p>
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
                            <p>In the above example ,we are using key word var to assign data value. We can see that variable a is holding the value of five, variable b is holding the value 6 and variable c is holding the addition of the the values </p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ width: "30rem" }}>
                            <p>let</p>
                            <div class="row ">
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>let a = 5;</code></p>
                                        <p><code>let b = 6;</code></p>
                                        <p><code>let c = a+b;</code></p>
 
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>//output will be 11.</code></p>
                                    </div>
                                </div>
 
                            </div>
                            <p>Variables declared with <code>var</code> and <code>let</code> are quite similar when declared outside a block.let keyword is used for defining scope of variables which we are going to see after this.</p>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col">
                        <div class="card" style={{ width: "30rem" }}>
                            <p>const</p>
                            <div class="row ">
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>const a = 5;</code></p>
                                        <p><code>const b = 6;</code></p>
                                        <p><code>const c = a+b;</code></p>
                                        <p><code>const a = 8;//not allowed</code></p>
 
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>//output will be 11.</code></p>
                                    </div>
                                </div>
 
                            </div>
                            <p>when we declare a variable with const keyword we cannot modify its value.It behaves like let keyword but reassigning of value is not allowed here.We cannot modify data within the scope.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ width: "30rem" }}>
                            <p>Data types</p>
                            <div class="row ">
                                <div class="col-md-3">
                                    <div class="card-body">
                                        <p>String</p>
                                        <p>Number</p>
                                        <p>Boolean</p>
                                        <p>Object</p>
                                        <p>Array</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <p><code>let name = 'Shweta';</code></p>
                                        <p><code>let year = 6;</code></p>
                                        <p><code>let isPrime = true;</code></p>
                                        <p><code>let print = console.log('hello world');</code></p>
                                        <p><code>let array = ['India' , 'Africa' , 'UK']</code></p>
                                    </div>
                                </div>
                            </div>
                            <p>Variables can hold values of different data types.Following are the exxamples </p>
                        </div>
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
 
    )
}
