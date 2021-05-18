import React, { Component } from 'react';
import { Form, Button, Col, Container, Badge } from 'react-bootstrap';

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      associate_ID: null,
      project_ID: null,
      textArea: null,
      fileName: null,
      checkedCount: 0,
      dropDownSrc: ['select location', 'CHENNAI', 'BANGLORE', 'HAIDRABAD'],
      selectedId: '',

      errors: {
        firstName: '',
        associate_ID: '',
        project_ID: '',
        textArea: '',
        checkedCount: '',
      },


      firstNameV: false,
      associate_IDV: false,
      project_IDV: false,
      selectedIdV: false,
      textAreaV: false,

      isSubmitDisabled: true
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    let errors = this.state.errors;

    let isValidated = false;

    switch (name) {
      case 'firstName':
        value = value.replace(/[^A-Za-z ]/, "");
        errors.firstName =
          value.length < 5
            ? 'Please Enter Associates Name!'
            : value.length >= 31
              ? 'Accepts Alphabets, space & Min 5 to Max 30 Char!'
              : '';

        if (errors.firstName == '') {
          isValidated = true;
        }

        break;
      case 'associate_ID':
        value = value.replace(/[^1-9]/, "");
        errors.associate_ID =
          value.length < 6
            ? 'Please enter associate ID!'
            : value.length >= 7
              ? 'Invalid associate ID(ID length should be 6)!'
              : '';

        if (errors.associate_ID == '') {
          isValidated = true;
        }
        break;

      case 'project_ID':
        value = value.replace(/[^A-Za-z1-9]/, "");
        errors.project_ID =
          value.length < 12
            ? 'Please enter project ID!'
            : value.length >= 13
              ? 'Invalid project ID(ID length should be 13)!'
              : '';

        if (errors.project_ID == '') {
          isValidated = true;
        }
        break;

      case 'textArea':
        errors.textArea =
          value.length < 1
            ? 'Please enter comments!!!'
            : '';
        if (errors.textArea == '') {
          isValidated = true;
        }
        break;
      default:
        break;
    }

    console.log('isvalidated: ', isValidated);

    let nameV = name + 'V';

    this.setState(
      {
        errors,
        [name]: value,
        [nameV]: isValidated
      }, () => this.checkAllValidations());
  }

  checkAllValidations = () => {
    console.log('in all validations');

    const { firstNameV, associate_IDV, project_IDV, selectedIdV, checkedCount, fileName, textAreaV,textArea } = this.state;

    console.log(firstNameV, associate_IDV, project_IDV, selectedIdV, checkedCount,textArea);

    if (firstNameV && associate_IDV && project_IDV && selectedIdV && checkedCount == 5 && fileName != null && textAreaV) {
      console.log('visible button');
      this.setState({ isSubmitDisabled: false });
    } else {
      console.log('invisible button');
      this.setState({ isSubmitDisabled: true });
    }
  }

  handleSubmit = (event) => {

    console.log('firstnameV ', this.state.firstNameV);
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }

  handleChecks = (e) => {

    let isChecked = e.target.checked;

    let factor = 0;

    if (this.state.checkedCount < 5 && isChecked == true) {
      factor = 1;
      //this.state.checkedCount++;
    }
    else if (isChecked == false) {
      factor = -1;
      //this.state.checkedCount--;
    }
    else if (isChecked == true) {
      e.target.checked = false;
    }

    this.setState({ checkedCount: this.state.checkedCount + factor }, () => this.checkAllValidations());

    console.log("currently checked checkboxes are : ", this.state.checkedCount);

  }

  setDropdownSrc = (event) => {

    if (event.target.id == "offshore") {

      this.setState({
        dropDownSrc: ['select location', 'CHENNAI', 'BANGLORE', 'HAIDRABAD'],
        selectedId: ''
      });
    }
    else {
      this.setState({
        dropDownSrc: ['select location', 'US', 'NON-US'],
        selectedId: ''
      });
    }


    console.log('dropdownelements', this.state);
  }

  handleDropdown = (event) => {
    console.log('selected id : ', event.target.value);
    this.setState({ selectedId: event.target.value, selectedIdV: true }, () => this.checkAllValidations());
  }


  handleReset = (event) => {
    this.setState(
      {
        firstName: '',
        associate_ID: null,
        project_ID: null,
        textArea: '',
        checkedCount: 0,
        dropDownSrc: ['select location', 'CHENNAI', 'BANGLORE', 'HAIDRABAD'],
        errors: {
          firstName: '',
          associate_ID: '',
          project_ID: '',
          textArea: '',
          checkedCount: '',
        },

        firstNameV: false,
        associate_IDV: false,
        project_IDV: false,
        selectedIdV: false,
        textAreaV: false,

        isSubmitDisabled: true
      }, 
      ()=>{
        console.log("textArea : ",this.state.textArea);
      }
    );
  }


  fileSelected = (e) => {

    this.setState({ fileName: e.target.value }, () => {
      console.log(this.state.fileName);
    }, () => this.checkAllValidations());
  }

  render() {
    const { errors } = this.state;
    return (
      <div>

        <Container className="justify-content-md-center" border="dark" Style="Background-color:pink; width: 50rem;-top:10px">
          <h1 className="head">COGNIZANT FORM</h1>
          <Form onSubmit={this.handleSubmit} autoComplete="off" noValidate>
            <Form.Group>
              <Form.Control type="text" name="firstName" placeholder="Associate Name" value={this.state.firstName || ""}
                onChange={this.handleChange} maxLength="31" noValidate />
              {errors.firstName.length > 0 &&
                <span Style="Color:red" >{errors.firstName}</span>}
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" name="associate_ID" placeholder="Associate ID" value={this.state.associate_ID || ""} onChange={this.handleChange} maxLength="7" noValidate />
              {errors.associate_ID.length > 0 &&
                <span Style="Color:red">{errors.associate_ID}</span>}
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" name="project_ID" placeholder="Project ID" value={this.state.project_ID || ""} onChange={this.handleChange} maxLength="13" noValidate />
              {errors.project_ID.length > 0 &&
                <span Style="Color:red">{errors.project_ID}</span>}
            </Form.Group>

            <Form.Group>
              <Form.Check type="radio" name="radio1" inline label="offshore" id="offshore" onClick={this.setDropdownSrc} defaultChecked />
              <Form.Check type="radio" name="radio1" inline label="onshore" id="onshore" onClick={this.setDropdownSrc} />
            </Form.Group>

            <Form.Group>
              <Form.Control as="select" id="disabledSelect" value={this.state.selectedId} onChange={this.handleDropdown}>
                {
                  this.state.dropDownSrc.map((item) => {
                    return <option id={item}>{item}</option>
                  })
                }
              </Form.Control>

            </Form.Group>
            <Form.Row >

              <Form.Group as={Col}>
                <Form.Check type="checkbox" name="chk" label="HTML5,CSS3,JS" onChange={this.handleChecks} />
                <Form.Check type="checkbox" name="chk" label="SASS" onChange={this.handleChecks} />
                <Form.Check type="checkbox" name="chk" label="ES5,ES6,ES7..." onChange={this.handleChecks} />
                <Form.Check type="checkbox" name="chk" label="Bootstrap 4" onChange={this.handleChecks} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Check type="checkbox" name="chk" label="Angular 8" onChange={this.handleChecks} />
                <Form.Check type="checkbox" name="chk" label="React JS" onChange={this.handleChecks} />
                <Form.Check type="checkbox" name="chk" label="Veu JS" onChange={this.handleChecks} />
                <Form.Check type="checkbox" name="chk" label="TypeScript" onChange={this.handleChecks} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Check type="checkbox" name="chk" label="Express JS" onChange={this.handleChecks} />
                <Form.Check type="checkbox" name="chk" label="Node JS" onChange={this.handleChecks} />
                <Form.Check type="checkbox" name="chk" label="Mongo DB" onChange={this.handleChecks} />

              </Form.Group>

            </Form.Row>

            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Example file input" value={this.state.fileName} onChange={this.fileSelected} />
            </Form.Group>

            <Form.Group >
              <Form.Control as="textarea" rows={3} name="textArea" placeholder="comments" value={this.state.textArea} onChange={this.handleChange} />
              {errors.textArea.length > 0 &&
                <span Style="Color:red">{errors.textArea}</span>}
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.handleSubmit} disabled={this.state.isSubmitDisabled}>
              Submit
  </Button>

            <Button onClick={this.handleReset} variant="danger" type="Reset" >Reset</Button>

          </Form>
        </Container>
      </div>
    );
  }
}
