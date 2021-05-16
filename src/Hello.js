import React, { Component } from 'react'
import { Button,Form,Col} from 'react-bootstrap';

export default class Hello extends Component {

	state = {
        value: null,
        checkedCount:0,
        error: '',
        dropDownSrc: ['select location']
    };
    

    controlText = (e) =>{
        let value = e.target.value;

        value = value.replace(/[^A-Za-z]/, "");

        this.setState({
            value
        });
    }

    handleChecks = (e)=>{

        let isChecked = e.target.checked;


        if('xyz..')
        

        if(this.state.checkedCount<5 && isChecked==true){
            this.state.checkedCount++;
          }
        else if(isChecked==false){
            this.state.checkedCount--;
        }
        else if(isChecked==true){
            e.target.checked = false;
        }

        console.log("currently checked checkboxes are : ", this.state.checkedCount);


    }

    minimuncondition = () =>{

       console.log("inside minimum conditon"); 
        if(this.state.checkedCount<5){
            this.state.error =  "Minimum 5 checks are required";
        }
        else{
            this.state.error =  "";
        }
    }

    setDropdownSrc = (event) =>{


        if(event.target.id=="offshore"){

            this.setState({
                dropDownSrc: ['CHENNAI','BANGLORE','HAIDRABAD']
            });
            //this.state.dropDownSrc = ['CHENNAI','BANGLORE','HAIDRABAD'];
        }
        else{
            this.setState({
                dropDownSrc:  ['US','NON-US']
            });
            //this.state.dropDownSrc = ['US','NON-US'];
        }


        console.log('dropdownelements',this.state);
    }

    options = this.state.dropDownSrc.map( item =>(
        <option>{item}</option>
    ))


    render() {
        return (

            <div>
            <Form.Group>
          <Form.Control type="text" placeholder="Large text" 
          value={this.state.value}
          onChange={this.controlText}
          />
          {this.minimuncondition}

                <Form.Control type="text" label="Error: " value={this.state.error} />
                  <Form.Check type="checkbox" label="Check me 1" onChange={this.handleChecks} />
                  <Form.Check type="checkbox" label="Check me 2" onChange={this.handleChecks} />
                  <Form.Check type="checkbox" label="Check me 3" onChange={this.handleChecks} />
                  <Form.Check type="checkbox" label="Check me 4" onChange={this.handleChecks} />
                  <Form.Check type="checkbox" label="Check me 5" onChange={this.handleChecks} />
                  <Form.Check type="checkbox" label="Check me 6" onChange={this.handleChecks} />
                  <Form.Check type="checkbox" label="Check me 7" onChange={this.handleChecks} />
                  <Form.Check type="checkbox" label="Check me 8" onChange={this.handleChecks} />
                  <Form.Check type="checkbox" label="Check me 9" onChange={this.handleChecks} />
                  <Form.Check type="checkbox" label="Check me 10" onChange={this.handleChecks} />
        </Form.Group>

        <Form.Row>
    <Form.Group as={Col}>
      <Form.Check type="radio" name="radio1" label="radio1" id="offshore" onClick={this.setDropdownSrc}/>
    </Form.Group>
 
    <Form.Group as={Col}>
    <Form.Check type="radio"  name="radio1" label="radio1" id="onshore" onClick={this.setDropdownSrc}/>
    </Form.Group>
  </Form.Row>


  <Form.Group>

  <React.Fragment>
      <Form.Control as="select" id="disabledSelect">
       {
           this.state.dropDownSrc.map((item)=>{
           return <option>{item}</option>
           })
       }
      </Form.Control>
      </React.Fragment>

    </Form.Group>


            </div>
        )
    }
}
