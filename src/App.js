import React , {Component} from 'react';
import moment from 'moment'
import { add_Reminder, remove_Reminder, clear_Reminder } from './actions';
import {connect} from 'react-redux';

class App extends Component {
  state = {
    text: '',
    date: new Date()
  }
  render_Reminders = () => {
    const {reminders} = this.props ;
      return (
        <ul className="list-group">
          {
            reminders.map(reminder => {
              return (
                <li key={reminder.id} className='list-group-item'>
                  <div>{reminder.text}</div>
                  <div>{moment(new Date(reminder.date)).fromNow()} </div>
                  <div className="remove btn btn-danger" onClick={() => this.props.remove_Reminder(reminder.id)}>X</div>
                </li>
                )
              })
          }
          </ul>
          )
          }
  render(){
  return (
    <div className="App">
        <img src="" alt="" />
      <div className="reminder-title">
        <h2>What Should You Do ?</h2>
      </div>
      <input 
        className="form-control"
        type="text"
        value={this.state.text}
        placeholder="Enter What U think ...?"
        onChange={(e) => this.setState({text: e.target.value})}
        />
        <input 
        className="form-control"
        type="datetime-local"
        value={this.state.date}
        onChange={(e) => this.setState({date: e.target.value})}
        />
        <button 
            onClick= { () => {
              this.props.add_Reminder(this.state.text, this.state.date)
              this.setState({text:'', date:''})
            }}
           
            className="btn btn-primary btn-block"
        >
          Add Reminder
        </button>
        {this.render_Reminders()}
        <button
        onClick ={ () => this.props.clear_Reminder()}
            className="btn btn-danger btn-block"
         >
           Delete Reminder
        </button>
        
    </div>
  );
}
}

export default connect(state => {
  return {
    reminders: state
  }
  } 
  , {add_Reminder, 
    remove_Reminder,
    clear_Reminder
  }
  )(App);
