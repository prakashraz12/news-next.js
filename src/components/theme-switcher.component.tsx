import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoonIcon, SunIcon } from "lucide-react"

export function ModeToggle() {
  const { setTheme } = useTheme()

  // Memoize event handler functions
  const handleLightClick = React.useCallback(() => setTheme("light"), [setTheme])
  const handleDarkClick = React.useCallback(() => setTheme("dark"), [setTheme])
  const handleSystemClick = React.useCallback(() => setTheme("system"), [setTheme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" size="icon"  aria-label="toggle-button" >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleLightClick}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDarkClick}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSystemClick}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
