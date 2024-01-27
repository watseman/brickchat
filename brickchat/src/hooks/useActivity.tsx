import { useState } from "react";
import axios from "axios";

interface ActivityData {
    activity: string;
    // Add more properties as per the response data structure if needed
}

interface ErrorResponse {
    message: string;
    // Add more properties as per the error response structure if needed
}

interface HookReturnValue {
    activityData: ActivityData | null;
    activityLoading: boolean;
    activityError: ErrorResponse | null;
    getActivity: () => void;
}

export function useActivityApi(): HookReturnValue {
    const url: string = "https://www.boredapi.com/api/activity";
    const [activityData, setActivityData] = useState<ActivityData | null>(null);
    const [activityLoading, setActivityLoading] = useState<boolean>(false);
    const [activityError, setActivityError] = useState<ErrorResponse | null>(null);

    const getActivity = () => {
        setActivityLoading(true);
        axios.get(url)
            .then((response) => {
                setActivityData(response.data);
                setActivityError(null); // Resetting error state in case of successful response
            })
            .catch((err) => {
                setActivityError({ message: err.message });
                setActivityData(null); // Resetting data state in case of error
            })
            .finally(() => {
                setActivityLoading(false);
            });
    };

    return { activityData, activityLoading, activityError, getActivity };
}

