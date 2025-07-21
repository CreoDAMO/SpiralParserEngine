import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
      "overflow-x-auto scrollbar-none", // Allow horizontal scrolling on mobile
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium",
      "ring-offset-background transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      "hover:bg-muted-foreground/10 hover:text-foreground",
      "min-w-0 flex-shrink-0", // Prevent text overflow on small screens
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:zoom-in-95",
      "data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 data-[state=inactive]:zoom-out-95",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// Enhanced tabs with keyboard navigation and mobile support
interface EnhancedTabsProps {
  children: React.ReactNode
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  orientation?: "horizontal" | "vertical"
}

const EnhancedTabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  EnhancedTabsProps
>(({ className, orientation = "horizontal", ...props }, ref) => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <TabsPrimitive.Root
      ref={ref}
      orientation={isMobile ? "horizontal" : orientation}
      className={cn(
        "w-full",
        orientation === "vertical" && !isMobile && "flex gap-4",
        className
      )}
      {...props}
    />
  )
})
EnhancedTabs.displayName = "EnhancedTabs"

// Scrollable tabs for mobile
interface ScrollableTabsListProps {
  children: React.ReactNode
  className?: string
}

const ScrollableTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  ScrollableTabsListProps
>(({ className, children, ...props }, ref) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(false)

  const checkScroll = React.useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }, [])

  React.useEffect(() => {
    checkScroll()
    const element = containerRef.current
    if (element) {
      element.addEventListener('scroll', checkScroll)
      return () => element.removeEventListener('scroll', checkScroll)
    }
  }, [checkScroll])

  const scrollTo = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 200
      const newScrollLeft = containerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount)
      containerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={() => scrollTo('left')}
          className="absolute left-0 top-0 z-10 flex h-full items-center px-1 bg-gradient-to-r from-muted to-transparent"
          aria-label="Scroll left"
        >
          <span className="text-muted-foreground">‹</span>
        </button>
      )}
      
      <TabsList
        ref={ref}
        className={cn(
          "overflow-x-auto scrollbar-none",
          className
        )}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        {...props}
      >
        <div ref={containerRef} className="flex">
          {children}
        </div>
      </TabsList>

      {canScrollRight && (
        <button
          onClick={() => scrollTo('right')}
          className="absolute right-0 top-0 z-10 flex h-full items-center px-1 bg-gradient-to-l from-muted to-transparent"
          aria-label="Scroll right"
        >
          <span className="text-muted-foreground">›</span>
        </button>
      )}
    </div>
  )
})
ScrollableTabsList.displayName = "ScrollableTabsList"

export { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent, 
  EnhancedTabs, 
  ScrollableTabsList 
}
