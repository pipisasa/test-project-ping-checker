import { Button } from 'reactstrap'
import React, { useContext } from 'react'
import { Card, CardBody, Container } from 'reactstrap'
import StatisticsData from './StatisticsData'
import { statisticContext } from '../../../contexts/statistic.context'

function Statistics() {
  const { isStarted, statisticData, startStatistic, parseStatistic } = useContext(statisticContext);
  console.log(statisticData)
  return (
    <Container>
      <Card>
        <CardBody>
          <h3>Статистика</h3>
          {isStarted ? statisticData ? (
            <>
              <p>Нажите "Обновить" чтобы обновить данные</p>
              <Button onClick={parseStatistic} color="primary">
                Обновить
              </Button>
              <StatisticsData/>
            </>
          ) : (
            <>
              <p>Нажите "Показать статистику" чтобы увидеть данные</p>
              <Button onClick={parseStatistic} color="primary">
                Показать статистику
              </Button>
            </>
          ) : (
            <>
              <p>Пока что нет никаких данных.<br/>Нажите начать чтобы начать собирать данные</p>
              <Button onClick={startStatistic} color="primary">
                Начать
              </Button>
            </>
          )}
        </CardBody>
      </Card>
    </Container>
  )
}

export default Statistics
