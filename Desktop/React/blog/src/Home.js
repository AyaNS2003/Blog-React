import {useState} from 'react';
const Home = () => {

    const handleClick = () =>{
        setName('Aya Sawalha');
         setAge(22);
    }
    const [name , setName ] = useState('Aya');
    const [age , setAge ] = useState(21);
    return ( 
        <dov className="home">
            <h2>Home page </h2>
            <p>Hello { name }, you are {age} years old!</p>
            <button onClick={() => {handleClick('Aya')}}>Click me!</button>
        </dov>
     );
}
 
export default Home;