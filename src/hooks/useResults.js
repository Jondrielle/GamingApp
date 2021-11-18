import {useState,useEffect} from "react";
import GameSpot from "../api/GameSpot";

export default () => {

const [results,setResults] = useState([]);
const [errorMessage,setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
    console.log(results);
        try{
            console.log("Searching with this term: " + searchTerm);
            const response = await GameSpot.get('/games',{
                params: {
                    api_key: '09939eb54cdc38b5856d035d761e671c3b12cb17',
                    format: 'json',
                    limit:5,
                    filter: "name:" + searchTerm
                }
            });
            setResults(response.data.results);
            setErrorMessage("");
        }catch(e){
            setErrorMessage("Oops, something went wrong!");
        }
    }

     useEffect ( () => {
        searchApi("Call of Duty");
    }, [] );

    return [results,errorMessage,searchApi];
};