import { Component } from 'react'

class Rando extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 5 }
        this.makeTimer()
    }
    makeTimer() {
        setInterval(() => {
            let rand = Math.random() * this.props.maxNum
            this.setState({ num: rand })
        }, 1000);
    }
    render() {
        return <h1>{this.state.num}</h1>
    }
}
export default Rando