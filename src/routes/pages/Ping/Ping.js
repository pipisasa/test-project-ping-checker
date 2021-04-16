import React, { useCallback, useState } from 'react'
import { Card, CardBody, Container, Input, Button } from 'reactstrap'

function useCheckPing(){
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const checkPing = useCallback((url)=>{
    const startTime = Date.now();
    setLoading(true);
    fetch(url).then(()=>{
      setLoading(false);
      setResult({
        ping: Date.now()-startTime,
        url,
      });
    }).catch((error)=>{
      console.log({error});
      setLoading(false);
      setResult({
        ping: Date.now()-startTime,
        url,
      });
    });
  },[]);
  return {
    loading,
    result,
    checkPing,
  }
}

function Ping() {
  const [url,setUrl] = useState("");
  const { checkPing, loading, result } = useCheckPing();
  const handleSubmit = ()=>{
    checkPing(url);
  }
  return (
    <Container>
      <Card>
        <CardBody>
          <h3>Пингователь</h3>
          <p>Введите адрес сервера чтобы проверить PING</p>
          <Input
            value={url}
            placeholder="Вставьте URL..."
            onChange={(e)=>setUrl(e.target.value)}
          />
          <br/>
          <Button onClick={handleSubmit} disabled={!!(loading || !url)} color="primary" className="w-100">
            Проверить пинг
          </Button>
          {result && (
            <ul className="def-list">
              <li><b>URL:</b> {result.url}</li>
              <li><b>PING:</b> {result.ping}мс</li>
            </ul>
          )}
        </CardBody>
      </Card>
    </Container>
  )
}

export default Ping
