
import { useContext, useState, FormEvent, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Context } from '../context/Context';
import axios from 'axios';

interface UpdatedUser {
  userId: string;
  username: string | null;
  email: string | null;
  password: string | null;
  profilePic?: string;
}

function Setting() {
  const [file, setFile] = useState<File | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = "https://localhost:5000/images/";

  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
    setPassword(user.password);
  }, [user]);



  interface user{
    username:string,
    password:any
  }
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/users/deleteuser/${user._id}`, {
        data: { username: user.username, userId:user._id, password:user.password },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err)
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser: UpdatedUser = {
      userId: user._id,
      username,
      email,
      password,
      profilePic:""
    };

    if (file) {
      const formData = new FormData();
      const filename = Date.now() + file.name;
      formData.append("name", filename);
      formData.append("file", file);
      updatedUser.profilePic = filename;

      try {
      await axios.post("http://localhost:5000/api/upload",formData);
        setSuccess(true);
        // dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        // dispatch({ type: "UPDATE_PROFILE_PICTURE", payload: filename });
      } catch (error) {
        // dispatch({ type: "UPDATE_FAILURE" });
      }
    }

    try {
      const res =await axios.put(
        "http://localhost:5000/api/users/updateuser/"+ user._id,updatedUser
      );
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });

    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  // const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setFile(e.target.files[0]);
  //   }
  // };
console.log(user)
// const PF = "http://localhost:5000/images/"
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle" onClick={handleDelete} >Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingspp">
            <img
              className="settingspp-img"
              src={file ? URL.createObjectURL(file):PF+user.profilePic }
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsppIcon fa-regular fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              // name="file"
              style={{ display: "none" }}
              onChange={(e)=>setFile(e.target.files![0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            defaultValue={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            defaultValue={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            defaultValue={user.password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit " type="submit">Update</button>
          {success && (
            <span style={{ color: "green", textAlign: "center", margin: "20px" }}>
              Updated successfully!!
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;