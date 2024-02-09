
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
    handleSubmit;
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
const handleLogout = ()=>{
  dispatch({type: "LogOut"})
  };
// const PF = "http://localhost:5000/images/"
  return (
    <div className="settings mt-20">
      <div className="settingWrapper ">
        <div className="settingsTitle mt-100px">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={handleDelete} >Delete Account</span>
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
          <label className='font-semibold text-lg'>Username</label>
          <input
            type="text"
            defaultValue={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className='font-semibold text-lg'>Email</label>
          <input
            type="email"
            defaultValue={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='font-semibold text-lg'>Password</label>
          <input
            type="password"
            defaultValue={user.password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit bg-[#FFA726] text-white font-bold " type="submit">Update</button>
          <li className='Top-bar-nav-ul-logout cursor-pointer hover:text-black font-semibold text-lg list-none' onClick={handleLogout}>
  {user && "LOGOUT"}
</li>
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