import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Castlevania"])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

            {
                categories.map(category => (
                        <GifGrid key={category} category={category} />     
                ))
            }

        </>
    )
}

export default GifExpertApp