import React, {useState} from 'react';
import { Link, Route } from 'react-router-dom';
// import Main from './compontes/main';
import Details from './compontes/Details';
import Movies from './compontes/Movies';
import Header from './compontes/Header';
import AddMovie from './compontes/AddMovie';
import ReactStars from 'react-rating-stars-component';
import {Container,Col ,Row, Form, FormControl, Button} from "react-bootstrap";

import picture1 from './assets/Popular on Netflix/p1.PNG';
import picture2 from './assets/Popular on Netflix/p2.PNG';
import picture3 from './assets/Popular on Netflix/p3.PNG';


function App() {

  const movies = [{posterUrl: picture1 ,
    title: 'The Road Trick',
    trailer :'https://www.youtube.com/watch?v=fWhlnoAT_Ic',
    rate: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. ",
    },
    {
      posterUrl: picture2 ,
      title: 'Wynonna Earp',
      trailer : 'https://www.youtube.com/watch?v=8z8BO6IevA8',
      rate: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus.",
      
    }  ,
    {
      posterUrl: picture3 ,
      title: 'Club De Cuervos',
      trailer:'https://www.youtube.com/watch?v=n9xhJrPXop4',
      rate: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus.",
      
    }]
    const [listAllMovies, setAllListMovies] = useState(movies);
    const [listSearchedMovies, setListSearchedMovies] = useState(listAllMovies);

  const onCreate = (movie) => {
    setAllListMovies([...listAllMovies, movie]);
    setListSearchedMovies([...listAllMovies, movie]);
  }

    const onSearch = (type, v) => {
        if (type === 'rate') {
            if (v === 0) {
                setListSearchedMovies(listAllMovies)
            } else {
                const filteredList = listAllMovies.filter(movies => movies[type] >= v)
                setListSearchedMovies(filteredList)
            }
        } else {
            if (v === '') {
                setListSearchedMovies(listAllMovies)
            } else {
                const filteredList = listAllMovies.filter(movies => movies[type].toLowerCase().includes(v.toLowerCase()))
                setListSearchedMovies(filteredList)
            }
        }
    }

  const [getMovie, setgetMovie] = useState()
          
  return (
    <div >
      
      <Header></Header>
      
      
      
    
    <AddMovie onCreateMovie={onCreate}></AddMovie><br></br>
      <Form inline>
      <FormControl type="text" placeholder="Title Search" className="mr-sm-2" onChange={(e) => onSearch('title', e.target.value)} />
      
      
    </Form>
    <br></br>
    <ReactStars onChange={(e) => onSearch('rate', e)}/>
    
      <Route exact={true}  path="/" render={(props)=><Movies movies={listSearchedMovies} />}/>
      <Route  path={`/Movie_Detail/:moviename`} render={(props)=><Details listAllMovies={listAllMovies} {...props}/>}/>
    </div>
  );
}

export default App;
