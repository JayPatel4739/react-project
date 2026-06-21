import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.json"

const entryElements=data.map((entry)=>{
  return(<Entry
    key={entry.id}
    img={entry.imageUrl}
    alt={entry.title}
    title={entry.title}
    date={entry.date}
    location={entry.location}
    googleMapsUrl={entry.googleMapsUrl}
    description={entry.description}
  />)
})

export default function App(){
  return(
    <div className="container">
      <Header />
      {entryElements}
    </div>
  )
}