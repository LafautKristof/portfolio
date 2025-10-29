// types/tech.ts
export type StackVariant = "light" | "dark" | "grayscale";

export interface Tech {
    name: string;
    icon: string;
    variant?: StackVariant;
}
