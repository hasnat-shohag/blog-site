"use client";
import { Button } from 'antd';

const LoginPage = () => {
  const handleClick = () => {
    console.log("Clicked")
  };
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      Login Page
      <Button onClick={handleClick}>Click Here</Button>
    </div>
  );
};

export default LoginPage;