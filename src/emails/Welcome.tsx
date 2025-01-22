import { Button, Container, Heading, Html } from "@react-email/components";
import * as React from "react";

type WelcomeProps ={
  name: string
  email: string
  phone:string
  help: string
  additional: string
}

export default function Email({name,email,phone,help,additional}: WelcomeProps) {
  return (
    <Html>
      <Heading>Welcome, {name}!</Heading>

      <Container>{email}</Container>
      <Container>{phone}</Container>
      <Container>{help}</Container>
      <Container>{additional}</Container>
      
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
