import React,{ useEffect } from 'react'
import { gsap } from 'gsap'

const MenuComponent = (props) => {

    // function to do the  close button animation when clicked
    function MenuAnimation(){
        gsap.to(
            "#MenuCloseButton",
            {
                rotation:"360deg",
                duration:0.7,
                onStart: () => {
                    setTimeout(() => {
                        props.CloseMenu();
                    },[250])
                }
            }
        )
        gsap.to(
            "#MenuBackdrop",
            {
                display:"none",
                duration:0.1
            }
        )
    }

    return (
        <div className='w-[100vw]'>
            <div className='absolute z-[101] w-[35%] h-[100vh] bg-c_sub p-5 border-c_border border-r-[3px]'>
                <div onClick={() => {
                            MenuAnimation()
                        }} className='group p-2 px-2.5 border-2 border-c_border rounded-lg float-right
                hover:bg-white hover:border-white'>
                    <i id='MenuCloseButton' className="fas fa-xmark text-lg leading-[0px] rotate-0
                        group-hover:text-c_main group-hover:rotate-[360deg]" aria-hidden="true"></i>
                </div>
            </div>
            <div id='MenuBackdrop' className='absolute invisible z-[1] w-[100%] h-[100vh] bg-c_main/30 opacity-100 backdrop-blur-sm'></div>
            
        </div>
    )
}

export default MenuComponent