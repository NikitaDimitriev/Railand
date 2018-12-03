var nodemailer = require('nodemailer');

exports.sendMail = sendMail;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'marketing@rl-property.com',
        pass: 'z9M54yWG'
    }
});

async function sendMail(req, res) {
    try {
        if (req.body.filter.type === 'rent') {
            let types = JSON.stringify(req.body.filter.typeOfObject);
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
                from: 'marketing@rl-property.com',
                to: ['raisa@rl-property.com', 'rent@rl-property.com'],
                subject: 'Заявка на аренду',
                html: `    <ul>
                                <li>Расположение: ${req.body.filter.location}</li>
                                <li>Количество спален: ${req.body.filter.rooms}</li>
                                <li>Тип обьекта: Вилла:${listOfTypes}</li>
                                <li>Стоимость: от ${req.body.filter.priceBegin}  до ${req.body.filter.priceEnd}</li>
                            </ul>`
            };
        } else {
            let types = JSON.stringify(req.body.filter.typeOfObject);
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
                from: 'marketing@rl-property.com',
                to: ['raisa@rl-property.com', 'sales@rl-property.com'],
                subject: 'Заявка',
                html: `<ul>
                            <li>Расположение: ${req.body.filter.location}</li>
                            <li>Количество спален: ${req.body.filter.rooms}</li>
                            <li>Тип обьекта: ${listOfTypes}</li>
                            <li>Стоимость: от ${req.body.filter.priceBegin}  до ${req.body.filter.priceEnd}</li>
                            <li>Цель: ${req.body.filter.target}</li>
                            <li>Статус обьекта: ${req.body.filter.statusOfObject}</li>
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

