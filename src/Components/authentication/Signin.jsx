import React, { useState } from "react";
import { FaSteam } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Signin = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrUsernameFocused, setEmailOrUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  // Function to handle input change for email/username field
  const handleEmailOrUsernameChange = (event) => {
    setEmailOrUsername(event.target.value);
  };

  // Function to handle input change for password field
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle email/username input focus
  const handleEmailOrUsernameFocus = () => {
    setEmailOrUsernameFocused(true);
  };

  // Function to handle email/username input blur
  const handleEmailOrUsernameBlur = () => {
    if (!emailOrUsername.trim()) {
      setEmailOrUsernameFocused(false);
    }
  };

  // Function to handle password input focus
  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  // Function to handle password input blur
  const handlePasswordBlur = () => {
    if (!password.trim()) {
      setPasswordFocused(false);
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform sign-in logic here
  };

  // Check if both fields have input
  const isFormValid = emailOrUsername.trim() !== "" && password.trim() !== "";

  // Determine background color of sign-in button
  const buttonBgColor = isFormValid ? "bg-btnBg" : "bg-gray-400";

  return (
    <div className="mt-5 pt-8 w-[16rem] md:w-[25rem]">
      <h1 className="text-xl md:text-2xl font-bold mb-4 text-center text-white">Sign In to Your Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative border secondBg rounded-md shadow-md  border-gray-500 h-12">
          <label
            htmlFor="emailOrUsername"
            className={`absolute z-10 text-gray-400 transition-all duration-300 ${
              emailOrUsernameFocused || emailOrUsername ? "text-xs top-2 left-1 -mt-2 text-gray-400" : "top-3 left-2"
            }`}
          >
            Email or Username
          </label>
          <input
            type="text"
            id="emailOrUsername"
            className="form-input mt-1 block w-full bg-transparent	p-1 text-primary focus:outline-none absolute bottom-0  "
            value={emailOrUsername}
            onChange={handleEmailOrUsernameChange}
            onFocus={handleEmailOrUsernameFocus}
            onBlur={handleEmailOrUsernameBlur}
          />
        </div>
        <div className="mb-4 relative border secondBg rounded-md shadow-md  border-gray-500 h-12">
          <label
            htmlFor="password"
            className={`absolute z-10 transition-all text-gray-400 duration-300 ${
              passwordFocused || password ? "text-xs top-2 left-1 -mt-2 text-gray-300" : "top-3 left-2"
            }`}
          >
            Password
          </label>
        
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-input text-primary mt-1 p-1 focus:outline-none block w-full bg-transparent	 absolute bottom-0 "
              value={password}
              onChange={handlePasswordChange}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
              <div className="relative">
               {password.length>0 &&
               
            <button
              type="button"
              className="absolute text-gray-400 top-0 right-0 mt-3 mr-4 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            }
          </div>
        </div>
        <button
          type="submit"
          className={`w-full py-2 text-white rounded ${buttonBgColor} ${
            isFormValid ? "hover:bg-navColor-dark" : "cursor-not-allowed"
          }`}
          disabled={!isFormValid}
        >
          Sign In
        </button>
      </form>
      <div className="mt-5">
      <div className="flex items-center ">
  <div className="border border-gray-700 flex-grow"></div>
  <p className="text-white flex-grow-0 ml-2 mr-2">or Sign in via</p>
  <div className="border border-gray-700 flex-grow"></div>
</div>
<Link className="w-full py-2 text-white rounded bg-gray-400 hover:bg-gray-500 flex center mt-5 ">
Sign in via Steam <FaSteam className="ml-2"/>
</Link>

      </div>
    </div>
  );
};

export default Signin;
