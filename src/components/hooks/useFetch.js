import { useState } from "react";

export const useFetching = (callbalk) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const fetching = async () => {
        try {
            setIsLoading(true)
            await callbalk()

        } catch (error) {
            setError(error.message)

        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}
