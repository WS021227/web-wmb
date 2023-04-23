function eventfunc(event, eventname, func,borm) {
  event.addEventListener(eventname, func,borm?borm:false);
}
