import {useState} from 'react'

const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChanged = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length < 1) return;
        // setCategories( categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setInputValue('')
        
    }

    return (
        <form onSubmit={onSubmit}>
            <input
            type="text"
            placeholder='Buscar Gifts'
            value={inputValue}
            onChange={onInputChanged}
        />
        </form> 
    )
}

export default AddCategory