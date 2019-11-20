import React from 'react';
import TextInput from '../components/TextInput';
import SelectInput from '../components/SelectInput';
import CenteredCard from '../components/CenteredCard';
import { Col, Row, Button, Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import SubmitLink from '../components/SubmitLink';

class RegisterDriver extends React.Component {
  constructor() {
    super()

    this.state = {
      formIsValid: false,
      formControls: {
        fName: {
          type: 'text',
          value: '',
          placeholder: 'First Name',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 2
          }
        },
        lName: {
          type: 'text',
          value: '',
          placeholder: 'Last Name',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 2
          }
        },
        birthDate: {
          type: 'date',
          value: '',
          placeholder: 'mm/dd/yyyy',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 1
          }
        },
        vehicleMake: {
          type: 'text',
          value: '',
          placeholder: 'Vehicle Make',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 1
          },
          options: [
            { value: '', displayValue: 'Select' },
            { value: 'toyota', displayValue: 'Toyota' },
            { value: 'honda', displayValue: 'Honda' },
            { value: 'hyundai', displayValue: 'Hyundai' },
            { value: 'subaru', displayValue: 'Subaru' },
            { value: 'nissan', displayValue: 'Nissan' },
            { value: 'mazda', displayValue: 'Mazda' },
            { value: 'mercedes', displayValue: 'Mercedes' },
            { value: 'mitsubishi', displayValue: 'Mitsubishi' },
            { value: 'kia', displayValue: 'Kia' },
            { value: 'mini', displayValue: 'Mini' },
            { value: 'acura', displayValue: 'Acura' },
            { value: 'dodge', displayValue: 'Dodge' },
            { value: 'porsche', displayValue: 'Porsche' },
            { value: 'ram', displayValue: 'Ram' },
            { value: 'lexus', displayValue: 'Lexus' },
            { value: 'landrover', displayValue: 'Land Rover' },
            { value: 'infiniti', displayValue: 'Infiniti' },
            { value: 'jaguar', displayValue: 'Jaguar' },
            { value: 'jeep', displayValue: 'Jeep' },
            { value: 'saab', displayValue: 'Saab' },
            { value: 'suzuki', displayValue: 'Suzuki' },
            { value: 'tesla', displayValue: 'Tesla' },
            { value: 'volvo', displayValue: 'Volvo' },
            { value: 'bmw', displayValue: 'BMW' },
            { value: 'audi', displayValue: 'Audi' },
            { value: 'buick', displayValue: 'Buick' },
            { value: 'cadillac', displayValue: 'Cadillac' },
            { value: 'chrysler', displayValue: 'Chrysler' },
            { value: 'fiat', displayValue: 'Fiat' },
            { value: 'gm', displayValue: 'GM' },
            { value: 'gmc', displayValue: 'GMC' },
            { value: 'ford', displayValue: 'Ford' },
            { value: 'chevy', displayValue: 'Chevrolet' },
            { value: 'volkswagen', displayValue: 'Volkswagen' }
          ].sort((a, b) => (a.value.localeCompare(b.value)))
        },
        vehicleModel: {
          type: 'text',
          value: '',
          placeholder: 'Vehicle Model',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 2
          }
        },
        vehicleYear: {
          type: 'number',
          value: '',
          placeholder: 'Vehicle Year',
          valid: false,
          touched: false,
          validationRules: {
            isValidYear: true
          }
        },
        licensePlate: {
          type: 'text',
          value: '',
          placeholder: 'License Plate',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 2
          }
        },
        licenseNo: {
          type: 'number',
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
          type: 'text',
          value: '',
          placeholder: 'Insurance Provider',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 1
          },
          options: [
            { value: '', displayValue: 'Select' },
            { value: 'allstate', displayValue: 'Allstate' },
            { value: 'nationwide', displayValue: 'Nationwide' },
            { value: 'usaa', displayValue: 'USAA' },
            { value: 'geico', displayValue: 'Geico' },
            { value: 'farmers', displayValue: 'Farmers' },
            { value: 'progressive', displayValue: 'Progressive' },
            { value: 'americanfamily', displayValue: 'American Family' },
            { value: 'travelers', displayValue: 'Travelers' },
            { value: 'libertymutual', displayValue: 'Liberty Mutual' },
            { value: 'none', displayValue: 'lol what insurance' }
          ].sort((a, b) => (a.value.localeCompare(b.value)))
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
        case 'isNumber': isValid = isValid && this.validateNumber(value); break;
        case 'isValidYear': isValid = isValid && this.validateYear(value); break;
        default: isValid = true;
      }
    }

    return isValid;
  }

  validateMinLength = (value, len) => {
    return value.length >= len;
  }

  validateNumber = value => {
    var re = /^[0-9]+$/;
    return re.test(value) && parseInt(value) >= 0;
  }

  validateYear = value => {
    let numValue = parseInt(value);
    return this.validateNumber(value) && numValue >= 1908 && numValue <= 2030;
  }

  render() {
    const {
      fName, lName, licenseNo, licensePlate, insurance,
      birthDate, vehicleMake, vehicleModel, vehicleYear
    } = this.state.formControls;
    return (
      <CenteredCard title="Driver Application">
        <Form>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="fName">Legal First Name</Label>
                <TextInput name="fName"
                  type={fName.type}
                  placeholder={fName.placeholder}
                  value={fName.value}
                  onChange={this.handleChange}
                  touched={fName.touched}
                  valid={fName.valid}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="lName">Legal Last Name</Label>
                <TextInput name="lName"
                  type={lName.type}
                  placeholder={lName.placeholder}
                  value={lName.value}
                  onChange={this.handleChange}
                  touched={lName.touched}
                  valid={lName.valid}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="birthDate">Date of Birth</Label>
                <TextInput name="birthDate"
                  type={birthDate.type}
                  placeholder={birthDate.placeholder}
                  value={birthDate.value}
                  onChange={this.handleChange}
                  touched={birthDate.touched}
                  valid={birthDate.valid}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="licensePlate">License Plate</Label>
                <TextInput name="licensePlate"
                  type={licensePlate.type}
                  placeholder={licensePlate.placeholder}
                  value={licensePlate.value}
                  onChange={this.handleChange}
                  touched={licensePlate.touched}
                  valid={licensePlate.valid}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="licenseNo">Driver's License No</Label>
                <TextInput name="licenseNo"
                  type={licenseNo.type}
                  placeholder={licenseNo.placeholder}
                  value={licenseNo.value}
                  onChange={this.handleChange}
                  touched={licenseNo.touched}
                  valid={licenseNo.valid}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="insurance">Car Insurance Provider</Label>
                <SelectInput name="insurance"
                  options={insurance.options}
                  value={insurance.value}
                  onChange={this.handleChange}
                  touched={insurance.touched}
                  valid={insurance.valid}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="vehicleMake">Vehicle Make</Label>
                <SelectInput name="vehicleMake"
                  options={vehicleMake.options}
                  value={vehicleMake.value}
                  onChange={this.handleChange}
                  touched={vehicleMake.touched}
                  valid={vehicleMake.valid}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="vehicleModel">Vehicle Model</Label>
                <TextInput name="vehicleModel"
                  type={vehicleModel.type}
                  placeholder={vehicleModel.placeholder}
                  value={vehicleModel.value}
                  onChange={this.handleChange}
                  touched={vehicleModel.touched}
                  valid={vehicleModel.valid}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="vehicleYear">Vehicle Year</Label>
                <TextInput name="vehicleYear"
                  type={vehicleYear.type}
                  placeholder={vehicleYear.placeholder}
                  value={vehicleYear.value}
                  onChange={this.handleChange}
                  touched={vehicleYear.touched}
                  valid={vehicleYear.valid}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="vehiclePhotos">Photos of Vehicle Exterior and Interior</Label>
                <Input type="file" name="vehiclePhotos" id="vehiclePhotos" />
                <FormText>Please make sure to include clear photos of both the interior and exterior of the vehicle</FormText>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              {/* Can handle sending the filled-out form data to another page via props */}
              <SubmitLink to={{ pathname: "/", state: { formData: this.handleSubmit() } }}
                label="Submit Application"
                enabled={this.state.formIsValid} />
            </Col>
          </Row>
        </Form>
      </CenteredCard>
    )
  }
}

export default RegisterDriver;