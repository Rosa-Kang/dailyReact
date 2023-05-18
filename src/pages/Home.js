import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const Home = () => {
    const { data , isLoading, isError} = useQuery(["cat"], () => { 
        Axios.get('https://catfact.ninja/facts').then((res) => res.data) 
    });


    if (isError) {
        return <h1>Sorry, there was an error</h1>;
    }
    
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return <h1>The user is : {data?.fact}</h1>
}