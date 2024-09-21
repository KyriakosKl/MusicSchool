import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Scheduler = () => {
  const [events, setEvents] = useState([
    {
      title: 'Piano Class',
      start: new Date(2023, 9, 25, 10, 0), // Year, Month (0-indexed), Day, Hours, Minutes
      end: new Date(2023, 9, 25, 11, 0),
    },
    {
      title: 'Guitar Class',
      start: new Date(2023, 9, 26, 12, 0),
      end: new Date(2023, 9, 26, 13, 0),
    }
  ]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Enter class name');
    if (title) {
      setEvents(prevEvents => [...prevEvents, { start, end, title }]);
    }
  };

  return (
    <div>
      <h1>Class Scheduler</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
}

export default Scheduler;