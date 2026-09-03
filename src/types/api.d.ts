declare function fetchAPI(date: Date): string[];

declare function submitAPI(formData: {date: string; time: string; guests: number; occasion: string}): boolean;

declare global {
  interface Window {
    fetchAPI: (date: Date) => string[];
    submitAPI: (formData: unknown) => boolean;
  }
}
