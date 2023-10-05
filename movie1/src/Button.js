import { Component } from 'react'

class Button extends Component{
    render(){
        return(
            <button onClick={function(params) {
                alert('Clicked!!')
            }}>Click Me</button>
        )
    }
}
export default Button