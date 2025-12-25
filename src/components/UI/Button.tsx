/**
 * BUTTON COMPONENT
 * 
 * რას უნდა შეიცავდეს:
 * - Reusable button component
 * - Multiple variants (primary, secondary, outline, ghost)
 * - Multiple sizes (sm, md, lg)
 * - Loading state
 * - Icon support (left/right)
 * 
 * რას აკეთებს:
 * - ღილაკების უნიფიცირება მთელ აპში
 * - SCSS სტილებთან ინტეგრაცია (.btn, .btn-primary, .btn-secondary)
 * - Disabled, loading states მართვა
 * - Click handler გამოძახება
 * 
 * სად იმპორტდება:
 * - ყველგან სადაც ღილაკი გჭირდება
 * - SearchCity, Header, WeatherCard, etc.
 * 
 * რა props უნდა მიიღოს:
 * - variant: 'primary' | 'secondary' | 'outline' | 'ghost'
 * - size: 'sm' | 'md' | 'lg'
 * - isLoading: boolean
 * - disabled: boolean
 * - icon: ReactNode (optional)
 * - iconPosition: 'left' | 'right'
 * - onClick: () => void
 * - children: ReactNode (ღილაკის ტექსტი)
 * 
 * რა icons დაგჭირდება:
 * - lucide-react: Loader2 (loading spinner)
 */
