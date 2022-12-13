import { useQuery } from "@apollo/client";
import { CONTINENTS_QUERY } from 'graphql/queries/continents';
import { toast } from "react-toastify";

export const useContinents = () => {
    const { data, loading, error } = useQuery(CONTINENTS_QUERY);

    if (error) {
        toast.error(error.message, {toastId: 'error'})
    }

    return {
        continents: data?.continents,
        loading,
        error
    }
}