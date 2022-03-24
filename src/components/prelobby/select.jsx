import {React,useState} from 'react'
import Card from 'components/common/Cardfront'
import Display from 'Display'


const Select = () => {
  const [deck, setDeck]=useState("set1");
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-20">
        <a href="/g1">
          <div onMouseEnter={() => setDeck("set1")}><Card img="../imgs/set1/1.png" hover="hover:border-red-600 "/></div>
        </a>
        <a href="/g2">
          <div onMouseEnter={() => setDeck("set2")}><Card img="../imgs/set2/1.png" hover="hover:border-red-600 "/></div>
        </a>
        <a href="/g3">
          <div onMouseEnter={() => setDeck("set3")}><Card img="../imgs/set3/1.png" hover="hover:border-red-600 "/></div>
        </a>
        <div><Card img="../imgs/notfound2.png" hover="hover:border-red-600 "/></div>

      </div>
      <Display set={deck}/>
    </div>
  )
}

export default Select