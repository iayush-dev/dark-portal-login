import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface AuthFormProps {
  className?: string;
}

const AuthForm = ({ className }: AuthFormProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const handleForgotPassword = () => {
    // Handle forgot password
    console.log("Forgot password clicked");
  };

  return (
    <div className={cn("w-full max-w-md mx-auto p-6", className)}>
      <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-white">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="25"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-white">Gender</Label>
                  <select
                    id="gender"
                    className="w-full h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="college" className="text-white">College Name</Label>
                <Input
                  id="college"
                  placeholder="University Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="year" className="text-white">Year</Label>
                  <Input
                    id="year"
                    type="number"
                    placeholder="2024"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-white">City</Label>
                  <Input
                    id="city"
                    placeholder="New York"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills" className="text-white">Skills</Label>
                <Input
                  id="skills"
                  placeholder="e.g., JavaScript, React, Node.js"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-white">Experience</Label>
                <Input
                  id="experience"
                  placeholder="Years of experience"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              type="password"
              className="bg-white/10 border-white/20 text-white"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-white/20 data-[state=checked]:bg-lime data-[state=checked]:border-lime"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none text-white cursor-pointer"
              >
                Remember me
              </label>
            </div>
            {!isSignUp && (
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-lime hover:underline"
              >
                Forgot password?
              </button>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-lime hover:bg-lime/90 text-black font-semibold transition-colors"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <p className="text-center text-white/60 text-sm">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-lime hover:underline font-medium"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;