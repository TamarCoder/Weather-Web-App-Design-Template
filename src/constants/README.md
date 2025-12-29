# Suggested Cities Constants

## ქართული

### მიზანი
წინასწარ განსაზღვრული ქალაქების სია "More Suggestions" სექციისთვის.

### სტრუქტურა

```typescript
export const SUGGESTED_CITIES = [
  'London',
  'Paris',
  'Tokyo',
  'New York',
  'Dubai',
  'Sydney',
  'Berlin',
  'Rome',
  'Madrid',
  'Amsterdam',
  'Barcelona',
  'Vienna',
  'Istanbul',
  'Moscow',
  'Toronto',
  'Los Angeles',
  'Singapore',
  'Hong Kong',
  'Seoul',
  'Mumbai',
];
```

### გამოყენება

MainContent კომპონენტი ყოველ refresh-ზე:
1. ირჩევს 3 შემთხვევით ქალაქს ამ სიიდან
2. იძახებს weather API-ს თითოეული ქალაქისთვის
3. აჩვენებს "More Suggestions" სექციაში

```typescript
import { SUGGESTED_CITIES } from '@/constants/cities';

// შემთხვევითი 3 ქალაქის არჩევა
const getRandomCities = (count: number) => {
  const shuffled = [...SUGGESTED_CITIES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
```

### რატომ ეს ქალაქები?
- პოპულარული ტურისტული დანიშნულებები
- სხვადასხვა დროის ზონები
- მსოფლიოს მთავარი ქალაქები
- ცნობადი ლოკაციები

### როგორ დავამატოთ ახალი ქალაქი
უბრალოდ დაამატეთ სიაში:
```typescript
export const SUGGESTED_CITIES = [
  'London',
  'Paris',
  // ... სხვა ქალაქები
  'Tbilisi', // ახალი ქალაქი
];
```

### სად გამოიყენება
- `components/MainContent/MainContent.tsx` - More Suggestions სექცია

---

## English

### Purpose
Predefined list of cities for the "More Suggestions" section.

### Structure

```typescript
export const SUGGESTED_CITIES = [
  'London',
  'Paris',
  'Tokyo',
  'New York',
  'Dubai',
  'Sydney',
  'Berlin',
  'Rome',
  'Madrid',
  'Amsterdam',
  'Barcelona',
  'Vienna',
  'Istanbul',
  'Moscow',
  'Toronto',
  'Los Angeles',
  'Singapore',
  'Hong Kong',
  'Seoul',
  'Mumbai',
];
```

### Usage

MainContent component on each refresh:
1. Selects 3 random cities from this list
2. Calls weather API for each city
3. Displays in "More Suggestions" section

```typescript
import { SUGGESTED_CITIES } from '@/constants/cities';

// Select 3 random cities
const getRandomCities = (count: number) => {
  const shuffled = [...SUGGESTED_CITIES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
```

### Why these cities?
- Popular tourist destinations
- Different time zones
- Major world cities
- Recognizable locations

### How to add new city
Simply add to the list:
```typescript
export const SUGGESTED_CITIES = [
  'London',
  'Paris',
  // ... other cities
  'Tbilisi', // new city
];
```

### Where it's used
- `components/MainContent/MainContent.tsx` - More Suggestions section
