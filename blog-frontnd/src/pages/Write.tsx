
import axios from "axios";
import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { Context } from "../context/Context";
function Write() {
  // const [categories,setCategories] =useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { user} = useContext(Context);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newPost = {
      username: user?.username,
      title,
      desc,
      // categories,
      photo:""
    };
    if (file) {
      const formData = new FormData();
      const filename = Date.now() + file.name;
      formData.append("name", filename);
      formData.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", formData);
      } catch (error) {
        console.error(error);
      }
    }

    try {
       await axios.post(
        "http://localhost:5000/api/posts/create",
        newPost
      );
      // window.location.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }   
  };

  return (
    <div className="write">
      {file && <img className="writeImg" src={URL.createObjectURL(file)} alt="" />}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-file-circle-plus"></i>
          </label>
          <input
            type="file"
            name="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            className="writeInput writeText"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        
        <button className="writeSubmit bg-green-700 mt-4 md:mt-6" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;



