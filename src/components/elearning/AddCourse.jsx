import {  collection, addDoc } from "firebase/firestore";
import React,{ useState } from "react";
import { db } from "../../firebaseConfig";


export default function AddCourse() {
  const [title, setTitle] = useState('');

  const addCourse = async () => {

    const course = { title };
    await addDoc(collection(db, "courses"), course);
  };

  return (
    <div>
      <h1>Add Course</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Course Title" />
      <button onClick={addCourse}>Add</button>
    </div>
  );
}
