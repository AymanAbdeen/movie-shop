import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Start.scss';
import Footer from "../Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import { IMovie } from '../../Models/IMovie';
import { Component, EventEmitter } from '@angular/core';

//import { Icategories } from '../../Models/IMovie';

export default function Start() {


    const [movies, setMovies] = useState([]);

    const [categorieMovies, setCategorieOfMovies] = useState([]);
    const [alert, setAlert] = useState("");

    const [cartTotal, setCartTotal] = useState(0);

    const [cartCount, setCartCount] = useState(0);

    const [search, setSearch] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);


    let defaultValue: IMovie[] = [];
    const [cart, setCart] = useState(defaultValue);

    const [customerEmail, setCustimerEmail] = useState('');

    /*     function updateCustomerEmail  (event:changeEvent<HTMLInputElement>){
            setCustimerEmail(event.target.value);
        } */

    useEffect(() => {
        total();
        count();
    }, [cart])


    /*  api's gategorie 
        useEffect(() => {
            axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/categories')
                .then(result => {
                    setCategorieOfMovies(result.data);
                });
        }, []); */

    useEffect(() => {
        //axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
        axios.get('https://localhost:5001/movies/')
            .then(result => {
                setMovies(result.data);
            });
    }, []);



    useEffect(() => {
        setFilteredMovies(
            movies.filter((movie: IMovie) =>
                movie.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, movies]);



    async function checkOut() {

        let params = {
            companyId: 8878,
            created: new Date(),
            createdBy: "Aym@n",
            paymentMethod: "Visa",
            totalPrice: total(),
            status: 0,
            OrdersDetails: cart.map(c => { return { movieId: c.id }})
        }
        let res = await axios.post('https://localhost:5001/movies/ordars/',params)
        //let res = await axios.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders',params)
        //console.log(`Check out: ${res.data} `)

    }

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price
            //console.log("total: ", totalVal);
        }
        setCartTotal(totalVal);
    }

    const count = () => {
        let countCart = cart.length;
        setCartCount(countCart);
    }

    const addToCart = (movie: IMovie) => {
        let addMovie = true;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === movie.id)
                addMovie = false;
        }
        if (addMovie) {
            setCart([...cart, movie]);
            setAlert("");
        }
        else setAlert(`ALERT! The Moive (${movie.name}) is already in your cart!!`)
        //console.log(cart, "Hej");
    }

    const removeFromCart = (movie: IMovie) => {
        let copyOfCart = [...cart]
        copyOfCart = copyOfCart.filter(CartItem => CartItem.id !== movie.id)
        setCart(copyOfCart);
        setAlert("");
    }

    /* sort by categorie
       let CategorieMoviesHtml = categorieMovies.map((categorie: Icategories) => {
           return (
               <React.Fragment>
                   <div key={categorie.id}>
                       <h2>{categorie.name}</h2>
                   </div>
   
               </React.Fragment>
           );
       }) */

    let searchMoviesHtml = filteredMovies.map((movie: any) => {
        return (
            <React.Fragment>
                <div className="movie ">
                    <div key={movie.id}>
                        <img className="img" src={movie.imageUrl} alt="" />
                    </div>
                    <h5 className="movie-title">{movie.name}</h5>
                    <h3 className="price">{movie.price} kr</h3>
                    <button className="button-add btn-main" type="submit" value="Add" onClick={() => addToCart(movie)}>
                        <span>Add to Cart</span>
                    </button>
                    <button className="button btn-info" type="submit" value="Add">INFO</button>
                </div>
            </React.Fragment>
        );
    })


    let CartItems = cart.map((movie: any) => {
        return (
            <React.Fragment>
                <div className="movie ">
                    <div key={movie.id}>
                        <img className="img" src={movie.imageUrl} alt="" />
                    </div>
                    <h5 className="movie-title">{movie.name}</h5>
                    <h3 className="price">{movie.price} kr</h3>
                    <button className="button-add button-remove btn-main" type="submit" value="Add" onClick={() => removeFromCart(movie)}>
                        <span>Remove Item</span>
                    </button>
                    <button className="button btn-info" type="submit" value="Add">INFO</button>
                </div>
            </React.Fragment>
        );
    })
    return (
        <div className="all-movie">
            {/* <div><h3>{CategorieMoviesHtml} </h3> </div> */}
            <div className={'search-bar'}>
                <div className={'search-bar__content'}>
                    <i className="search-bar__icon fas fa-search"></i>
                    <input className="search-bar__input" type="text" placeholder="Search Movies" onChange={(e) => setSearch(e.target.value)} />{filteredMovies.map((movie, idx) => (<div key={idx} {...movie} />))}
                </div>
            </div>
            <div className="row">
                <div className="Movie-part">
                    <div className="row">{searchMoviesHtml}</div>
                </div>
                <div className="Cart-part">
                    <h2> your Shopping Cart! </h2>
                    <h4>You have {cartCount} Items in your cart</h4>
                    <h5 className="alert"> {alert}</h5>
                    <div className="row">{CartItems}</div>
                    <span className="">__________________________________</span>
                    <h3 className="total">Total: {cartTotal} SEK</h3>
                    <button type='button' className="btn btn-primary btn-lg" onClick={() => checkOut()}>Check Out</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}