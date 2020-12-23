import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     // setCategories(
    //     //     [...categories, 'que pedo?'] 
    //     // );
    //     setCategories(
    //         cats => [...cats, 'que pex?']
    //     );
    // }

    return (
        <div>
            <h2>Gif App by Josh Men</h2>
            <AddCategory setCategories = {setCategories} />
            <hr></hr>

            <ol>
            {
                categories.map(category => (
                    <GifGrid 
                    key = {category}
                    category = {category} 
                    />
                ))
            }
            </ol>

        </div>
    )
}
