const Login = () => {
    var HandleClick = async () => {
        var response = await fetch("http://localhost:3000/login", {
            method: "POST", 
            body: {Username: "ArianaGrande1",
                Password: "Passw123"
            }
        })
        console.log (response)
    }
    return (
        <div>
            <form>
                {/* the for= and type= are html attributes */}
                <label> Username:</label>
                <input type="text" id="fname" name="fname"></input>
                <br></br>
                <label for="lname">Password:</label>
                <input type="text" id="lname" name="lname"></input>
                <br></br>
                <input onClick={HandleClick} type="submit" value="Submit"></input>
            </form>
        </div>
    )
}
export default Login