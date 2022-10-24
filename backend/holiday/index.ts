import express from 'express';
import Holidays from 'date-holidays';

import { HolidayAPI } from 'holidayapi';

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

const app = express();

app.get('/holiday', (req, res) => {
    var hd = new Holidays('CO', 'ANT', undefined);
    var today = new Date();
    today.setDate(today.getDate());
    const isHoliday = hd.isHoliday(today);
    if(isHoliday != false){
        res.status(200).send({message: 'Estimado usuario, se le recuerda que por ser día festivo el precio tendrá un aumento del 50%'});
    }else{
        const yesterday = new Date(today.setDate(today.getDate()-1));
        const isHoliday = hd.isHoliday(yesterday);
        if(isHoliday != false){
            res.status(200).send({message: 'Estimado usuario, se le recuerda que debido a que ayer fue día festivo el precio tendrá un aumento del 20%'});
        }else{
            res.status(200).send({message: 'Estimado usuario, su servicio no tendrá cobro adicional'});
        }
    }
});

app.listen(3000, () => console.log(`Holiday API listening on port 3000!`));