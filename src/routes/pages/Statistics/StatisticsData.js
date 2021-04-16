import React, { useContext } from 'react'
import { statisticContext } from '../../../contexts/statistic.context';

function StatisticsData() {

  const { statisticData } = useContext(statisticContext);;

  return (
    <div>

      <ul className="def-list">
        <li><b>Количество котировок: </b>{statisticData.totalCount}</li>
        <li><b>Среднее: </b>{statisticData.average}</li>
        <li><b>Стандартное отклонение: </b>{statisticData.standard_deviation}</li>
        <li><b>Модa: </b>{statisticData.mod}</li>
        <li><b>Медианa: </b>{statisticData.mediana}</li>
        <li><b>Количество потерянных котировок: </b>{statisticData.missed_items_count}</li>
        <li><b>Время расчетов: </b>{statisticData.time_of_calculation}мс.</li>
      </ul>
    </div>
  )
}

export default StatisticsData
