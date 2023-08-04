import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "@picocss/pico";
import PropTypes from 'prop-types'
import { supabase } from '../client'
import Card from '../components/CreatorCard'
import Navigation from '../components/Navigation';


const ShowCreators = () => {
    const [creatorData, setCreatorData] = useState()

    useEffect(() => {
        const getData = async () => {
        supabase
            .from('creators')
            .select()
            .order('id', {ascending: true})
            .then(res => setCreatorData(res.data))
        }

        getData()
    }, [])

    const navigate = useNavigate()

    const handleAddCreatorClick = () => {
        navigate('/add-creator')
    }

    const renderCreatorCards = () => {
        if (creatorData === undefined){
            return <></>
        }
        else if (Object.keys(creatorData).length === 0) {
            return <h1>There are currently no entries in the database.</h1>
        } 
        else {
            const creatorList = creatorData?.map((creator, index) => {
                return (
                    <Card
                        key={index}
                        id={creator.id}
                        name={creator.name}
                        imageURL={creator.imageURL}
                    />
                )
            })
            // console.log('creatorList', creatorList)
            return creatorList
        }
    }

    return (
        <main className="container">
            <Navigation />
            <h1>Creators</h1>
            <div className="grid">
               {renderCreatorCards()} 
            </div>
            <button type="button" role="button" className="large-button" onClick={handleAddCreatorClick} >
                Add a Creator
            </button> 
        </main >
    )
}

ShowCreators.propTypes = {
    creatorData: PropTypes.array
}

export default ShowCreators