import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Collapse } from 'reactstrap'

function TasksCard({ title, subTitle, description, link}) {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <Card>
    <CardBody>
      <h4>{title}</h4>
      <p>{subTitle}</p>
      <Button color="success" onClick={()=>{setIsOpen(!isOpen)}}>
        Описание
      </Button>
      <br/>
      <br/>
      <Collapse isOpen={isOpen}>
        {description}
      </Collapse>
      <Link to={link}>
        <Button className="w-100" color="primary">
          Посмотреть
        </Button>
      </Link>
    </CardBody>
  </Card>
  )
}

export default TasksCard
