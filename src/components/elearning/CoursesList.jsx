import React , { useEffect, useState } from "react";
import {  collection, getDocs } from "firebase/firestore";
import {db} from "../../firebaseConfig"

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
    
      const courseCollection = collection(db, "courses");
      const courseSnapshot = await getDocs(courseCollection);
      const courseList = courseSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setCourses(courseList);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}
