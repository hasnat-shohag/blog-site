"use client";
import { Button, Form, Input } from "antd";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex items-center h-screen w-full">
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-10">
        <Image 
          src="/next.svg" 
          alt="logo" 
          width={200} 
          height={60} 
          className="mb-8" 
        />

        <div className="w-full max-w-md">
          <Form layout="vertical" className="space-y-6" onFinish={(data) => console.log(data)}>
            <Form.Item
              label={<span className="text-[var(--foreground)] font-medium">{'Email'}</span>}
              name="email"
              required={false}
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Please enter a valid email address" },
              ]}
              style={{ minHeight: "80px"}}
            >
              <Input 
                placeholder="example@gmail.com" 
                type="email" 
                className="rounded-md" 
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-[var(--foreground)] font-medium">{'Password'}</span>}
              name="password"
              required={false}
              rules={[
                { required: true, message: "Password is required" },
              ]}
              style={{ minHeight: "80px"}}
            >
              <Input.Password 
                placeholder="Password" 
                className="rounded-md" 
              />
            </Form.Item>

            <Button 
              type="primary" 
              className="w-full rounded-md h-10 font-semibold bg-blue-500 hover:bg-blue-600"
            >
              Login
            </Button>
          </Form>
        </div>
      </div>

      <div className="hidden md:flex flex-1 h-full relative">
        <Image
          className="object-cover"
          src="/login.webp"
          alt="login"
          fill
          quality={100}
        />
      </div>
    </div>
  );
};

export default LoginPage;
