import React from 'react';
//
export default class SomeComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showThing: false,
            externalText: 'nothing',
            increment: 0,
            arraySome: [],
        };
        this.handleClickDiv = this.handleClickDiv.bind(this);
        this.myFirstRef = React.createRef();
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if (prevState.externalText !== nextProps.newUser){
            console.log(nextProps.newUser);
            return {
                externalText: nextProps.newUser
            }
        } 
        return null;

    }

    handleClickDiv(){
        this.setState({
            showThing: !this.state.showThing,
            externalText: this.state.showThing ? 'something' : 'nothing'
        })
    }
    //
    handleIncrement = () => {
        let num = this.myFirstRef.current.value;
        num++;
        this.myFirstRef.current.value = num;
    }
    handleIncrement2 = (event) => {
        let num = event.target.value;
        num++;
        event.target.value = num;
        this.setState({increment: num})
        console.log(num);
    }
    render(){
        console.log('render');
        const element = (
            <h1>some text from external element changed to <span style={{color: 'lime'}}>{this.state.externalText}</span></h1>
        );
        const haveSomeInputAlso = (
            <div>
                <input defaultValue={0} ref={this.myFirstRef} ></input>
                <input defaultValue={0}  value={this.state.increment}></input>
            </div>
        );
        return(
            <div onClick={this.handleClickDiv} 
                style={{height: '300px', width: '300px', background: 'purple'}}
            >
                elo
                {this.state.showThing ? <p style={{color: 'white'}}>something inside</p> : null}
                {element}
                {haveSomeInputAlso}
                <button onClick={this.handleIncrement}>add some</button>
                <button onClick={this.handleIncrement2}>add some2</button>
            </div>
        )
    }
}