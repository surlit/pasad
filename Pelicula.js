import React from 'react';

	const Pelicula = (props) => {
		//Dos maneras de recibir parametros

		//const titulo = props.titulo;
		const {titulo} = props;
		console.log(titulo);
		//	debugger;
		return (<div><h2>{titulo}</h2></div>);

		};

		export default Pelicula;