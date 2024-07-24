import { useState } from 'react'

const App = ()=> {

  const [showImage, setShowImage] = useState(true)
  const [bgDiv, setBgDiv] = useState("red")
  const [input, setInput] = useState("")
  const [fontSize, setFontSize] = useState(30)
  const [color, setColor] = useState("green")
  const [list, setList] = useState("")
  const [data, setData] = useState([])
  const [students, setStudents] = useState([
    "Manjit Singh",
    "Ajay Singh",
    "Pooja Devi"
  ])

  const [value, setValue] = useState("")


  const addList = ()=> {
    setData([...data, list])
  }

  const deleteList = (index)=> {
    const copyOfArray = [...students]
    copyOfArray.splice(index, 1)
    setStudents(copyOfArray)
  }

  const createList = ()=> {
    setStudents([
      ...students, value
    ])
  }


  return (
    <div style={{
      minHeight: '100vh',
      background: '#ddd'
    }}>

      <div style={{
        background: 'white',
        padding: 48,
        width: '50%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 32
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h1 style={{padding: 0, marginBottom: 4}}>Manjit Singh</h1>
          <p style={{padding: 0, margin: 0, color: 'gray'}}>State Management React Application</p>
        </div>

        <div>
          <h2>Show & Hide app</h2>
          { showImage && <img src="./images/flower.jpg" width={"100%"}></img>}
          <button 
            onClick={()=> setShowImage(!showImage)}
            style={{
              background: 'green',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 5,
              border: 'none',
              marginTop: 12
            }}
            >
            {showImage ? 'Hide' : 'Show'}
          </button>
        </div>

        <div>
          <h2>Background Toggle Div</h2>
          <div style={{
            width: 300,
            height: 300,
            background: bgDiv,
            borderRadius: 16
          }}/>
          <button 
            onClick={()=> setBgDiv(bgDiv === "red" ? "blue" : "red")}
            style={{
              background: bgDiv === "red" ? "blue" : "red",
              color: 'white',
              padding: '12px 24px',
              borderRadius: 5,
              border: 'none',
              marginTop: 12
            }}
            >
            {bgDiv === "red" ? "Blue" : "Red"}
          </button>
        </div>
        
        <div>
          <h2>Live Input Preview</h2>
          <input 
            placeholder='Type Your Text Here' 
            style={{
              border: '1px sooid #ccc',
              padding: 8,
              width: 300,
              borderRadius: 5

          }}
          onChange={(e)=> setInput(e.target.value)}
          />

          <h1>{input}</h1>
          
        </div>

        <div>
          <h2>Font increaser</h2>
          <p style={{
            fontSize: fontSize
          }}>Manjit Singh</p>
          <input type="range" min="30" max="100" step="1" onChange={(e)=> setFontSize(Number(e.target.value))}/>
        </div>

        <div>
          <h2>Color value sample</h2>
          <input 
            placeholder="Enter color name" 
            onChange={(e)=> setColor(e.target.value)} 
            value={color}
            style={{
              border: '1px solid #000',
              padding: '8px 10px',
              width: 300,
              borderRadius: 5
            }}
          />

          <div style={{
            width: 150,
            height: 150,
            background: color,
            marginTop: 16
          }}/>
        </div>

        <div>
          <h1>Dynamic list (Using useState and Array)</h1>
          <div>
            <input 
              onChange={(e)=> setList(e.target.value) }
              placeholder='Enter Product name'
              style={{
                border: '1px solid #ccc',
                padding: 12,
                borderRadius: 5,
                width: 350
            }}
            />
            <button 
              onClick={addList}
              style={{
                  border: 'none',
                  background: 'darkorange',
                  padding: 12,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  width: 110,
                  borderRadius: 6

            }}>Add</button>
          </div>

          <ul>
            {
              data.map((item, index)=> (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </div>

        <div>
          <h1>Add & Delete By using (useState)</h1>
          <ul>
            {
              students.map((item, index) =>(
                <li 
                  style={{
                    margin: 10
                }}
                  key={index}>
                  {item}
                  <button 
                    onClick={()=> deleteList(index)}
                    style={{
                      border: 'none',
                      background: 'red',
                      color: 'white',
                      borderRadius: 5,
                      padding: '8px 10px',
                      width: 80,
                      marginLeft: 10
                    }}
                  >Delete</button>
                </li>
              ))
            }
          </ul>

          <input 
            onChange={(e)=>setValue(e.target.value)}
            placeholder='Enter Students name'
              style={{
                border: '1px solid #ccc',
                padding: 12,
                borderRadius: 5,
                width: 350
            }}
          />
          <button 
              onClick={createList}
              style={{
                  border: 'none',
                  background: '#4285F4',
                  color: 'white',
                  padding: 12,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  width: 110,
                  borderRadius: 6

            }}>Add</button>
        </div>

        
      </div>
    </div>
  )
}

export default App;