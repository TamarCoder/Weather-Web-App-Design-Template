/**
 * SIDEBAR COMPONENT
 * 
 * რას უნდა შეიცავდეს:
 * - Popular cities list (პოპულარული ქალაქები)
 * - Recent searches (ბოლო ძიებები)
 * - Quick weather info cards
 * - Favorite cities - optional
 * - Settings section
 * 
 * რას აკეთებს:
 * - ქალაქის სწრაფი არჩევა popular list-დან
 * - ბოლო ძიებული ქალაქების ჩვენება
 * - ფავორიტების მართვა (add/remove)
 * - mobile-ზე slide-in drawer
 * 
 * სად იმპორტდება:
 * - src/app/page.tsx - მთავარ გვერდზე
 * - desktop: გვერდითა panel, mobile: hamburger menu-დან
 * 
 * რა props უნდა მიიღოს:
 * - isOpen: boolean (mobile drawer-ისთვის)
 * - onClose: () => void (mobile-ზე დასახურად)
 * 
 * რა icons დაგჭირდება:
 * - lucide-react: Star, Clock, MapPin, X, ChevronRight
 */
