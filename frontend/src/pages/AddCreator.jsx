import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../client"
import Navigation from "../components/Navigation"

const AddCreator = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')

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
    const handleAddCreator = async () => {
        if(name === '' || url === '' || description === '') {
            alert('Please fill out the required fields before submitting')
        } else {
            // Insert Creator to Supabase
            const { error } = await supabase
                .from('creators')
                .insert({name: name, url: url, description: description, imageURL: imageUrl})
        
            // Supabase error check
            if(error) {
                console.log('Supabase Error', error)
                alert('Error adding creator to database. Please try again!')
            } else {
                console.log('Successfully added to database. Navigating back to "/"')
                navigate('/')
            }
        }
    }

    return (
        <main className="container">
            <Navigation />
            <hgroup className="center-text">
                <h1>Add a New Creator</h1>
                <h2>Complete the form below to add a new content creator to your list!</h2>
            </hgroup>
            <form className="skinny">
                <label>
                    Name:
                    <input type='text' onChange={handleNameChange}/>
                </label>
                <label>
                    URL:
                    <input type='text' onChange={handleUrlChange}/>
                </label>
                <label>
                    Description:
                    <textarea type='text' onChange={handleDescriptionChange}/>
                </label>
                <label>
                    Image URL (optional):
                    <input type='text' onChange={handleImageUrlChange}/>
                </label>
                <button type='button' className='form-button' onClick={handleAddCreator}>Add Creator</button>
            </form>
        </main>
    )
}

export default AddCreator