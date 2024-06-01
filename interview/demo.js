function userForm() {
  const [userData, setUserName] = useState({ userName: "", password: "" });

  const handleFormData = (e) => {
    e.preventDefault();
    // check is user exixt in storage
    if (
      localStorage.getItem("userName") === userData.userName &&
      localStorage.getItem("password") === userData.password
    ) {
      console.log("user already exists!!");
      return;
    } else {
      localStorage({ ...userData });
    }
  };

  const formInputHandler = (e) => {
    setUserName({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleFormData}>
      <input
        type="text"
        name="userName"
        value={userName}
        onChange={formInputHandler}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={formInputHandler}
      />
      <buton>click</buton>
    </form>
  );
}
