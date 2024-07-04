import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "../../css/styleCalendar.css";
import _ from "lodash";
import requestOptions from "../../constants/requestOptions";

const Calendar = (props) => {
  const [currentEvents, setCurrentEvents] = useState(
    _.cloneDeep(props.profile.schedule.data)
  );
  const [editSchedule, setEditSchedule] = useState(false);

  const handleEvents = async (events) => {
    let newEvents = [];
    await Promise.all(
      events.map((event) => {
        newEvents = [
          ...newEvents,
          {
            id: event.id,
            start: event.startStr,
            end: event.endStr,
            title: event.title,
          },
        ];
      })
    );
    await Promise.resolve(setCurrentEvents([...newEvents]));
    //send to server newEvents
  };

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a name of patient");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();
    const id = currentEvents.length
      ? parseInt(currentEvents[currentEvents.length - 1].id) + 1
      : 1;
    if (title) {
      calendarApi.addEvent({
        id: id,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (editSchedule) {
      if (window.confirm("Are you sure you want to delete this date?")) {
        clickInfo.event.remove();
      }
    }
  };

  const handleEventContent = (info) => {
    try {
      return (
        <>
          <div
            className={
              "project-detail develop" +
              (info.view.type == "timeGridDay" ? " im-day" : "")
            }
          >
            {info.timeText + " - " + info.event.title}
          </div>
        </>
      );
    } catch (err) {
      console.log(err);
    }
  };

  const [duringAdd, setDuringAdd] = useState(false);
  const handleSendToBack = async () => {
    const newData = {
      username: props.profile.username,
      gender: props.profile.gender,
      name: props.profile.name,
      address: props.profile.address,
      medicalSpecialty: props.profile.medicalSpecialty,
      schedule: { data: [...currentEvents] },
    };
    const infoRequestOptions = {
      ...requestOptions,
      headers: {
        ...requestOptions.headers,
        authorization: props.userInformation.token,
      },
      method: "PUT",
      body: JSON.stringify({
        ...newData,
        schedule: JSON.stringify(newData.schedule),
      }),
    };

    setDuringAdd(true);
    const response = await fetch(
      `${import.meta.env.VITE_URL}/doctor/update`,
      infoRequestOptions
    );

    const data = await response.json();

    if (data.success) {
      props.setProfile({
        ...props.profile,
        schedule: { data: [...currentEvents] },
      });
      setEditSchedule(false);

      props.toast.success("Schedule Edited", {
        position: props.toast.POSITION.TOP_CENTER,
      });
    } else {
      console.log(data.error);
      props.toast.error(data.error, {
        position: props.toast.POSITION.TOP_CENTER,
      });
    }
    setDuringAdd(false);
    //send
  };

  const calendarRef = useRef();
  const [key, setKey] = useState(0);

  const handleCancel = () => {
    setCurrentEvents(_.cloneDeep(props.profile.schedule.data));
    setKey(key + 1);
    setEditSchedule(false);
    props.toast.success("Changes Canceled", {
      position: props.toast.POSITION.TOP_CENTER,
    });
  };

  const [currentView, setCurrentView] = useState("timeGridWeek");
  const handleViewChange = (view) => {
    setCurrentView(view.view.type);
  };

  try {
    return (
      <>
        <div className="calendar-container">
          <div>
            <FullCalendar
              key={key}
              plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              views={{
                timeGridDay: {
                  type: "timeGrid",
                  duration: { days: 1 },
                },
              }}
              allDaySlot={false}
              initialView={currentView}
              slotDuration={"00:15:00"}
              selectable={editSchedule}
              editable={editSchedule}
              //   eventDragStart={handleEditStart}
              //   eventDrop={handleEditEnd}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={true}
              nowIndicator={true}
              initialEvents={currentEvents}
              eventsSet={handleEvents}
              select={handleDateSelect}
              eventClick={handleEventClick}
              eventContent={handleEventContent}
              viewDidMount={handleViewChange}
              eventOverlap={false}
            />
          </div>
        </div>
        <div
          className="app-content-actions"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button
            className="action-button"
            onClick={() => {
              setEditSchedule(true);
            }}
            disabled={editSchedule || duringAdd}
          >
            Edit Schedule
          </button>
          <button
            className="action-button"
            onClick={() => {
              handleSendToBack();
            }}
            disabled={!editSchedule || duringAdd}
          >
            Save Changes
          </button>
          <button
            className="action-button"
            onClick={() => {
              handleCancel();
            }}
            disabled={!editSchedule || duringAdd}
          >
            Cancel Changes
          </button>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
};

export default Calendar;
