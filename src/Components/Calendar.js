// import React, { useState, useEffect } from 'react';
// import './calendar.css';
// import { IonIcon } from '@ionic/react';
// import { personCircleOutline, home, calendar, settings, accessibility } from 'ionicons/icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRunning, faDumbbell } from '@fortawesome/free-solid-svg-icons';

// const Calendar = () => {
//   const [currentWeek, setCurrentWeek] = useState('May 27 - Jun 02, 2024');
//   const [events, setEvents] = useState([]);

//   useEffect(() => {

//     setEvents([
//       { day: 'Mon 27', startTime: '07:00', endTime: '08:00', eventName: 'Sarah' },
//       { day: 'Thu 30', startTime: '01:30', endTime: '02:30', eventName: 'James' },
//       { day: 'Sun 2', startTime: '01:30', endTime: '02:30', eventName: 'James' },
//     ]);
//   }, []);

//   const renderTableBody = () => {
//     const rows = [];
//     for (let hour = 0; hour < 24; hour++) {
//       const cells = [<td key={`hour-${hour}`}>{`${hour}:00`}</td>];
//       for (let day = 0; day < 7; day++) {
//         cells.push(<td key={`hour-${hour}-day-${day}`}></td>);
//       }
//       rows.push(<tr key={`row-${hour}`}>{cells}</tr>);
//     }
//     return rows;
//   };

//   return (
//     <div className="calendar-container">
//       <nav>
//         <a href="../index.html" className="home"><IonIcon icon={home} /></a>
//         <a href="../Calendar/calendar.html" className="active"><IonIcon icon={calendar} /></a>
//         <a href="../cadiac/cardiacexercise.html"><FontAwesomeIcon icon={faRunning} /></a>
//         <a href="../strength/strength.html" style={{ fontSize: '1.4rem' }}><FontAwesomeIcon icon={faDumbbell} /></a>
//         <a href="../flexibility/flexibilityexercise.html"><IonIcon icon={accessibility} /></a>
//         <div className="navspacer"></div>
//         <a href="../Setting/settings.html"><IonIcon icon={settings} /></a>
//         <a href="../Profile/profile.html"><IonIcon style={{ fontSize: '1.75rem' }} icon={personCircleOutline} /></a>
//       </nav>
//       <div className="bg"></div>
//       <div className="header">
//         <span id="currentWeek">{currentWeek}</span>
//       </div>
//       <table className="calendar">
//         <thead>
//           <tr>
//             <th>Time</th>
//             <th>Mon 27</th>
//             <th>Tue 28</th>
//             <th>Wed 29</th>
//             <th>Thu 30</th>
//             <th>Fri 31</th>
//             <th>Sat 1</th>
//             <th>Sun 2</th>
//           </tr>
//         </thead>
//         <tbody>
//           {renderTableBody()}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Calendar;
