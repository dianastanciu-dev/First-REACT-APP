import React from 'react'
import HeroSection from './../HeroSection'
import Button from '../Button'
import '../Button.css'
import { useHistory } from "react-router-dom" 


function Home() {


        let history = useHistory();
      
        function handleClick() {
          history.push("/home");
        }
      
    return (
        <div>
            <HeroSection />
            <Button onClick={handleClick}>some other Button</Button>

        </div>
    )
}

export default Home
