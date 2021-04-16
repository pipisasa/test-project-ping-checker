import { Component, createContext } from "react";
import { SOCKET_API_URL } from "../helpers/constants";

export const statisticContext = createContext(null);

class StatisticProvider extends Component{
  constructor(props){
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
    this.startStatistic = this.startStatistic.bind(this);
    this.parseStatistic = this.parseStatistic.bind(this);
  }

  data = [];
  totalSum = 0;
  frequencyMap = new Map();
  missed_items_count = 0;

  state = {
    statisticData: null,
    isStarted: false,
    socket: null,
  }

  handleMessage = (event) => {
    const data = JSON.parse(event.data);
    this.totalSum += data.value;
    this.frequencyMap.set( data.value, (this.frequencyMap.get(data.value) || 1) + 1 );
    if(this.data.length && parseInt(this.data[this.data.length-1].id)+1 !== parseInt(data.id)) this.missed_items_count++;
    this.data.push(data);
  }

  getMediana = ()=>{
    const sortedData = [...this.data].sort((a,b)=>a.value-b.value);
    const middleIndex = Math.floor(sortedData.length/2);
    const mediana = sortedData.length%2 ? (sortedData[middleIndex].value + sortedData[middleIndex+1].value)/2 : sortedData[middleIndex].value;
    return mediana;
  }

  getMod = ()=>{
    let res = null;
    for(const item of this.frequencyMap.entries()){
      if(!res || res[1] < item[1]) res = item;
    };
    return res?.[0] || 0;
  }

  getStandardDeviation = (average) => {
    const sum = this.data.reduce((a,b) => a + (b.value-average)**2, 0);
    const res = Math.sqrt(sum/this.data.length).toFixed(4);
    return parseFloat(res);
  }

  parseStatistic = () => {
    if(!this.data.length)return;
    const startTime = Date.now();
    const average = parseFloat((this.totalSum/this.data.length).toFixed(4));
    //? Mediana
    const mediana = this.getMediana();
    //? Mod
    const mod = this.getMod();
    //? Standard Deviation
    const standard_deviation = this.getStandardDeviation(average);
    //? End
    const endTime = Date.now();
    // console.log(this.data)
    this.setState({
      statisticData:{
        totalCount: this.data.length,
        mediana,
        mod,
        average,
        standard_deviation,
        missed_items_count: this.missed_items_count,
        time_of_calculation: endTime - startTime,
        totalSum: this.totalSum,
      },
    })
  }

  startStatistic = () => {
    this.socket = new WebSocket(SOCKET_API_URL);
    this.socket.onopen = ()=>{
      this.setState({
        isStarted: true,
      });
    };
    this.socket.onmessage = this.handleMessage;
  }

  render(){
    return <statisticContext.Provider value={{
      isStarted: this.state.isStarted,
      socket: this.state.socket,
      statisticData: this.state.statisticData,
      startStatistic: this.startStatistic,
      parseStatistic: this.parseStatistic,
    }}>
      {this.props.children}
    </statisticContext.Provider>
  }
};

export default StatisticProvider;