import {Button, Container, Form, Label, Input, FormGroup} from "reactstrap"
import { useState, forwardRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";

export default function Create () {
  const [formInput, setFormInput] = useState({
    email: '',
    username: '',
    password: '',
    birth_place: ''
  })
  const handleChange = ({ target: { name, value }}) => {
    setFormInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const [gender, setGender] = useState('male')
  function handleSelect(e) {
    setGender((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

   const customDateInput = ({ value, onClick, onChange}, ref) => (
    <Input
      autoComplete="off"
      background="white"
      name='date'
      value={value}
      ref={ref}
      onClick={onClick}
      onChange={onChange}
    />
  );
  customDateInput.displayName = "DateInput";
  const CustomInput = forwardRef(customDateInput);

  const [startDate, setStartDate] = useState(new Date());

  const dateData = {
    birth_date: startDate
   }
  
  let genderData ={
    gender: gender.gender
  }

  const onSubmit = async (e) => {
   e.preventDefault()
   console.log(formInput, dateData, genderData)
   await axios.post('http://localhost:4000/register', 
      {
        name: formInput.email,
        username: formInput.username,
        password: formInput.password,
        dateData: dateData.birth_date,
        birth_place: formInput.birth_place, 
        gender: gender.select
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }  

  return (
    <Container style={{paddingLeft:"10%", paddingRight:"10%"}} className="d-flex flex-column justify-content-center align-items-center">
      <Container className="d-flex justify-content-center h1 pb-3">REGISTER NEW PLAYER</Container>
      <Container style={{maxWidth: "500px"}} className="bg-light border p-5">
        <Form onChange={handleChange}>
          <FormGroup className="p-2">
            <Label>Email</Label>
            <Input type='email' placeholder="email" name="email" value={formInput.email} onChange={handleChange} />
          </FormGroup>
          <FormGroup className="p-2">
            <Label>Username</Label>
            <Input type='text' placeholder="username" name="username" value={formInput.username} onChange={handleChange} />
          </FormGroup>
          <FormGroup className="p-2">
            <Label>Password</Label>
            <Input type='password' placeholder="password" name="password" value={formInput.confirm_password} onChange={handleChange} />
          </FormGroup>
          <FormGroup className="p-2">
            <Label>Confirm Password</Label>
            <Input type='password' placeholder="confirm password" name="password" value={formInput.password} onChange={handleChange}  />
          </FormGroup>
          <FormGroup className="p-2">
            <Label>Gender</Label>
            <Input 
              type='select' 
              placeholder="gender" 
              name="select" 
              id="exampleSelect" 
              value={gender.gender}
              onChange={handleSelect} 
              >
                <option value={'male'}>male</option>
                <option value={'female'}>female</option>
            </Input>
          </FormGroup>
          <FormGroup className="p-2">
            <Label>Birth date</Label>
            <DatePicker
              name='date'
              selected={startDate} 
              onChange={(date) => setStartDate(date)} 
              customInput={<CustomInput />}
              minDate={new Date()}/>
          </FormGroup>
          <FormGroup className="p-2">
            <Label>Birth Place</Label>
            <Input type='text' placeholder="birth place" name="birth_place" value={formInput.birth_place} onChange={handleChange}  />
          </FormGroup>
          <Container className="d-flex justify-content-center pt-4">
            <Button color="warning" type="submit" onClick={onSubmit}>Submit</Button>
          </Container>
        </Form>
      </Container>
    </Container>
  )
}