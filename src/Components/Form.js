import React from "react";

const Form = (props) => {

    const{inputs, setInputs} = props;
    
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const isFirstNameLong = () => {
        if( target.value.length > 2) {
            return "Name Accepted"; }
        else {
            return "First Name must be at least two characters"; }
        };

    return(
    <form>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input onChange={onChange} type="text" name="firstName" />
            <p> { isFirstNameLong() } </p>
        </div>
        <div>
            <label htmlFor="lastName">Last Name</label>
            <input onChange={onChange} type="text" name="lastName"/>
            <p> Last Name must be at least two characters </p>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input onChange={onChange} type="text" name="email"/>
            <p> Email must be at least two characters </p>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input onChange={onChange} type="text" name="password"/>
            <p> Password must match Confirm Password </p>
        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onChange} type="text" name="confirmPassword"/>
            <p> Password must match Confirm Password </p>
        </div>
    </form>
    );
};

export default Form;
