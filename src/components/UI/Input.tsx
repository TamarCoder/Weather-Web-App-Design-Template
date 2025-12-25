/**
 * INPUT COMPONENT
 * 
 * რას უნდა შეიცავდეს:
 * - Reusable input field
 * - Label support
 * - Error message display
 * - Icon support (left/right)
 * - Different input types (text, email, search, etc.)
 * 
 * რას აკეთებს:
 * - input field-ების უნიფიცირება
 * - SCSS სტილებთან ინტეგრაცია
 * - Validation error-ების ჩვენება
 * - Focus, hover states მართვა
 * 
 * სად იმპორტდება:
 * - SearchCity (ქალაქის ძიება)
 * - Forms (თუ გჭირდება)
 * 
 * რა props უნდა მიიღოს:
 * - label: string (optional)
 * - type: string (default: 'text')
 * - placeholder: string
 * - value: string
 * - onChange: (value: string) => void
 * - error: string (optional)
 * - icon: ReactNode (optional)
 * - iconPosition: 'left' | 'right'
 * - disabled: boolean
 * 
 * რა icons დაგჭირდება:
 * - lucide-react: Search, AlertCircle
 */
