const User = (props) =>{
    return <div>
        <h2>{props.name}</h2>
        <h3>{props.age}</h3>
        <h3>{props.email}</h3>
        {props.age <= 18 ? <h3>Under age</h3> : <h3>Over age</h3>}
    </div>
  }
  
  export default User;