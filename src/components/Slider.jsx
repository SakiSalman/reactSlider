import React, { useState } from 'react'

const Slider = ({slides}) => {

    const [current, setCurrent] = useState(0)
   
    const slyderWraperStyle = {
        width : '1200px',
        height : '100vh',
        margin : 'auto',
        textAlign : 'center',
        display :'flex',
        justifyContent : 'center',
        alignItems : 'center',

      
    }
    const sliderStyle = {
        width : '800px',
        height : '550px',
        borderRadius : '10px',
        position : 'relative',
        backgroundImage : `url(${slides[current].url})`,
        backgroundPosition : 'center',
        backgroundSize : 'cover',
        transition : 'all .4s ease'
    }
    const prevStyle = {
        width : '40px',
        height : '40px',
        borderRadius : '100%',
        backgroundColor : '#ddd',
        position : 'absolute',
        top : '50%',
        left : '10px',
        transform : 'translate(0, -50%)',
        cursor : 'pointer',
        border : 'none',
        outline : 'none'
    }
    const nextStyle = {
        width : '40px',
        height : '40px',
        borderRadius : '100%',
        backgroundColor : '#ddd',
        position : 'absolute',
        top : '50%',
        right : '10px',
        transform : 'translate(0, -50%)',
        cursor : 'pointer',
        border : 'none',
        outline : 'none'

    }
    const dotWrapper = {
        position : 'absolute',
        bottom : '10px',
        right : '50%',
        transform : 'translate(50%, 0)',
        padding : '3px',
        borderRadius : '2px',
        display : 'flex'
    }
    const dotsStyle = {
            display : 'inline-block',
            width : '14px ',
            height : '14px ',
            borderRadius : '100%',
            backgroundColor : '#000',
            cursor : 'pointer',
            margin : '0px 3px'
    }

    const goToPrev = () => {

        const firstIndex = current === 0
        const newIndex = firstIndex ? slides.length - 1 : current - 1;
        setCurrent(newIndex)
    }
    const goToNext = () => {

        const firstIndex = current === slides.length - 1
        const newIndex = firstIndex ? 0 : current + 1;
        setCurrent(newIndex)
    }
    const goNextSlide = (inex) => {

        setCurrent(inex)
    }



  return (
        <>

            <div style={slyderWraperStyle} className="sliderWrapper">

                <div style={sliderStyle} className="slider">
                        <button style={prevStyle} onClick={goToPrev}>Prev</button> 
                        <button style={nextStyle} onClick={goToNext}>Next</button> 

                        <div style={dotWrapper} className="dotsWraper">
                            
                            {
                                slides.map( (data, index) => 
                                    
                                    <span key={index} style={dotsStyle} onClick={() => goNextSlide(index)}></span>
                                    
                                    )
                            }
                        </div>
                </div>

            </div>
        
        </>
    
  )
}

export default Slider