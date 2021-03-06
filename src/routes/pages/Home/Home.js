import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import TasksCard from '../../../components/molecules/TasksCard'

function Home() {
  return (
    <Container>
      <Row>
        <Col className="mb-2 mb-md-0" md={6}>
          <TasksCard
            title="Task #1"
            subTitle="Статистика"
            link="/statistics"
            description={(<>
              <p>
                <b>Условие:</b>
                <br/>
                Необходимо создать веб-приложение, которое максимально быстро 
                считает статистические параметры по котировкам с биржи.<br/>
                Для этого необходимо создать интерфейс который содержит кнопки 
                “Старт” и “Статистика”. По нажатию на “Старт” должно происходить 
                подключение к эмулятору котировок по адресу вебсокета 
                <code> wss://trade.trademux.net:8800/?password=1234 </code> для получения 
                котировок онлайн.<br/>
                При нажатии на кнопку “Статистика” отображает 
                на странице такие статистические значения:
                <ul className="def-list">
                  <li>среднее</li>
                  <li>стандартное отклонение</li>
                  <li>моду (при мультимодности достаточно только одну моду)</li>
                  <li>медиану</li>
                  <li>количество потерянных котировок если такие есть</li>
                  <li>время расчетов</li>
                </ul>
                Расчеты должны осуществляться по всем полученным данным 
                от момента старта до текущего момента нажатия кнопки “Статистика”, 
                кнопку можно нажимать сколько угодно раз для получения новых 
                результатов на текущее время.
                Формат “котировки” <code>json</code>, поля:<br/>
                <code>{"{id : id_котировки, value : значение_котировки}"}</code>
              </p>
              <b>Технические требования:</b>
              <ul className="def-list">
                <li>Приложение должно быть максимально оптимизировано по скорости работы.</li>
                <li>Время между нажатием Старт и Статистика может быть очень большим (несколько дней)</li>
                <li>Интерфейс должен быть удобен для использования.</li>
                <li>Стиль полей ввода должен быть: бордер ровно 1пкс, черный, при наведении мыши на
                поле ввода фон должен становится серым, при клике на поле фон должен становится
                    желтым (использовать для этого только CSS / SCSS).</li>
                <li>Принятые числа отображать не нужно.</li>
              </ul>
              <b>Уровни сложности задания:</b>
              <ul className="def-list">
                <li><b>junior уровень:</b> посчитать только среднее и стандартное отклонение</li>
                <li><b>Более высокий уровень:</b> посчитать также моду и медиану                </li>
              </ul>
            </>)}
          />
        </Col>
        <Col md={6}>
          <TasksCard
            title="Task #2"
            subTitle="Пингователь"
            link="/ping"
            description={(<>
              <p>
                <b>Условие</b>:
                Написать "пингователь" любого сервера на JavaScript,
                который покажет примерное время пинга до сервера
                указанного в поле ввода.
              </p>
              <b>Технические требования:</b>
              <ul className="def-list">
                <li>Стиль полей ввода должен быть: бордер ровно 1пкс, черный, при наведении мыши на
                поле ввода фон должен становится серым, при клике на поле фон должен становится
                  желтым (использовать для этого только CSS / SCSS).</li>
              </ul>
            </>)}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
