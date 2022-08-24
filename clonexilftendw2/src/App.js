import React,{ useState, useEffect } from 'react'
import './App.css'
import tmdb from './tmdb'

// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
  
  const[movieLList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData]= useState(null)
  useEffect(() =>{
    const loadAll =async() => {
    let list = await tmdb.getHomeList();
    console.log(list)
    setMovieList(list)

    let originals = list.filter(i => i.slug === 'originals')
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
    let chosen = originals[0].itemss.results[randomChosen]
    let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv')
    console.log(chosenInfo)
    setFeaturedData(chosenInfo)

    }
    loadAll()
  }, [])
  return (
    <div className="page">
      
    </div>
  )
}


