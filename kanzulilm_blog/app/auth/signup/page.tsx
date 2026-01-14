"use client"

import { signUpSchema } from "@/app/schemas/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Controller, useForm } from "react-hook-form"
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



function SignUpPage() {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },

  })
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-center items-center">
          Sign Up
        </CardTitle>
        <CardDescription className="flex justify-center items-center">
          Create an account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup className="gap-y-4">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input placeholder="Your Name" type="text" {...field} />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input placeholder="YourEmail@example.com" type="email" {...field} />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <Input placeholder="Enter Your Password" type="password" {...field} />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button>Sign Up</Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}

export default SignUpPage

