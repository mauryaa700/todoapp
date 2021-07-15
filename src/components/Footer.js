import React from 'react'

export const Footer = () => {
    let footerstyle={
       position:"relative",
       top:"70vh",
       width:"100%",
       color: "red",
       background:"black"
    }
    
    return (
        <div style={footerstyle}>
            <p className='text-center'>
                Copyright &copy; MyTodoList.com
            </p>
                
            
       </div>
    )
}
