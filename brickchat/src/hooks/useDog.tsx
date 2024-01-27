import { useState } from "react";
import axios from "axios";

export interface DogData {
    url: string;
    // Add more properties as per the response data structure if needed
}

interface ErrorResponse {
    message: string;
    // Add more properties as per the error response structure if needed
}

interface HookReturnValue {
    dogData: DogData | null;
    dogLoading: boolean;
    dogError: ErrorResponse | null;
    getDog: () => Promise<DogData | null>; 
}

export function useDogApi(): HookReturnValue {
    const url: string = "https://dog.ceo/api/breeds/image/random";
    const [dogData, setDogData] = useState<DogData | null>(null);
    const [dogLoading, setDogLoading] = useState<boolean>(false);
    const [dogError, setDogError] = useState<ErrorResponse | null>(null);

    const getDog = async (): Promise<DogData | null> => {
        setDogLoading(true);
    
        try {
            const response = await axios.get(url);
            const dogURL = response.data.message;
            setDogData({ url: dogURL });
            setDogError(null);
            return { url: dogURL };
        } catch (err: any) { // Use 'any' or specify the exact error type you expect
            if (err instanceof Error) {
                setDogError({ message: err.message });
            } else {
                setDogError({ message: "An error occurred" });
            }
            setDogData(null);
            return null; // You can return null in case of an error
        } finally {
            setDogLoading(false);
        }
    };
    
    
    return { dogData, dogLoading, dogError, getDog };
}

