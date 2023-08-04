import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import "@picocss/pico";
import Navigation from "../components/Navigation";


const ViewCreator = () => {
    let params = useParams();

    const [creatorData, setCreatorData] = useState({})
    // console.log(creatorData)

    useEffect(() => {
        const getData = async () => {
            supabase
              .from('creators')
              .select()
              .eq('id', params.id)
              .then(res => setCreatorData(res.data[0]))
          }
      
          getData()
    },[])

    return (
        <main className="container">
            <Navigation />
            <div className="center-margin center-text skinny">
                <a href={creatorData.url}>
                    <h1>{creatorData.name} 🔗</h1>
                </a>
                <img src={creatorData.imageURL} />
                <p>{creatorData.description}</p>    
            </div>
           
        </main>
    )
}

export default ViewCreator