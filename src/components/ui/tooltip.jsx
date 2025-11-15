import * as React from "react"
import { cn } from "@/lib/utils"

const TooltipProvider = ({ children }) => {
  return <>{children}</>
}

const Tooltip = ({ children }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {React.Children.map(children, (child) => {
        if (child.type === TooltipTrigger) {
          return React.cloneElement(child, { open })
        }
        if (child.type === TooltipContent) {
          return React.cloneElement(child, { open })
        }
        return child
      })}
    </div>
  )
}

const TooltipTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  )
})
TooltipTrigger.displayName = "TooltipTrigger"

const TooltipContent = React.forwardRef(({ className, open, children, ...props }, ref) => {
  if (!open) return null

  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 min-w-[200px] overflow-hidden rounded-md bg-popover px-3 py-2 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        "bottom-full left-1/2 -translate-x-1/2 mb-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
