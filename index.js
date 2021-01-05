flatpickr(document.getElementById('datePicker'), {
    altFormat: "Y-m-d",
    altInput: true,
});

flatpickr(document.getElementById('noWeekEndDatePicker'), {
    altFormat: "Y-m-d",
    altInput: true,
    "disable": [
        function(date) {
            // return true to disable
            return (date.getDay() === 0 || date.getDay() === 6);

        }
    ],
    "locale": {
        "firstDayOfWeek": 1 // start week on Monday
    }
});

flatpickr(document.getElementById('rangeDatePicker'), {
    altFormat: "Y-m-d",
    altInput: true,
    mode: "range"
});

flatpickr(document.getElementById('inlineDatePicker'), {
    altFormat: "Y-m-d",
    altInput: true,
    inline: true
});

flatpickr(document.getElementById('onlyWeekDatePicker'), {
    altFormat: "Y-m-d",
    altInput: true,
    inline: true
});

flatpickr(document.getElementById('onlyTimeDatePicker'), {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    inline: true
});
