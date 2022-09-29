import { useState } from "react";
import "./App.css";

export default function App() {
  
  //TODO: Add your state fields here

  const [fullName, setFullName] = useState(``)
  const [address, setAddress] = useState(``)
  const [phoneNo, setPhoneNo] = useState(``)
  const [email, setEmail] = useState(``)
  const [complaint, setComplaint] = useState(``)
  const [contact, setContact] = useState(``)
  const [agreeToData, setAgreeToData] = useState(false)

  const submitForm = () => {

    const submitData = {
      fullName: fullName,
      address: address,
      phoneNo: phoneNo,
      email: email,
      complaint: complaint,
      contact: contact,
      agreeToData: agreeToData
    }

    console.log(submitData)
  }

 
  return (
    <>
      <form className="form" onSubmit={(event) => {
          event.preventDefault();
          submitForm();
        }}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" value={fullName} pattern="(^[A-Za-zøæå]{3,16})([ ]{0,1})([A-Za-zøæå]{3,16})?([ ]{0,1})?([A-Za-zøæå]{3,16})?([ ]{0,1})?([A-Za-zøæå]{3,16})" onChange={(event) => setFullName(event.target.value)} required />
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={(event) => setAddress(event.target.value)} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={(event) => setPhoneNo(event.target.value)} />
          </label>

          <label>
            Email
            <input type="email" name="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={(event) => setEmail(event.target.value)} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea onChange={(event) => setComplaint(event.target.value)}
              name="complaint"
              rows="10"
              placeholder="You can complain here"
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onClick={(event) => setContact(event.target.value)}/>
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" onClick={(event) => setContact(event.target.value)}/>
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" onClick={(event) => setContact(event.target.value)}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" onClick={(event) => setContact(event.target.value)}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onClick={(event) => setAgreeToData(event.target.checked)}/>
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
