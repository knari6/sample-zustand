"use client";
import React from "react";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { SubmitHandler, useForm } from "react-hook-form";

type FromValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<FromValues>();

  const onSubmit: SubmitHandler<FromValues> = (data: any) => {
    console.log(data);
    console.log("hello");
  };
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Form className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
        <Input
          isRequired
          label="LastName"
          labelPlacement="outside"
          placeholder="last name"
          {...register("lastName")}
        />
        <Input
          isRequired
          label="FirstName"
          labelPlacement="outside"
          placeholder="last name"
          {...register("firstName")}
        />

        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          placeholder="Enter your email"
          type="email"
          {...register("email")}
        />
        <Button type="submit" color="primary" onSubmit={handleSubmit(onSubmit)}>
          Click Me
        </Button>
      </Form>
    </section>
  );
}
