import React from 'react';
import TextInput from '../components/TextInput';
import SubmitLink from '../components/SubmitLink';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class RegisterDriver extends React.Component {
  constructor() {
    super()

    this.state = {
      formIsValid: false,
      formControls: {
        fName: {
          value: '',
          placeholder: 'First Name',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 2
          }
        },
        lName: {
          value: '',
          placeholder: 'Last Name',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 2
          }
        },
        birthDate: {
          value: '',
          placeholder: 'Date (MM/DD/YY)',
          valid: false,
          touched: false,
          validationRules: {
            isDate: true
          }
        },
        vehicleMake: {
          value: '',
          placeholder: 'Vehicle Make',
          valid: false,
          touched: false,
          validationRules: {},
          options: [

          ]
        },
        vehicleModel: {
          value: '',
          placeholder: 'Vehicle Model',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 3
          }
        },
        licensePlate: {
          value: '',
          placeholder: 'License Plate',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 2,
          }
        },
        licenseNo: {
          value: '',
          placeholder: 'License Number',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 3,
            isNumber: true
          }
        },
        insurance: {
          value: '',
          placeholder: 'Insurance Provider',
          valid: false,
          touched: false,
          validationRules: {},
          options: [

          ]
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = _ => {
    const formData = {};
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value;
    }
    return formData;
  }

  handleChange = event => {
    const { name, value } = event.target;
    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = this.validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
  }

  validate = (value, rules) => {
    let isValid = true;

    for (let rule in rules) {
      switch (rule) {
        case 'minLength': isValid = isValid && this.validateMinLength(value, rules[rule]); break;
        case 'isDate': isValid = isValid && this.validateDate(value); break;
        case 'isNumber': isValid = isValid && this.validateNumber(value); break;
        default: isValid = true;
      }
    }

    return isValid;
  }

  validateMinLength = (value, len) => {
    return value.length >= len;
  }

  validateDate = value => {
    // must be in MM/DD/YYYY
    var re = /^[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]$/;
    return re.test(value);
  }

  validateNumber = value => {
    // numbers only
    var re = /^\d+$/;
    return re.test(value);
  }

  render() {
    // const { isValid } = this.state
    // if (isValid === true) {
    //   // TODO: SOMETHING HERE
    //   return <Redirect to="/" />
    // }
    const { fName, lName } = this.state.formControls;
    // switch to styling valid/invalid forms via reactstrap?
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="fName">Legal First Name</Label>
              <TextInput name="fName"
                placeholder={fName.placeholder}
                value={fName.value}
                onChange={this.handleChange}
                touched={fName.touched}
                valid={fName.valid}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lName">Legal Last Name</Label>
              <Input type="text" name="lName" id="lName" placeholder={lName.placeholder} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCity">License Plate</Label>
              <Input type="text" name="city" id="exampleCity" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">Driver's License No</Label>
              <Input type="text" name="state" id="exampleState" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleZip">Car Insurance Provider</Label>
              <Input type="text" name="zip" id="exampleZip" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Date of Birth</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Vehicle Make</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Vehicle Model</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Vehicle Year</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="exampleEmail">Photos of Vehicle Exterior and Interior</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
        </Row>
        <Button>Submit Application</Button>
      </Form>
    )
  }
}

export default RegisterDriver;