"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const date_holidays_1 = __importDefault(require("date-holidays"));
// function checkSunday(date: Date, locale: string)
// {
//     //const date = new Date(dateStr);
//     console.log('date: ', date)
//     const day = date.toLocaleDateString(locale, { weekday: 'long' });     
//     if(day.toLowerCase() == "sunday"){
//         return true;
//     }   
//     return false;
// }
const app = (0, express_1.default)();
app.get('/holiday', (req, res) => {
    // const isSunday = checkSunday(today, "co-CO");
    // const key = 'a8468558-8770-499a-a99d-8a9f6113a507'
    // const holidayApi = new HolidayAPI({ key });
    // const apiResponse = holidayApi.holidays({
    //     country: 'CO',
    //     year: today.getFullYear()-1, //-1 porque no tengo full acceso a la api para obtener festivos del año en curso
    //     month: today.getMonth(),
    //     day: today.getDay()
    // });
    var hd = new date_holidays_1.default('CO');
    const today = new Date();
    today.setDate(today.getDate() + 8);
    const isHoliday = hd.isHoliday(today);
    console.log(isHoliday);
    res.send(today);
    // if (isSunday){
    //     res.send({message: 'Estimado usuario, se le recuerda que por ser día dominical el precio tendrá un aumento del 50%'})
    // }else{
    //     const yesterday = new Date();
    //     yesterday.setDate(yesterday.getDate() - 1);
    //     const wasSunday = checkSunday(yesterday, "co-CO");
    //     if (wasSunday){
    //         res.send({message: 'Estimado usuario, se le recuerda que debido a que ayer fue día dominical el precio tendrá un aumento del 20%'})
    //     }
    //     res.send({message: 'Estimado usuario, se le recuerda que por ser día dominical el precio tendrá un aumento del 50%'})
    // }
    // res.send(isSunday);
});
app.listen(3000, () => console.log(`Holiday API listening on port 3000!`));
