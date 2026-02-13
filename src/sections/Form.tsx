import {
  contactFormSchema,
  serviceOptions,
  type ContactFormData,
} from "@/schema/contact.schema";
import { motion } from "motion/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Initialize React Hook Form
  const {
    register, // Function to link standard inputs (like <input>) to the form system
    control, //needed for Controller (the "Brain" for custom inputs)
    handleSubmit,
    formState: { errors }, // Object containing any validation errors (e.g., "Email is required")
    reset, // Function to clear the form after a successful submission
  } = useForm<ContactFormData>({
    // 10. Connect Zod to React Hook Form. This runs your schema rules automatically.
    resolver: zodResolver(contactFormSchema),
    // 11. Set initial values. 'undefined' for service allows the placeholder to show.
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: undefined,
    },
  });

  // 2. Netlify Encoder
  // Helper function to format data for Netlify.
  // React sends JSON by default, but Netlify static forms expect "x-www-form-urlencoded"
  // Example input: { name: "Bob", email: "bob@co.com" }
  // Example output: "name=Bob&email=bob%40co.com"
  const encode = (data: Record<string, any>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  //This function runs ONLY if Zod validation passes
  const onSubmit = async (data: ContactFormData) => {
    
    setIsSubmitting(true);

    try {
      //Send the data to Netlify
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact", //CRITICAL: Matches the 'name' attribute in index.html
          ...data, //Spread the form data (name, email, etc.) into the payload
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      toast.success("Message sent successfully!");

      reset();
    } catch (error) {
      toast.error("Failed to send message.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

const baseInputClasses = `
  bg-white/1
  border border-gray-300
  text-gray-900
  placeholder:text-gray-500
  focus:bg-white/25
  focus:border-gray-900
  focus:ring-1 focus:ring-gray-900
  transition-all
`;



  return (
    <section
      id="contact"
      className="w-full flex justify-center bg-linear-to-b from-gray-950 via-gray-800 to-gray-950"
    >
      <div className="pt-8 pb-8">
        <form
          name="contact" //→ Netlify form name
          method="POST" //→ enable Netlify Forms
          data-netlify="true" //→ required
          data-netlify-honeypot="bot-field" //→ free spam protection
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 w-[95vw] max-w-md mx-auto p-6 rounded-3xl shadow-sm bg-linear-to-b from-gray-600 via-slate-300 to-slate-600"
        >
          <motion.h2
            initial={{ opacity: 0, y: -7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl text-center text-gray-950 font-medium"
          >
            CONTACT US
          </motion.h2>
          {/* Mandatory, Without these Netlify will NOT work. */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="space-y-2">
            {/* NAME */}
            <Label
            className="text-gray-800"
             htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              //Spread the 'register' props. This injects onChange, onBlur, and name="name".
              {...register("name")}
              className={`${baseInputClasses} ${
  errors.name ? "border-red-500 ring-1 ring-red-500" : ""
}`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 font-medium">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <Label
            className="text-gray-800"
             htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className={`${baseInputClasses} ${
  errors.name ? "border-red-500 ring-1 ring-red-500" : ""
}`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label
            className="text-gray-800"
             htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="1234567890"
              {...register("phone")}
              className={`${baseInputClasses} ${
  errors.name ? "border-red-500 ring-1 ring-red-500" : ""
}`}
            />
            {errors.phone && (
              <p className="text-sm text-red-500 font-medium">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* SERVICE USING CONTROLLER*/}
          {/* WHY WE USE CONTROLLER HERE:
          1. The Shadcn <Select> is NOT a real HTML <select> tag. It's a bunch of divs and buttons.
          2. Because it's not a real input, 'register' (which relies on refs) cannot attach to it.
          3. <Controller> acts as a "Bridge". It watches the <Select> and tells React Hook Form 
             "Hey, the user selected 'Main Gates'".
      */}
          <div className="space-y-2">
            <Label className="text-gray-800">Service Required</Label>
            <Controller
              name="service"
              control={control} //Pass the control object from useForm
              render={({ field }) => (
                // 'field' contains: onChange, onBlur, value, ref
                <Select
                  onValueChange={field.onChange} // When Shadcn Select changes, update RHF
                  defaultValue={field.value} //// Set the initial value from RHF
                >
                  <SelectTrigger
                    className={`
    bg-white/1
    border border-gray-300
    text-gray-900
    focus:ring-1 focus:ring-gray-900
    ${errors.service ? "border-red-500 ring-1 ring-red-500" : ""}
  `}
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>

                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {/* Hidden input for Netlify to see the value (since Select is just divs)
            <input type="hidden" {...register("service")} /> */}
            {errors.service && (
              <p className="text-sm text-red-500 font-medium">
                {errors.service.message}
              </p>
            )}
          </div>

          <Button type="submit"
           className="w-full"
            disabled={isSubmitting}
            >
            {isSubmitting ? "Sending..." : "Submit Request"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Form;
