"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

export default function SignUpPage() {
  const router = useRouter();

  const handleEmailSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
    });

    if (data) {
      toast.success("You have successfully signed up", { theme: "colored" });
      router.push("/");
    }

    if (error) {
      toast.error(error.message ?? "Failed to sign up", { theme: "colored" });
    }
  };

  const handleGoogleSignUp = async () =>{
     const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data);
  }
  const handleGithubSignUp = async() =>{
     const data = await authClient.signIn.social({
        provider: "github"
    });

  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <Card className="bg-white border-gray-200 shadow-xl shadow-gray-200/50 rounded-3xl overflow-hidden">
          <CardHeader className="text-center pb-6 border-b border-gray-50">
            <CardTitle className="text-2xl font-extrabold text-[#222222]">
              Create an account
            </CardTitle>
            <CardDescription className="text-gray-500">
              Join StudioSpace to book and list premium workspaces
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            <form onSubmit={handleEmailSignUp}>
              <FieldGroup className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    type="button"
                    className="w-full gap-2 text-gray-700 hover:bg-gray-50 rounded-xl"
                    onClick={handleGithubSignUp}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        fill="currentColor"
                      />
                    </svg>
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    className="w-full gap-2 text-gray-700 hover:bg-gray-50 rounded-xl"
                    onClick={handleGoogleSignUp}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-red-500"
                    >
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    Google
                  </Button>
                </div>

                <FieldSeparator className="text-gray-400 text-sm my-2">
                  Or continue with email
                </FieldSeparator>

                <div className="space-y-4">
                  <Field>
                    <FieldLabel
                      htmlFor="name"
                      className="text-[#222222] font-medium"
                    >
                      Full Name
                    </FieldLabel>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="e.g. Samim Uzzaman Sunny"
                      className="rounded-xl border-gray-200 focus-visible:ring-[#FF6B57]"
                      required
                    />
                  </Field>

                  <Field>
                    <FieldLabel
                      htmlFor="image"
                      className="text-[#222222] font-medium"
                    >
                      Profile Image URL
                    </FieldLabel>
                    <Input
                      id="image"
                      type="url"
                      name="image"
                      placeholder="https://i.ibb.co/..."
                      className="rounded-xl border-gray-200 focus-visible:ring-[#FF6B57]"
                      required
                    />
                  </Field>

                  <Field>
                    <FieldLabel
                      htmlFor="email"
                      className="text-[#222222] font-medium"
                    >
                      Email Address
                    </FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="rounded-xl border-gray-200 focus-visible:ring-[#FF6B57]"
                      required
                    />
                  </Field>

                  <Field>
                    <div className="flex items-center justify-between mb-1">
                      <FieldLabel
                        htmlFor="password"
                        className="text-[#222222] font-medium"
                      >
                        Password
                      </FieldLabel>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      className="rounded-xl border-gray-200 focus-visible:ring-[#FF6B57]"
                      required
                    />
                  </Field>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full h-12 bg-[#FF6B57] hover:bg-[#e55a47] text-white font-bold rounded-xl text-md transition-all shadow-md shadow-[#FF6B57]/20"
                  >
                    Sign Up
                  </Button>
                </div>

                <FieldDescription className="text-center text-gray-500 mt-6">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="text-[#00A5FF] font-semibold hover:underline"
                  >
                    Log in
                  </Link>
                </FieldDescription>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>

        <FieldDescription className="px-6 text-center text-xs text-gray-400">
          By clicking continue, you agree to our{" "}
          <a
            href="#"
            className="hover:text-[#FF6B57] transition-colors underline"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="hover:text-[#FF6B57] transition-colors underline"
          >
            Privacy Policy
          </a>
          .
        </FieldDescription>
      </div>
    </div>
  );
}
