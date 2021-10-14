// 2021-10-12 Javascript OOP, paired with Stephen

class Animal {

    constructor(name, age, kind){
        this.name = name;
        this.age = age;
        this.kind = kind;
        this.awake = false;
    }

    speak(){
        if(this.kind == "pig") {
            return "oink";
        }
        else if(this.kind == "lion"){
            return "roar";
        }
    }

    growUp(){
        this.age++;
    }

    wakeUp(){
        this.awake = true;
    }

    sleep(){
        this.awake = false;
    }

    feed(){
        if(this.awake){
            return 'NOM NOM NOM';
        }
        else{
            return 'Animal is not awake';
        }
    }
}

class Clock {
    constructor(clock) {
        this._hours = 0;
        this._minutes = 0;
        this._seconds = 0;

        if(clock) {
            this.hours = clock.hours || 0;
            this.minutes = clock.minutes || 0;
            this.seconds = clock.seconds || 0;
        }
    }

    get hours() {
        return this._hours;
    }

    set hours(value) {
        if(value<=23 && value>=0) {
            this._hours = value;
        }
    }

    get minutes() {
        return this._minutes;
    }

    set minutes(value) {
        if(value<=59 && value>=0) {
            this._minutes = value;
        }
    }

    get seconds() {
        return this._seconds;
    }

    set seconds(value) {
        if(value<=59 && value>=0) {
            this._seconds = value;
        }
    }

    currentTime(){

        return `${this.hours.toString().padStart(2, "0")}:${this.minutes.toString().padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`;
    }

    tick() {
        let tempSeconds = this.seconds;
        let tempMinutes = this.minutes;
        let tempHours = this.hours;
        tempSeconds++;
        if (tempSeconds == 60) {
            tempSeconds = 0;
            tempMinutes++;
            if (tempMinutes == 60) {
                tempMinutes = 0;
                tempHours++;
                if (tempHours == 24) {
                    tempHours = 0;
                }
            }
        }
        this.seconds = tempSeconds;
        this.minutes = tempMinutes;
        this.hours = tempHours;
        return this;
    }
}

const clock1 = new Clock({hours: 12, minutes: 30, seconds: 0});
console.log(clock1.currentTime());

class DigitalClock extends Clock {
    constructor(clock) {
        super(clock);
        this._format24Hours = true;
        this._alarms = [];
    }

    get format() {
       return this._format24Hours ? '24-hour format' : '12-hour format';
    }

    set format(value) {
        this._format24Hours = value;
    }

    toggleFormat() {
       this._format24Hours = !this._format24Hours;
    }

    currentTime(){
        if(this._format24Hours){
            return super.currentTime();
        }
        else{
            let meridiem = 'AM';
            let displayHours = this.hours;
            if(displayHours>12){
                meridiem = 'PM';
                displayHours -= 12;
            }
            return `${displayHours.toString().padStart(2, "0")}:` +
                `${this.minutes.toString().padStart(2, "0")}:` +
                `${this.seconds.toString().padStart(2, "0")}` +
                ` ${meridiem}`;
        }
    }

    setAlarm(alarm){
        alarm.hours = alarm.hours || 0;
        alarm.minutes = alarm.minutes || 0;
        alarm.seconds = alarm.seconds || 0;
        this._alarms.push(alarm);
    }

    tick(){
        super.tick();
        // for(const time of this._alarms){
        //     if(time.hours === this.hours && time.minutes === this.minutes && time.seconds === this.seconds){
        //         console.log('ALARM');
        //     }
        // }
        // this._alarms.forEach(function(time){
        //     if(time.hours === this.hours && time.minutes === this.minutes && time.seconds === this.seconds){
        //         console.log('ALARM');
        //     }
        // });
        this._alarms.forEach(time => {
            if(time.hours === this.hours && time.minutes === this.minutes && time.seconds === this.seconds){
                console.log('ALARM');
            }
        });
        return this;
    }
}

const clock2 = new DigitalClock({ hours: 6, minutes: 29, seconds: 59 })
clock2.setAlarm({ hours: 6, minutes: 30 })
clock2.setAlarm({ hours: 6, minutes: 30 })
clock2.tick() // console.log('ALARM')
clock2.toggleFormat()
console.log(clock2.currentTime());