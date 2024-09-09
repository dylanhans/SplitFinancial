/* eslint-disable no-prototype-builtins */
import { type ClassValue, clsx } from "clsx";
import qs from "query-string";
import { twMerge } from "tailwind-merge";
import { z } from "zod";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// FORMAT DATE TIME
export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    year: "numeric", // numeric year (e.g., '2023')
    month: "2-digit", // abbreviated month name (e.g., 'Oct')
    day: "2-digit", // numeric day of the month (e.g., '25')
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "en-US",
    dateTimeOptions
  );

  const formattedDateDay: string = new Date(dateString).toLocaleString(
    "en-US",
    dateDayOptions
  );

  const formattedDate: string = new Date(dateString).toLocaleString(
    "en-US",
    dateOptions
  );

  const formattedTime: string = new Date(dateString).toLocaleString(
    "en-US",
    timeOptions
  );

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}

export const titleOptions = [
  { value: 'Mr.', label: 'Mr.' },
  { value: 'Mrs.', label: 'Mrs.' },
  { value: 'Miss', label: 'Miss' },
  { value: 'Ms', label: 'Ms' },
  { value: 'Mx', label: 'Mx' },
  { value: 'Dr', label: 'Dr' },
  { value: 'Prof', label: 'Prof' },
  { value: 'Ind', label: 'Ind' },
  { value: 'Prefer not to say', label: 'Prefer not to say' }
];

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const removeSpecialCharacters = (value: string) => {
  // Remove special characters
  const newValue = value.replace(/[^\w\s]/gi, "");

  // Capitalize first letter if not already capitalized
  return newValue.charAt(0).toUpperCase() + newValue.slice(1);
};

export const removePaymentCharacters = (value: string) => {
  
  const desiredString = "PAYMENT - THANK YOU / PAIEMENT - MERCI";
  const newString = desiredString.replace(" /", "\n/");

  // Convert to uppercase and return
  return newString.toUpperCase();
};


interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

export function getAccountTypeColors(type: AccountTypes) {
  switch (type) {
    case "depository":
      return {
        bg: "bg-blue-25",
        lightBg: "bg-blue-100",
        title: "text-blue-900",
        subText: "text-blue-700",
      };

    case "credit":
      return {
        bg: "bg-success-25",
        lightBg: "bg-success-100",
        title: "text-success-900",
        subText: "text-success-700",
      };

    default:
      return {
        bg: "bg-green-25",
        lightBg: "bg-green-100",
        title: "text-green-900",
        subText: "text-green-700",
      };
  }
}

export function countTransactionCategories(
  transactions: Transaction[]
): CategoryCount[] {
  const categoryCounts: { [category: string]: number } = {};
  let totalCount = 0;

  // Iterate over each transaction
  transactions &&
    transactions.forEach((transaction) => {
      // Extract the category from the transaction
      const category = transaction.category;

      // If the category exists in the categoryCounts object, increment its count
      if (categoryCounts.hasOwnProperty(category)) {
        categoryCounts[category]++;
      } else {
        // Otherwise, initialize the count to 1
        categoryCounts[category] = 1;
      }

      // Increment total count
      totalCount++;
    });

  // Convert the categoryCounts object to an array of objects
  const aggregatedCategories: CategoryCount[] = Object.keys(categoryCounts).map(
    (category) => ({
      name: category,
      count: categoryCounts[category],
      totalCount,
    })
  );

  // Sort the aggregatedCategories array by count in descending order
  aggregatedCategories.sort((a, b) => b.count - a.count);

  return aggregatedCategories;
}

export function extractCustomerIdFromUrl(url: string) {
  // Split the URL string by '/'
  const parts = url.split("/");

  // Extract the last part, which represents the customer ID
  const customerId = parts[parts.length - 1];

  return customerId;
}

export function encryptId(id: string) {
  return btoa(id);
}

export function decryptId(id: string) {
  return atob(id);
}

export const getTransactionStatus = (date: Date) => {
  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  return date > twoDaysAgo ? "Processing" : "Success";
};

export const authformSchema = (type: string)=>z.object({
  // sign up
  address1: type==='sign-in' ? z.string().optional() : z.string().max(50), 
  lastName: type==='sign-in' ? z.string().optional() : z.string().min(3), 
  firstName: type==='sign-in' ? z.string().optional() : z.string().min(3), 
  state: type==='sign-in' ? z.string().optional() : z.string().min(2).max(2), 
  postalCode: type==='sign-in' ? z.string().optional() : z.string().min(3).max(6), 
  dateOfBirth: type==='sign-in' ? z.string().optional() : z.string().min(3), 
  ssn: type==='sign-in' ? z.string().optional() : z.string().min(3), 
  city: type==='sign-in' ? z.string().optional() : z.string().max(50),
  // both sign in and sign up
  email: z.string().email(),
  password: z.string().min(8),
})

export const phoneNumberSchema = z.string().regex(/^\+1 \d{3}-\d{3}-\d{4}$/, {
  message: "Invalid phone number format. Please use +1 XXX-XXX-XXXX.",
});


export const applicationformSchema = z.object({
  // sign up
  address: z.string().max(50), 
  lastName:  z.string().min(3), 
  firstName:  z.string().min(3), 
  province: z.string().min(2).max(2), 
  postalCode: z.string().min(3).max(6), 
  dateOfBirth: z.string().min(3), 
  unitNum: z.string().min(1).optional(),
  ssn: z.string().min(3).optional(),
  city: z.string().max(50),
  email: z.string().email(),
  password: z.string().min(8),
  referTitle: z.enum(['Mr.', 'Mrs.', 'Miss', 'Ms', 'Mx', 'Dr', 'Prof', 'Ind', 'Prefer not to say']).optional(),  // Only allows these options
  middleName: z.string().min(3).optional(),
  phoneNumber: phoneNumberSchema,
  code: z.number().min(6).max(6),
})

export type appformSchema = z.infer<typeof applicationformSchema>;

export const step4schema = applicationformSchema.pick({
  firstName: true,
  lastName: true,
  ssn: true,
  referTitle: true,
  middleName: true,
  dateOfBirth: true,
});

export type Step4Schema = z.infer<typeof step4schema>;

export const step5schema = applicationformSchema.pick({
  phoneNumber: true,
  email: true,
});

export type Step5Schema = z.infer<typeof step5schema>;

export const step6schema = applicationformSchema.pick({
  phoneNumber: true,
  code: true,
});

export type Step6Schema = z.infer<typeof step6schema>;

export const step7schema = applicationformSchema.pick({
  city: true,
  postalCode: true,
  province: true,
  address: true,
  unitNum: true,
});

export type Step7Schema = z.infer<typeof step6schema>;


