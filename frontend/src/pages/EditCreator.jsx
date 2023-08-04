import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "@picocss/pico";
import Navigation from "../components/Navigation";


const EditCreator = () => {
    let params = useParams();
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')


    useEffect(() => {
        const getData = async () => {
            supabase
              .from('creators')
              .select()
              .eq('id', params.id)
              .then(res => {
                console.log(res.data[0])
                setName(res.data[0].name)
                setUrl(res.data[0].url)
                setDescription(res.data[0].description)
                setImageUrl(res.data[0].imageURL)
              })
          }
      
          getData()
    },[])


    // Form Handlers
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value)
    }


    // Form submit handler, validates that required fields are filled in, checks for error when inserting into supabase
    const handleSave = async () => {
        if(name === '' || url === '' || description === '') {
            alert('Please fill out the required fields before submitting')
        } else {
            // Update Creator in Supabase
            const { error } = await supabase
                .from('creators')
                .update({name: name, url: url, description: description, imageURL: imageUrl})
                .eq('id', params.id)
        
            if(error) {
                console.log('Supabase Error', error)
                alert('Error adding creator to database. Please try again!')
            } else {
                console.log('Successfully added to database. Navigating back to "/"')
                navigate('/')
            }
        }
    }


    const handleDelete = async () => {
        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', params.id)
        
        if(error) {
            console.log('Supabase Error', error)
            alert('Error deleting creator from database. Please try again!')
        } else {
            console.log('Successfully deleted from database. Navigating back to "/"')
            navigate('/')
        }
    }

    return (
        <main className="container">
            <Navigation />
            <hgroup className="center-text">
                <h1>Edit Creator</h1>
                <h2>Complete the form below to add a new content creator to your list!</h2>    
            </hgroup>
            <form className="skinny">
                <label>
                    Name:
                    <input type='text' onChange={handleNameChange} value={name} />
                </label>
                <label>
                    URL:
                    <input type='text' onChange={handleUrlChange} value={url} />
                </label>
                <label>
                    Description:
                    <textarea type='text' onChange={handleDescriptionChange} value={description} />
                </label>
                <label>
                    Image URL (optional):
                    <input type='text' onChange={handleImageUrlChange} value={imageUrl} />
                </label>
                <div className="grid-form">
                    <button type='button' role="button" className='form-button-grid green' onClick={handleSave}>Update</button>
                    <button type='button' role="button" className='form-button-grid red' onClick={handleDelete}>Delete</button>    
                </div>
            </form>
        </main>
    )
}

export default EditCreator