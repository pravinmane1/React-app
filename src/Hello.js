import React, { Component } from 'react'
import { Button,Form,Col} from 'react-bootstrap';

export default class Hello extends Component {

	state = {
        firstname: null,
        checkedCount:0,
        error: '',
        dropDownSrc: ['select location','CHENNAI','BANGLORE','HAIDRABAD'],
        selectedId: ''
    };
    

    controlText = (e) =>{
        let value = e.target.value;
        

        value = value.replace(/[^A-Za-z]/, "");

        this.setState({
            firstname : value
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
                dropDownSrc: ['select location','CHENNAI','BANGLORE','HAIDRABAD'],
                selectedId:''
            });
            //this.state.dropDownSrc = ['CHENNAI','BANGLORE','HAIDRABAD'];
        }
        else{
            this.setState({
                dropDownSrc:  ['select location','US','NON-US'],
                selectedId:''
            });
            //this.state.dropDownSrc = ['US','NON-US'];
        }


        console.log('dropdownelements',this.state);
    }

    handleDropdown = (event)=>{
        console.log('selected id : ', event.target.value);
        this.setState({selectedId:event.target.value});
    }

    resetForm = (event)=>{
        this.setState({firstname:''});
    }

    render() {
        return (

            <div>
                <Form>
            <Form.Group>
          <Form.Control type="text" placeholder="Large text" 
          value={this.state.firstname}
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
      <Form.Check type="radio" name="radio1" label="Offshore" id="offshore" onClick={this.setDropdownSrc} defaultChecked/>
    </Form.Group>
 
    <Form.Group as={Col}>
    <Form.Check type="radio"  name="radio1" label="Onshore" id="onshore" onClick={this.setDropdownSrc}/>
    </Form.Group>
  </Form.Row>


  <Form.Group>
      <Form.Control as="select" id="disabledSelect" value={this.state.selectedId} onChange={this.handleDropdown}>
       {
           this.state.dropDownSrc.map((item)=>{
           return <option id={item}>{item}</option>
           })
       }
      </Form.Control>

       <Button onClick={this.resetForm} type="Reset">Reset</Button>

    </Form.Group>

    </Form>
            </div>
        )
    }
}
