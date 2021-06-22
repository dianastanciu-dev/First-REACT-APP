import React from 'react'
import HeroSection from './../HeroSection'
import Button from '../Button'
import '../Button.css'
import { useHistory } from "react-router-dom" 
import Cards from '../Cards'


function Home() {


        let history = useHistory();
      
        function handleClick() {
          history.push("/home");
        }
      
    return (
        <div>
            <HeroSection />
            <Cards />
            <Button onClick={handleClick}>some other Button</Button>

        </div>
    )
}

export default Home
