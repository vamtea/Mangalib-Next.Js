"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Plus } from "lucide-react"

import { cn } from "@/shared/lib/utils"

const FiletrCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "border-[#8a8a8e] border-[2px] rounded-[1px] cursor-pointer h-[15px] w-[15px] peer-checked:bg-[#3cce7b] data-[state=checked]:bg-[#3cce7b] peer data-[state=checked]:border-none text-white",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Plus  size={12}  strokeWidth={3}  />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
FiletrCheckbox.displayName = CheckboxPrimitive.Root.displayName

export { FiletrCheckbox }

// peer h-4 w-4 shrink-0  border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground