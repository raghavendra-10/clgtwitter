import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { db } from '../firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import EventForm from './EventForm';
import './calender.css';
import { MdDelete } from 'react-icons/md';
const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const fetchEvents = async () => {
    try {
      const eventsCollection = collection(db, 'events');
      const querySnapshot = await getDocs(eventsCollection);
      const eventsData = querySnapshot.docs.map((doc) => {
        const eventData = doc.data();
        return {
          id: doc.id,
          title: eventData.title,
          start: eventData.start.toDate(),
          end: eventData.end.toDate(),
        };
      });
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEventCreated = () => {
    fetchEvents();
    setShowEventForm(false);
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await deleteDoc(doc(db, 'events', eventId));
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="calendar-container">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => setShowEventForm(true)}
      >
        Add Event
      </button>
      {showEventForm && (
        <div className="fixed backdrop-blur-md inset-0 flex justify-center items-center bg-gray-800 z-50">
          <div className="bg-white p-4 rounded-md shadow-md w-2/3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4" onClick={() => setShowEventForm(false)}>
              Close
            </button>
            <EventForm onEventCreated={handleEventCreated} selectedEventId={selectedEventId} />
          </div>
        </div>
      )}

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={(event) => setSelectedEventId(event.id)}
        components={{
          event: ({ event }) => (
            <div>
              <div>{event.title}</div>
              <button onClick={() => handleDeleteEvent(event.id)}><MdDelete size={20} /></button>
            </div>
          ),
        }}
        popup
      />
    </div>
  );
};

export default CalendarComponent;
