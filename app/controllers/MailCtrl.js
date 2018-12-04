var nodemailer = require('nodemailer');

exports.sendMail = sendMail;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'welcome@rl-property.com',
        pass: 'W4b7z9mx'
    }
});

async function sendMail(req, res) {
    try {
        if (req.body.filter.type === 'rent') {
            let types = req.body.filter.typeOfObject;
            let listOfTypes = "";
            if(types.villa){
                listOfTypes = "Вилла"
            }
            if(types.apartment){
                listOfTypes = listOfTypes + " Апартаменты"
            }
            if(types.house){
                listOfTypes = listOfTypes + " Дом"
            }
            if (types.land) {
                listOfTypes = listOfTypes + " Земельный участок"
            }
            var mailOptions = {
                from: 'welcome@rl-property.com',
                // to: 'nikitadimitriev000@gmail.com',
                to: ['marketing@rl-property.com'],
                subject: 'Заявка на аренду',
                html: `    <ul>
                                <li>Расположение: ${req.body.filter.location}</li>
                                <li>Количество спален: ${req.body.filter.rooms}</li>
                                <li>Тип обьекта: Вилла:${listOfTypes}</li>
                                <li>Стоимость: от ${req.body.filter.priceBegin}  до ${req.body.filter.priceEnd}</li>
                            </ul>`
            };
        } else {
            let types = req.body.filter.typeOfObject;
            let listOfTypes = "";
            let target = "";
            let statusOfObject = "";
            if(types.villa){
                listOfTypes = "Вилла"
            }
            if(types.apartment){
                listOfTypes = listOfTypes + " Апартаменты"
            }
            if(types.house){
                listOfTypes = listOfTypes + " Дом"
            }
            if (types.land) {
                listOfTypes = listOfTypes + " Земельный участок"
            }
            if(req.body.filter.target === 'personal'){
                target = "Личное использование"
            }else if(req.body.filter.target === 'business'){
                target = "Инвестиции"
            }else{
                target = "Все";
            }
            if(req.body.filter.statusOfObject === 'underconstruction'){
                statusOfObject = "Строитество";
            }else if(req.body.filter.statusOfObject === 'complete'){
                statusOfObject = "Вторичный рынок";
            }else{
                statusOfObject = "Все";
            }
            var mailOptions = {
                from: 'welcome@rl-property.com',
                // to: 'nikitadimitriev000@gmail.com',
                to: ['marketing@rl-property.com'],
                subject: 'Заявка',
                html: `<ul>
                            <li>Расположение: ${req.body.filter.location}</li>
                            <li>Количество спален: ${req.body.filter.rooms}</li>
                            <li>Тип обьекта: ${listOfTypes}</li>
                            <li>Стоимость: от ${req.body.filter.priceBegin}  до ${req.body.filter.priceEnd}</li>
                            <li>Цель: ${target}</li>
                            <li>Статус обьекта: ${statusOfObject}</li>
                        </ul>`
            };
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.json(info.response).end();
            }
        });

    } catch (error) {
        console.log(error)
    }

}

