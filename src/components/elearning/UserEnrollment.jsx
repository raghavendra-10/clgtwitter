import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const UserEnrollment = ({ user }) => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        const fetchEnrollments = async () => {
            const enrollmentsCollection = collection(db, 'enrollments');
            const userEnrollments = query(enrollmentsCollection, where('userId', '==', user.uid));
            const enrollmentSnapshot = await getDocs(userEnrollments);
            const enrolledCourseIds = enrollmentSnapshot.docs.map(doc => doc.data().courseId);
            
            const courseCollection = collection(db, 'courses');
            const courseSnapshot = await getDocs(courseCollection);
            const courses = courseSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            
            const userCourses = courses.filter(course => enrolledCourseIds.includes(course.id));
            setEnrolledCourses(userCourses);
        };

        fetchEnrollments();
    }, [user]);

    return (
        <div>
            <h1>Enrolled Courses</h1>
            <ul>
                {enrolledCourses.map(course => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserEnrollment;
